import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  modalContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modal: {
    backgroundColor: '#AFA7B2',
    width: 250,
    padding: 20,
    borderRadius: 10,
  },
  modalMessage: {
    textAlign: 'center',
    fontSize: 20
  },
  modalActions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  }
});
export default styles;