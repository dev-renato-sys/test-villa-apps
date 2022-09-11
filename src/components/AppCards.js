import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';
import {Card} from 'react-native-paper';
import {Icon} from 'react-native-paper/lib/typescript/components/Avatar/Avatar';

const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  cardLayout: {
    width: windowWidth / 2.02,
    height: 120,
  },
  oneCardLayout: {
    width: windowWidth / 1.01,
    height: 120,
  },
});

export const AppCards1 = ({icon, title, onPress}) => {
  return (
    <>
      <Card style={styles.oneCardLayout} onPress={onPress}>
        <Card.Content>
          <Text>{title}</Text>
        </Card.Content>
      </Card>
    </>
  );
};

export const AppCards2 = ({icon, title, onPress}) => {
  return (
    <>
      <Card style={styles.cardLayout} onPress={onPress}>
        <Card.Content>
          <Text>{title}</Text>
        </Card.Content>
      </Card>
    </>
  );
};
