export interface globalState {
  modal: Boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  exporter?: String;
  importer?: String;
  date?: String;
}
