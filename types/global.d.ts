export interface globalState {
  [x: string]: any;
  modal: Boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  editModal: Boolean;
  setEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  deleteModal: Boolean;
  setDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  newApplicationModal: Boolean;
  setNewApplicationModal: React.Dispatch<React.SetStateAction<boolean>>;
  talModal: Boolean;
  setTalModal: React.Dispatch<React.SetStateAction<boolean>>;
  lockSuccessModal: Boolean;
  setLockSuccessModal: React.Dispatch<React.SetStateAction<boolean>>;
  exporter?: String;
  importer?: String;
  date?: String;
}
