import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import AppHeader from '../components/AppHeader';
import AppBottomHeader from '../components/AppBottomHeader';
import {Button, Card, Colors, TextInput, useTheme} from 'react-native-paper';
import AppModal from '../components/AppModal';
import AppDivider from '../components/AppDivider';
import AppButton from '../components/AppButton';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useEvents} from '../context/Events';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 22,
  },
  item: {
    paddingLeft: 16,
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  centeredContainer: {
    // display: 'flex',
    // flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const AddEventsPage = ({navigation}) => {
  const [until, setUntil] = React.useState(null);
  const [eventName, setEventName] = React.useState(null);
  const [eventDescription, setEventDescription] = React.useState(null);
  const [date, setDate] = React.useState(null);
  const [remainingDays, setRemainingDays] = React.useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);

  const {addEvent} = useEvents();

  const addDays = (givenDate, days) => {
    const newDate = new Date(givenDate.getTime() + days * 24 * 60 * 60 * 1000);
    setDate(newDate.toString());
    const v = remains(newDate);
    setUntil(v / 1000);
    // setDate(tomorrow.toString());
  };

  const remains = givenDate => {
    const today = new Date();
    const utc1 = Date.UTC(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
    );
    const utc2 = Date.UTC(
      givenDate.getFullYear(),
      givenDate.getMonth(),
      givenDate.getDate(),
    );

    const v = Math.floor(utc2 - utc1);

    return v;

    // setDate(tomorrow.toString());
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = myDate => {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    // console.log(myDate);
    setDate(myDate.toString());

    const v = remains(myDate);

    setUntil(v / 1000);

    setRemainingDays(Math.floor(v / _MS_PER_DAY).toString());

    // console.warn('A date has been picked: ', myDate);
    hideDatePicker();
  };

  return (
    <>
      <View style={{padding: 10, flexDirection: 'column', flex: 1, gap: 10}}>
        <TextInput
          label="Event name"
          editable
          numberOfLines={4}
          value={eventName}
          onChangeText={text => setEventName(text)}
          // value={value}
          style={{padding: 10}}
        />
        <TextInput
          label="Description"
          editable
          numberOfLines={4}
          value={eventDescription}
          onChangeText={text => setEventDescription(text)}
          // value={value}
          style={{padding: 10}}
        />
        <TextInput
          showSoftInputOnFocus={false}
          label="Date from Calendar"
          editable
          numberOfLines={4}
          value={date}
          onPressIn={showDatePicker}
          // onChangeText={text => onChangeText(text)}
          // value={value}
          style={{padding: 10}}
        />
        <TextInput
          keyboardType="numeric"
          label="Remaining days"
          editable
          numberOfLines={4}
          value={remainingDays}
          onChangeText={text => {
            if (text) {
              setRemainingDays(text);
              addDays(new Date(), text);
            } else {
              setDate('');
              setRemainingDays(text);
            }
          }}
          // onChangeText={text => onChangeText(text)}
          // value={value}
          style={{padding: 10}}
        />
        <View style={{padding: 20}}>
          <Button
            title="Show Date Picker"
            onPress={() => {
              addEvent({
                name: eventName,
                date: date,
                eventDescription: eventDescription,
                until: until,
              });

              navigation.goBack();
            }}>
            SAVE EVENT
          </Button>
        </View>
      </View>
      <DateTimePickerModal
        // accentColor=""
        minimumDate={new Date()}
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </>
  );
};

export default AddEventsPage;
