import React from "react";
import { Screen } from "../../components";
import { ShippingCalculator as Calculator } from "../../components/ShippingCalculator";

export const ShippingCalculator = ({navigation}) => {
  return (
    <Screen preset="scroll" safeAreaEdges={["top"]}>
      <Calculator navigation={navigation.goBack()} />
    </Screen>
  );
};