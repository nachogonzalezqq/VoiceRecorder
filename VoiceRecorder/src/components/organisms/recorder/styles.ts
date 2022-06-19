import { StyleSheet } from "react-native";

export default StyleSheet.create({
  recorderContainer: {
    flex: 0.5,
    width: '80%',
    alignItems: 'center',
  },
  titleInputContainer : {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  titleInput: {
    width: 200,
    backgroundColor: '#FFF',
    paddingVertical: 2, 
    paddingHorizontal: 8, 
    borderRadius: 5
  },
  titleLabel: {
    fontSize: 20,
    marginBottom: 3
  },
  errorMessage: {
    color: 'red',
  },
  actionsContainer: {
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-between',
    marginBottom: 50,
  },
});