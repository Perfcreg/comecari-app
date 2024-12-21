import MapView, { Marker, Polyline } from "react-native-maps"
import MapViewDirections from 'react-native-maps-directions';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from "@expo/vector-icons"
import config from 'app/config'
import { MyMapView } from "./MapView"
import {View, StyleSheet} from 'react-native'
import { spacing } from "app/theme";
interface Coordinates {
    latitude: number;
    longitude: number;
  }
  
  interface LocationPoint {
    cordinates: Coordinates;
    name: string;
  }
  
  interface MapViewProps {
    data: {
      origin: LocationPoint;
      destination: LocationPoint;
    };
    truckPosition: Coordinates;
    onRegionChange?: (region) => void;
  }
  
  const MapMarker: React.FC<{ coordinate: Coordinates; title: string; icon: string }> = ({
    coordinate,
    title,
    icon
  }) => (
    <Marker coordinate={coordinate} title={title}>
      <FontAwesome name={icon} size={30} color="#000" />
    </Marker>
  );
  
  const RouteDirections: React.FC<{
    origin: Coordinates;
    destination: Coordinates;
  }> = ({ origin, destination }) => (
    <MapViewDirections
      origin={origin}
      destination={destination}
      apikey='abc'
      strokeWidth={3}
      strokeColor="blue"
    />
  );
  
  const MapOverlay: React.FC = () => (
    <LinearGradient
      colors={['rgba(0,0,0,1)', 'transparent']}
      style={styles.gradientOverlay}
      start={{ x: 0.2, y: 0.2 }}
      
    />
  );
  
  const ShipmentMapView: React.FC<MapViewProps> = ({ data, truckPosition, onRegionChange }) => {
    const initialRegion = {
      ...data.origin.cordinates,
      latitudeDelta: 2,
      longitudeDelta: 2,
    };
  
    return (
      <View style={[styles.container, {
      // marginTop: spacing.medium
      }]}>
        <MyMapView
          region={initialRegion}
          onRegionChange={onRegionChange}
        >
          <MapMarker
            coordinate={data.origin.cordinates}
            title={data.origin.name}
            icon="map-pin"
          />
          
          <MapMarker
            coordinate={data.destination.cordinates}
            title={data.destination.name}
            icon="map-pin"
          />
  
          <MapMarker
            coordinate={truckPosition}
            title="Truck"
            icon="truck"
          />
  
          <RouteDirections
            origin={data.origin.cordinates}
            destination={data.destination.cordinates}
          />
        </MyMapView>
  
        <MapOverlay />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
        height: 300,
        width: '100%',
        position: 'absolute',
        // marginBottom: "22px"
    },
    gradientOverlay: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 300,
    },
  });
  
  export default ShipmentMapView;
  