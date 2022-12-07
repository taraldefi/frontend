export interface globalState {
  modal: Boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  editModal: Boolean;
  setEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  deleteModal: Boolean;
  setDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  newApplicationModal: Boolean;
  setNewApplicationModal: React.Dispatch<React.SetStateAction<boolean>>;
  exporter?: String;
  importer?: String;
  date?: String;
  index?: number;
  setIndex?: React.Dispatch<React.SetStateAction<number>>;
}
