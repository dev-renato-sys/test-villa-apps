import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import AppHeader from '../components/AppHeader';
import AppBottomHeader from '../components/AppBottomHeader';
import {Button, Card, useTheme} from 'react-native-paper';
import AppModal from '../components/AppModal';
import AppDivider from '../components/AppDivider';
import AppButton from '../components/AppButton';
import {AppCards1, AppCards2} from '../components/AppCards';

const styles = StyleSheet.create({
  twoCards: {flexDirection: 'row', padding: 2},
  oneCard: {paddingHorizontal: 2},
});

const HomePage = ({navigation}) => {
  return (
    <>
      <View style={styles.twoCards}>
        <AppCards2
          title="Events"
          onPress={() => {
            navigation.navigate('Events');
          }}
        />
        <AppCards2 title="Data" />
      </View>
      <View style={styles.oneCard}>
        <AppCards1 title="Games" />
      </View>
    </>
  );
};

export default HomePage;
