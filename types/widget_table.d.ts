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
export interface companyTableDataType {
  persons: string;
  details: string;
  source: string;
  status: boolean;
}
export interface screeningTableDataType {
  persons: string;
  Hit: string;
  Source: string;
}
export interface personsDataType {
  Persons: personUser;
  Email: string;
  Position: string;
  VerificationStatus: boolean;
  StatusVerificatoin: boolean;
}
interface personUser {
  user: string;
  name: string;
}
export interface researchTableDataType {
  persons: personUser;
  Hit: string;
  Source: string;
}
export interface sentimentsTableDataType {
  person: string;
  hit: string;
  source: string;
}

