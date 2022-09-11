import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import {
  Button,
  Divider,
  IconButton,
  Portal,
  Provider,
  useTheme,
} from 'react-native-paper';
import AppButton from './AppButton';
import AppDivider from './AppDivider';

const containerStyle = {backgroundColor: 'white'};

const AppModal = ({modalVisible, onClose, title, children}) => {
  const {colors} = useTheme();

  const styles = StyleSheet.create({
    background: {
      height: 100,
      flexDirection: 'row',
      // justifyContent: 'space-between',
      alignItems: 'baseline',
    },
    text: {
      fontSize: 20,
      color: 'white',
      fontWeight: 'bold',
    },
    view: {
      borderTopEndRadius: 50,
      borderTopStartRadius: 50,
      backgroundColor: 'white',
      flex: 2,
    },
  });

  return (
    <>
      <Provider>
        <Portal>
          <Modal
            visible={modalVisible}
            onDismiss={onClose}
            contentContainerStyle={containerStyle}>
            <View style={{backgroundColor: colors.primary, flex: 1}}>
              <View style={styles.background}>
                <IconButton icon="arrow-left" color="white" onPress={onClose} />
                <Text style={styles.text}>{title}</Text>
              </View>
              <View style={styles.view}>{children}</View>
            </View>
          </Modal>
        </Portal>
      </Provider>
    </>
  );
  //   return (
  //     <View style={styles.centeredView}>
  //       <Modal
  //         animationType="slide"
  //         transparent={true}
  //         visible={modalVisible}
  //         onRequestClose={() => {
  //           Alert.alert('Modal has been closed.');
  //           //   setModalVisible(!modalVisible);
  //         }}>
  //         <View style={styles.centeredView}>
  //           <View style={styles.modalView}>
  //             {children}
  //             <AppDivider />
  //             <AppButton onPress={onClose} text="Fechar" />
  //           </View>
  //         </View>
  //       </Modal>
  //     </View>
  //   );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default AppModal;
