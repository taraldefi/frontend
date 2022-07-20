export interface overviewTableDataType {
  process: string;
  users: string[];
  progress: number;
  status: string;
  date: string;
}
export interface auditTableDataType {
  action: string;
  user: auditUser;
  activity: string;
  date: string;
}

interface auditUser {
  avatar: string;
  name: string;
  email: string;
}
export interface taskTableDataType {
  assignee: taskUser;
  task: taskList;
  assignor: taskUser;
  date: string;
}
interface taskList {
  title: string;
  description: string;
}

interface taskUser {
  user: string;
  name: string;
}
export interface teamTableDataType {
  member: taskUser;
  department: string;
  lastAction: string;
  dateOfAction: string;
}
