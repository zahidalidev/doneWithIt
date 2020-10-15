import React, { Component } from 'react';
import { Text } from "react-native";

import defaultStyle from "../config/styles";

export default function AppText({ children, style, ...otherProps }) {
  return (
    <Text style={[defaultStyle.text, style]} {...otherProps} >{children}</Text>
  );
};


