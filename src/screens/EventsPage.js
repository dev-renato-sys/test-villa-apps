import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';
import AppHeader from '../components/AppHeader';
import AppBottomHeader from '../components/AppBottomHeader';
import {Button, Card, useTheme} from 'react-native-paper';
import AppModal from '../components/AppModal';
import AppDivider from '../components/AppDivider';
import AppButton from '../components/AppButton';
import {useEvents} from '../context/Events';
import CountDown from 'react-native-countdown-component';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 4,
    // paddingTop: 22,
  },
  item: {
    paddingLeft: 16,
    padding: 10,
    fontSize: 18,
    height: 44,
    fontWeight: 'bold',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
  },
  centeredContainer: {
    // display: 'flex',
    // flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const EventsPage = () => {
  const [modalVisible, setModalVisible] = React.useState(false);

  const {events, deleteEvent} = useEvents();

  return (
    <>
      <View style={styles.container}>
        {events.length === 0 && (
          <>
            <View style={styles.centeredContainer}>
              <Text>Nenhum evento encontrado.</Text>
            </View>
          </>
        )}
        <FlatList
          data={events}
          renderItem={({item}) => (
            <>
              <Card>
                <View style={styles.fixToText}>
                  <Text style={styles.item}>{item.name}</Text>
                  <Button
                    onPress={() => {
                      // deleteEvent(item);
                    }}>
                    DELETE
                  </Button>
                </View>
                <View style={{padding: 16}}>
                  <CountDown
                    until={item.until}
                    timeToShow={['D', 'H', 'M', 'S']}
                    digitStyle={{backgroundColor: '#FFF'}}
                    onFinish={() => alert('Finished!')}
                    // onPress={() => alert('Contagem Regressiva!')}
                    size={16}
                  />
                </View>
                <View style={{padding: 16}}>
                  <Text style={{fontWeight: 'bold'}}>Event Description</Text>
                  <Text>{item.eventDescription}</Text>
                </View>
              </Card>
            </>
          )}
        />
        <AppModal
          modalVisible={modalVisible}
          onClose={() => {
            setModalVisible(val => !val);
          }}
          title="Adicionar Evento">
          <View style={{padding: 30}}>
            <Text>Alguma coisa aqui</Text>
          </View>
        </AppModal>
      </View>
    </>
  );
};

export default EventsPage;
