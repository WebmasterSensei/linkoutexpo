import { StyleSheet, Text, View } from "react-native";
import React from "react";
import theme from "../../constants/theme";
import Home from "./Home";
import ArrowRight from "./ArrowRight";
import ArrowLeft from "./ArrowLeft";

const icons = {
    home: Home,
    arrowLeft: ArrowLeft
}

const Icon = ({ name, ...props }) => {
  const IconComponent = icons[name];
  return (
  <IconComponent 
  height={props.size || 24} 
  width={props.size || 24} 
  strokeWidth={props.strokeWidth || 1.9} 
  color={theme.colors.light}
  {...props}
  />
);
};

export default Icon;

const styles = StyleSheet.create({});
