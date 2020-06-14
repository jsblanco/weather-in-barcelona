import React from "react";
import { EuiProgress } from "@elastic/eui";

export default function index({ rainProbability }) {
  let rainChanceColor;

  switch (true) {
    case parseInt(rainProbability)> 70:
        rainChanceColor= "danger";
      break;
    case parseInt(rainProbability) > 40:
        rainChanceColor= "primary";      
      break;
    case parseInt(rainProbability) > 10:
        rainChanceColor= "success";
      break;
    default:
        rainChanceColor= "subdued";
      break;
  }

  return <EuiProgress value={rainProbability} max={100} color={rainChanceColor} />;
}
