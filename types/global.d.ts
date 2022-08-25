export interface globalState {
  modal: Boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  editModal: Boolean;
  setEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  deleteModal: Boolean;
  setDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  exporter?: String;
  importer?: String;
  date?: String;
}
