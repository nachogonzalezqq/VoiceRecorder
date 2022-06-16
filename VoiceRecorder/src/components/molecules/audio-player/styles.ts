import { StyleSheet } from "react-native";

export default StyleSheet.create({
  playerContainer: {
    alignItems: 'center',
  },
  progressBarContainer: {
    flexDirection: 'row',
    width: '100%'
  },
  durationText: {
    position: 'absolute',
    fontSize: 12,
    top: -18
  },
  progressBar: {
    height: 9,
    borderRadius: 9
  },
  duration: {
    width: '100%',
    backgroundColor: '#D2BEBF'
  },
  progress: {
    position: 'absolute',
    width: '50%',
    backgroundColor: '#213341',
  },
  actionsContainer: {
    display: 'flex',
    marginTop: 15,
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'space-between',
  },
});
