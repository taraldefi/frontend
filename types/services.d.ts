interface LoginResponse {
  token: string;
}
interface RegisterResponse {
  username: string;
  email: string;
  name: string;
  address: string;
  isTwoFAEnabled: boolean;
  contact: string;
  avatar: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}
interface TwoFAResponse {
  success: boolean;
  qrCodeUri: string;
}
interface EntityProduct {
  id: string;
  title: string;
  issuanceDate: string;
  maturityDate: string;
  amount: number;
}
interface EntityApplication {
  id: string;
  title: string;
  issuanceDate: string;
}
interface Entity {
  name: string;
  logo: string;
  beneficialOwner: string;
  abbreviation: string;
  nationality: string;
  headquarters: string;
  industryType: string;
  coreBusiness: string;
  incorporationDate: string;
  legalForm: string;
}
interface EntityResponse {
  id: string;
  logo: string;
  name: string;
  beneficialOwner: string;
  abbreviation: string;
  nationality: string;
  headquaters: string;
  industryType: string;
  coreBusiness: string;
  incorporationDate: string;
  legalForm: string;
  products: EntityProduct[];
  applications: EntityApplication[];
}
export {
  LoginResponse,
  RegisterResponse,
  TwoFAResponse,
  EntityResponse,
  Entity,
};
