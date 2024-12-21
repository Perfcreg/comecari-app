import React, { useState, useEffect } from "react";
import { View, ViewStyle, TextInput, ScrollView, Alert } from "react-native";
import { Text, TextField, Button } from ".";
import { colors, spacing } from "../theme";
import { UserApi } from "../services/api/user-api";
import { getDistanceMatrix } from "../utils/distance";
import { MapInput } from "./MapInput";
import DropDownPicker from 'react-native-dropdown-picker';
import { Trucks } from "../utils/trucks";
import { GOODTYPES } from "../utils/Data/Goods";
import {Header} from 'app/components' 
const INSURANCE_RATE = 0.02; // 2% insurance rate
const PEAK_SEASON_RATE = 1.15; // 15% peak season surcharge
const RUSH_DELIVERY_RATE = 1.25; // 25% rush delivery surcharge
const HANDLING_FEE = 5000; // Base handling fee

export const ShippingCalculator = ({navigation}) => {
  const [originLocation, setOriginLocation] = useState("");
  const [destinationLocation, setDestinationLocation] = useState("");
  const [weight, setWeight] = useState("");
  const [distance, setDistance] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [breakdown, setBreakdown] = useState({});
  
  // Dropdown states
  const [openTruck, setOpenTruck] = useState(false);
  const [selectedTruck, setSelectedTruck] = useState(null);
  const [truckTypes, setTruckTypes] = useState(Trucks.map(truck => ({
    label: truck.type,
    value: truck.value
  })));

  const [openGood, setOpenGood] = useState(false);
  const [selectedGood, setSelectedGood] = useState(null);
  const [goodTypes, setGoodTypes] = useState(GOODTYPES);

  // Additional options
  const [isPeakSeason, setIsPeakSeason] = useState(false);
  const [isRushDelivery, setIsRushDelivery] = useState(false);
  const [isInsuranceRequired, setIsInsuranceRequired] = useState(false);

  const calculateShippingCost = async () => {
    try {
      if (!originLocation || !destinationLocation || !weight || !selectedTruck || !selectedGood) {
        Alert.alert("Error", "Please fill in all required fields");
        return;
      }

      // Get distance and fuel price
      const distanceMatrix = await getDistanceMatrix(originLocation, destinationLocation);
      const numericDistance = extractNumericValue(distanceMatrix.rows[0].elements[0].distance?.text);
      setDistance(numericDistance);

      // Get current fuel price
      const request = new UserApi();
      const { data } = await request.getSetting();
      const fuelPrice = data?.data.find((price) => price.name === "Fuel")?.value || 0;

      // Base calculations
      const litresPerKilometer = 40 / 100;
      const fuelCost = numericDistance * litresPerKilometer * fuelPrice;
      const workmanshipCost = numericDistance * 2000;
      const truckMaintenance = numericDistance * 300;
      const weightFactor = Math.max(1, Number(weight) / 1000);
      
      let baseCost = (fuelCost + workmanshipCost + truckMaintenance) * weightFactor;
      
      // Add truck size factor
      const truckSizeFactor = selectedTruck === 'large' ? 1.5 : selectedTruck === 'medium' ? 1.2 : 1;
      baseCost *= truckSizeFactor;

      // Calculate additional costs
      const handlingCost = HANDLING_FEE * weightFactor;
      const peakSeasonCost = isPeakSeason ? baseCost * (PEAK_SEASON_RATE - 1) : 0;
      const rushDeliveryCost = isRushDelivery ? baseCost * (RUSH_DELIVERY_RATE - 1) : 0;
      const insuranceCost = isInsuranceRequired ? baseCost * INSURANCE_RATE : 0;

      // Calculate total cost
      const total = baseCost + handlingCost + peakSeasonCost + rushDeliveryCost + insuranceCost;
      
      // Round to nearest thousand
      const roundedTotal = Math.ceil(total / 1000) * 1000;
      
      setTotalCost(roundedTotal);
      setBreakdown({
        baseCost: Math.round(baseCost),
        handlingCost: Math.round(handlingCost),
        peakSeasonCost: Math.round(peakSeasonCost),
        rushDeliveryCost: Math.round(rushDeliveryCost),
        insuranceCost: Math.round(insuranceCost)
      });

    } catch (error) {
      console.error('Error calculating shipping cost:', error);
      Alert.alert("Error", "Failed to calculate shipping cost");
    }
  };

  function extractNumericValue(valueWithUnit: string): number {
    const numericPart = parseInt(valueWithUnit, 10);
    return !isNaN(numericPart) ? numericPart : 0;
  }

  return (
    <ScrollView style={$container}>
      <Header 
        title="Market Place Calculator"
        leftIcon="back"
        leftIconPress={() => {
          navigation
        }}
      />
      <View style={$content}>
        
        <Text text="Pickup Location" preset="formHelper" style={$label} />
        <MapInput
          notifyChange={(data, details) => {
            setOriginLocation(details.description);
          }}
          placeholder="Enter pickup location"
        />

        <Text text="Delivery Location" preset="formHelper" style={$label} />
        <MapInput
          notifyChange={(data, details) => {
            setDestinationLocation(details.description);
          }}
          placeholder="Enter delivery location"
        />

        <TextField
          label="Weight (kg)"
          placeholder="Enter weight in kilograms"
          keyboardType="numeric"
          onChangeText={setWeight}
          value={weight}
          containerStyle={$textField}
        />

        <View style={[$dropdownContainer, {
          zIndex: 1000
        }]}>
          <Text text="Truck Type" preset="formHelper" style={$label} />
          <DropDownPicker
            open={openTruck}
            value={selectedTruck}
            items={truckTypes}
            setOpen={setOpenTruck}
            setValue={setSelectedTruck}
            setItems={setTruckTypes}
            placeholder="Select truck type"
            style={$dropdown}
          />
        </View>

        <View style={$dropdownContainer}>
          <Text text="Cargo Type" preset="formHelper" style={$label} />
          <DropDownPicker
            open={openGood}
            value={selectedGood}
            items={goodTypes}
            setOpen={setOpenGood}
            setValue={setSelectedGood}
            setItems={setGoodTypes}
            placeholder="Select cargo type"
            style={$dropdown}
          />
        </View>

        <View style={$optionsContainer}>
          <Button
            text={isPeakSeason ? "Peak Season" : "Off Season"}
            preset={isPeakSeason ? "filled" : "default"}
            onPress={() => setIsPeakSeason(!isPeakSeason)}
            style={$optionButton}
          />
          <Button
            text={isRushDelivery ? "Rush Delivery" : "Standard Delivery"}
            preset={isRushDelivery ? "filled" : "default"}
            onPress={() => setIsRushDelivery(!isRushDelivery)}
            style={$optionButton}
          />
          <Button
            text={isInsuranceRequired ? "With Insurance" : "No Insurance"}
            preset={isInsuranceRequired ? "filled" : "default"}
            onPress={() => setIsInsuranceRequired(!isInsuranceRequired)}
            style={$optionButton}
          />
        </View>

        <Button
          text="Calculate Cost"
          preset="reversed"
          onPress={calculateShippingCost}
          style={$calculateButton}
        />

        {totalCost > 0 && (
          <View style={$resultContainer}>
            <Text text="Estimated Shipping Cost Breakdown" preset="subheading" style={$breakdownTitle} />
            <Text text={`Distance: ${distance} km`} style={$breakdownText} />
            <Text text={`Base Cost: ₦${breakdown.baseCost?.toLocaleString()}`} style={$breakdownText} />
            <Text text={`Handling Fee: ₦${breakdown.handlingCost?.toLocaleString()}`} style={$breakdownText} />
            {breakdown.peakSeasonCost > 0 && (
              <Text text={`Peak Season Surcharge: ₦${breakdown.peakSeasonCost?.toLocaleString()}`} style={$breakdownText} />
            )}
            {breakdown.rushDeliveryCost > 0 && (
              <Text text={`Rush Delivery Fee: ₦${breakdown.rushDeliveryCost?.toLocaleString()}`} style={$breakdownText} />
            )}
            {breakdown.insuranceCost > 0 && (
              <Text text={`Insurance Cost: ₦${breakdown.insuranceCost?.toLocaleString()}`} style={$breakdownText} />
            )}
            <Text text={`Total Cost: ₦${totalCost.toLocaleString()}`} preset="heading" style={$totalCost} />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const $container: ViewStyle = {
  flex: 1,
};

const $content: ViewStyle = {
  padding: spacing.medium,
};

const $title: TextStyle = {
  textAlign: "center",
  marginBottom: spacing.large,
};

const $label: TextStyle = {
  marginTop: spacing.medium,
  marginBottom: spacing.extraSmall,
};

const $textField: ViewStyle = {
  marginTop: spacing.small,
};

const $dropdownContainer: ViewStyle = {
  marginTop: spacing.medium,
  zIndex: 1000,
};

const $dropdown: ViewStyle = {
  backgroundColor: colors.background,
  borderColor: colors.border,
};

const $optionsContainer: ViewStyle = {
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  marginTop: spacing.large,
  gap: spacing.small,
};

const $optionButton: ViewStyle = {
  flex: 1,
  minWidth: "45%",
  marginBottom: spacing.small,
};

const $calculateButton: ViewStyle = {
  marginTop: spacing.extraLarge,
};

const $resultContainer: ViewStyle = {
  marginTop: spacing.large,
  padding: spacing.medium,
  backgroundColor: colors.palette.neutral200,
  borderRadius: 8,
};

const $breakdownTitle: TextStyle = {
  marginBottom: spacing.medium,
};

const $breakdownText: TextStyle = {
  marginBottom: spacing.small,
};

const $totalCost: TextStyle = {
  marginTop: spacing.medium,
  color: colors.palette.primary500,
};