import React from "react";
import { globalState } from "types/global";
const AppContext = React.createContext<globalState>({
  modal: false,
  setModal: () => {},
  editModal: false,
  setEditModal: () => {},
  deleteModal: false,
  setDeleteModal: () => {},
  newApplicationModal: false,
  setNewApplicationModal: () => {},
});

export default AppContext;
