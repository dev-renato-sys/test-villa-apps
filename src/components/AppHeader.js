import {View, Text} from 'react-native';
import React from 'react';
import {Appbar, useTheme} from 'react-native-paper';

const AppHeader = ({title, onPress}) => {
  const {colors} = useTheme();

  return (
    <Appbar.Header>
      <Appbar.Content title={title} color={colors.text} />
      <Appbar.Action
        icon="calendar-plus"
        color={colors.text}
        onPress={onPress}
      />
    </Appbar.Header>
  );
};

export default AppHeader;
