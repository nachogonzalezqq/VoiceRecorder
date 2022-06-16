export interface RecordsListPageProps {}

export type RootStackParamList = {
	PlayRecord: {record: Record};
  NewRecord: {};
}

export interface ListItemActions {
  onPressPlay: (arg0: Record) => void;
  onPressDelete: (arg0: Record) => void;
}

export interface ListItemProps {
  recordData: Record;
  actions: ListItemActions;
}

export interface Record {
  fileUri: string;
  title: string;
  timestamp: number;
  id: string
}

export interface RecordsListProps {
  records: ListItemProps[];
}

export interface AudioPlayerProps {
  source: string;
  duration: number;
}
