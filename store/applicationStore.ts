// {
// 	"exporterInfo": {
// 		"companyName": "",
// 		"phoneNo": "",
// 		"address": "",
// 		"postalCode": "",
// 		"totalRevenue": "",
// 		"revenuePercentage": ""
// 	},
// 	"importerInfo": {
// 		"companyName": "",
// 		"phoneNo": "",
// 		"address": "",
// 		"postalCode": "",
// 		"totalRevenue": "",
// 		"previousPaymentHistory": {
// 			"description": "",
// 			"lengthOfPaymentExperience": "",
// 			"noOfDeals": 0,
// 			"avgVol": "",
// 			"paymentHistory": ""
// 		}
// 	},
// 	"contract": "yes",
// 	"paymentTerms": {
// 		"isConcluded": "no",
// 		"isPartial": "no",
// 		"interest": {
// 			"currency": "",
// 			"rate": "",
// 			"fixedRate": "",
// 			"degressiveRate": ""

// 		},
// 		"paymentType": "",
// 		"paymentDuration": ""
// 	},
// 	"security": {
// 		"facilityType": "",
// 		"financingRatio": "",
// 		"facilityAmount": "",
// 		"tenure": "",
// 		"purpose": "",
// 		"sourceOfRepayment": "",
// 		"collateral": "",
// 		"collateralPaymentExp": ""
// 	},
// 	"docs": []
// }

import { atom } from "jotai";

export const exporterQuickApplicationAtom = atom({
  exporterInfo: {
    companyName: "",
    phoneNo: "",
    address: "",
    postalCode: "",
    totalRevenue: "",
    revenuePercentage: "",
  },
  importerInfo: {
    companyName: "",
    phoneNo: "",
    address: "",
    postalCode: "",
    totalRevenue: "",
    previousPaymentHistory: {
      description: "",
      lengthOfPaymentExperience: "",
      noOfDeals: "",
      avgVol: "",
      paymentHistory: "",
    },
  },
  contract: false,
  paymentTerms: {
    isConcluded: "",
    isPartial: "",
    interest: {
      currency: "",
      rate: "",
      fixedRate: "",
      degressiveRate: "",
    },
    paymentType: "",
    paymentDuration: "",
  },
  security: {
    facilityType: "",
    financingRatio: "",
    facilityAmount: "",
    tenure: "",
    purpose: "",
    sourceOfRepayment: "",
    collateral: "",
    collateralPaymentExp: "",
  },
  docs: [],
});
