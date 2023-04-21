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
  index: 0,
  setIndex: () => {},
  lockSuccessModal: false,
  setLockSuccessModal: () => {},
  talModal: false,
  setTalModal: () => {},
  stakeSuccessModal: false,
  setStakeSuccessModal: () => {},
  yieldModal: false,
  setYieldModal: () => {},
});

export default AppContext;
