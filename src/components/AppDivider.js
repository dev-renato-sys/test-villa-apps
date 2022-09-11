import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  textView: {flex: 1, height: 1, backgroundColor: 'black'},
  text: {paddingHorizontal: 10, textAlign: 'center'},
  right: {flex: 1, height: 1, backgroundColor: 'black'},
});

const AppDivider = ({text}) => {
  return (
    <View style={styles.left}>
      <View style={styles.textView} />
      {text && (
        <>
          <View>
            <Text style={styles.text}>{text}</Text>
          </View>
        </>
      )}
      <View style={styles.right} />
    </View>
  );
};

export default AppDivider;
