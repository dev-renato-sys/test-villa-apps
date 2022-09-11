import {View, Text} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';

const AppButton = ({text, onPress}) => {
  return <Button onPress={onPress}>{text}</Button>;
};

export default AppButton;
