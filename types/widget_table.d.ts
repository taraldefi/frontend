export interface overviewTableDataType {
  process: string;
  users: string[];
  progress: number;
  status: any;
  date: string;
}
export interface auditTableDataType {
  action: string;
  user: auditUser;
  activity: any;
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
// export interface personsDataType {
//   Persons: personUser;
//   Email: string;
//   Position: string;
//   VerificationStatus: boolean;
//   StatusVerificatoin: boolean;
// }
interface personUser {
  user: string;
  name: string;
}
export interface researchTableDataType {
  name: string;
  Hit: string;
  Source: string;
}
export interface sentimentsTableDataType {
  person: string;
  hit: string;
  source: string;
}
export interface quantitativeTableDataType {
  factor: string;
  value: string;
  status: boolean;
  metric: number;
}

export interface info {
  [key: string];
  downpayment: number;
  principalrepayment: number;
  interestpayment: number;
}
export interface tableVal {
  [key: string]: info;
}
interface financialInfoProfitLoss {
  [key: string];
  revenue: number;
  cogs: number;
  grossProfit: number;
  distributionCosts: number;
  AdministrativeCosts: number;
  otherIncome: number;
  OperatingProfit: number;
  financeCosts: number;
  profitBeforeIncomeTax: number;
  incomeTaxExpense: number;
  profitForThePeriod: number;
  file: string; //file hash for the pdf file
}
export interface profitLossTableType {
  [key: string]: financialInfoProfitLoss;
}
interface financialInfoBalanceSheet {
  [key: string];
  currentAssets: number;
  cash: number;
  nonCurrentAssets: number;
  propertyPlantEquipment: number;
  currentLiabilities: number;
  accountsPayables: number;
  nonCurrentLiabilities: number;
  bankLoans: number;
  totalLiabilities: number;
  equity: number;
  paidInCapital: number;
  totalLiabilitiesEquity: number;
  file: string; //file hash for the pdf file
}
export interface balanceSheetTableType {
  [key: string]: financialInfoBalanceSheet;
}
interface financialInfoCashFLow {
  [key: string];
  cashFlowFromOperatingIncome: number;
  activityTitle: number;
  cashFlowFromFinancialIncome: number;
  activityTitle: number;
  cashFlowFromInvestingIncome: number;
  activityTitle: number;
  file: string; //file hash for the pdf file
}
export interface cashFlowTableType {
  [key: string]: financialInfoCashFLow;
}

export interface signOffTableType {
  user: auditUser;
  position: string;
  status1: boolean;
  status2: boolean;
}
export interface entityTableType {
  productTitle: string;
  issuanceDate: string;
  maturityDate: string;
  facilityAmount: number;
}
export interface applicationTableType {
  applicationId: number;
  product: string;
  dateFrom: string;
  dateTo: string;
  importerId: string;
  importerName: string;
  status: string;
}
