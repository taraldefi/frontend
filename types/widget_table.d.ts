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
