import AsyncStorage from "@react-native-async-storage/async-storage";
import { Record } from "../types/types";
import { recordsListStorageKey } from "../utils/constants";

const getRecordsList = async () => {
  const stringResult = await AsyncStorage.getItem(recordsListStorageKey);
  if (stringResult)
  return JSON.parse(stringResult);
  return null;
} 

const addRecord = async (newRecord: Record) => {
  const recordsList = await getRecordsList();
  let recordsToSave: Record[] = [];
  if (recordsList) {
    console.log('parsed json')
    console.log(recordsList);
    recordsToSave = recordsList;
  } 
  recordsToSave.push(newRecord);
  console.log('records to save');
  console.log(recordsToSave);
  await AsyncStorage.setItem(recordsListStorageKey, JSON.stringify(recordsToSave));
};

const deleteRecord = async (recordToDelete: Record) => {
  const recordsList = await getRecordsList();
  recordsList.splice(recordsList.indexOf(recordToDelete), 1);
  await AsyncStorage.setItem(recordsListStorageKey, JSON.stringify(recordsList));
};

export default {
  getRecordsList,
  addRecord,
  deleteRecord,
}