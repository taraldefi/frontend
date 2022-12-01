import React from "react";
import { SidebarData } from "./data";
import { PortalIcons } from "../icons";
import { useRouter } from "next/router";

export default function ApplicationLeftMenu() {
  const router = useRouter();

  return (
    <div className="leftMenu">
      <div className="items">
        <div
          onClick={(e) => {
            e.preventDefault();
            router.push("/users/exporter/newApplication/exporterInfo");
          }}
          className="item"
        >
          <PortalIcons
            icon={"Exporter Info"}
            selected={
              router.asPath == "/users/exporter/newApplication/exporterInfo"
                ? true
                : false
            }
          />
          <span
            className={
              router.asPath == "/users/exporter/newApplication/exporterInfo"
                ? "selected"
                : ""
            }
          >
            Exporter Info
          </span>
        </div>
        <div
          onClick={(e) => {
            e.preventDefault();
            // router.push("/users/exporter/newApplication/financials-p&l/profit&loss");
          }}
          className="item"
        >
          <PortalIcons
            icon={"Financials - P&L"}
            selected={
              router.asPath ==
                "/users/exporter/newApplication/financials-p&l/profit&loss" ||
              router.asPath ==
                "/users/exporter/newApplication/financials-p&l/balanceSheet" ||
              router.asPath == "/users/newApplication/financials-p&l/cashFlow"
                ? true
                : false
            }
          />
          <div>
            <span
              className={
                router.asPath ==
                  "/users/exporter/newApplication/financials-p&l/profit&loss" ||
                router.asPath ==
                  "/users/exporter/newApplication/financials-p&l/balanceSheet" ||
                router.asPath == "/users/exporter/newApplication/financials-p&l/cashFlow"
                  ? "selected"
                  : ""
              }
            >
              Financials - P&L
            </span>
            <div className="subItem">
              <span
                onClick={(e) => {
                  router.push(
                    "/users/exporter/newApplication/financials-p&l/profit&loss"
                  );
                }}
                className={
                  router.asPath ==
                  "/users/exporter/newApplication/financials-p&l/profit&loss"
                    ? "selectedSub"
                    : ""
                }
              >
                Profit & Loss
              </span>
              <span
                onClick={(e) => {
                  router.push(
                    "/users/exporter/newApplication/financials-p&l/balanceSheet"
                  );
                }}
                className={
                  router.asPath ==
                  "/users/exporter/newApplication/financials-p&l/balanceSheet"
                    ? "selectedSub"
                    : ""
                }
              >
                Balance Sheet
              </span>
              <span
                onClick={(e) => {
                  console.log(router.asPath);
                  router.push("/users/exporter/newApplication/financials-p&l/cashFlow");
                }}
                className={
                  router.asPath ==
                  "/users/exporter/newApplication/financials-p&l/cashFlow"
                    ? "selectedSub"
                    : ""
                }
              >
                Cash Flow
              </span>
            </div>
          </div>
        </div>
        <div
          onClick={(e) => {
            e.preventDefault();
            // router.push(
            //   "/users/newApplication/transactionDetails/projectDetails"
            // );
          }}
          className="item"
        >
          <PortalIcons
            icon={"Transaction Details"}
            selected={
              router.asPath ==
              "/users/exporter/newApplication/transactionDetails/projectDetails"
                ? true
                : false ||
                  router.asPath ==
                    "/users/exporter/newApplication/transactionDetails/contactAndDelivery"
                ? true
                : false ||
                  router.asPath ==
                    "/users/exporter/newApplication/transactionDetails/additionalInfo"
                ? true
                : false
            }
          />
          <div>
            <span
              className={
                router.asPath ==
                "/users/exporter/newApplication/transactionDetails/projectDetails"
                  ? "selected"
                  : "" ||
                    router.asPath ==
                      "/users/exporter/newApplication/transactionDetails/contactAndDelivery"
                  ? "selected"
                  : "" ||
                    router.asPath ==
                      "/users/exporter/newApplication/transactionDetails/additionalInfo"
                  ? "selected"
                  : ""
              }
            >
              Transaction Details
            </span>
            <div className="subItem">
              <span
                onClick={(e) => {
                  e.preventDefault();
                  router.push(
                    "/users/exporter/newApplication/transactionDetails/projectDetails"
                  );
                }}
                className={
                  router.asPath ==
                  "/users/exporter/newApplication/transactionDetails/projectDetails"
                    ? "selectedSub"
                    : ""
                }
              >
                Project Details
              </span>
              <span
                onClick={(e) => {
                  e.preventDefault();
                  router.push(
                    "/users/exporter/newApplication/transactionDetails/contactAndDelivery"
                  );
                }}
                className={
                  router.asPath ==
                  "/users/exporter/newApplication/transactionDetails/contactAndDelivery"
                    ? "selectedSub"
                    : ""
                }
              >
                Contract and Delivery
              </span>
              <span
                onClick={(e) => {
                  e.preventDefault();
                  router.push(
                    "/users/exporter/newApplication/transactionDetails/additionalInfo"
                  );
                }}
                className={
                  router.asPath ==
                  "/users/exporter/newApplication/transactionDetails/additionalInfo"
                    ? "selectedSub"
                    : ""
                }
              >
                Additional Info
              </span>
            </div>
          </div>
        </div>
        <div
          onClick={(e) => {
            e.preventDefault();
            // router.push("/users/newApplication/importerInfo/information");
          }}
          className="item"
        >
          <PortalIcons
            icon={"Importer Info"}
            selected={
              router.asPath == "/users/exporter/newApplication/importerInfo/information"
                ? true
                : false ||
                  router.asPath ==
                    "/users/exporter/newApplication/importerInfo/attachments"
                ? true
                : false ||
                  router.asPath ==
                    "/users/exporter/newApplication/importerInfo/relationship"
                ? true
                : false ||
                  router.asPath == "/users/exporter/newApplication/importerInfo/business"
                ? true
                : false
            }
          />
          <div>
            <span
              className={
                router.asPath ==
                  "/users/exporter/newApplication/importerInfo/information" ||
                router.asPath ==
                  "/users/exporter/newApplication/importerInfo/attachments" ||
                router.asPath ==
                  "/users/exporter/newApplication/importerInfo/relationship" ||
                router.asPath == "/users/exporter/newApplication/importerInfo/business"
                  ? "selected"
                  : ""
              }
            >
              Importer Info
            </span>
            <div className="subItem">
              <span
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/users/exporter/newApplication/importerInfo/information");
                }}
                className={
                  router.asPath ==
                  "/users/exporter/newApplication/importerInfo/information"
                    ? "selectedSub"
                    : ""
                }
              >
                Information
              </span>
              <span
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/users/exporter/newApplication/importerInfo/business");
                }}
                className={
                  router.asPath == "/users/exporter/newApplication/importerInfo/business"
                    ? "selectedSub"
                    : ""
                }
              >
                Business
              </span>
              <span
                onClick={(e) => {
                  e.preventDefault();
                  router.push(
                    "/users/exporter/newApplication/importerInfo/relationship"
                  );
                }}
                className={
                  router.asPath ==
                  "/users/exporter/newApplication/importerInfo/relationship"
                    ? "selectedSub"
                    : ""
                }
              >
                Relationship
              </span>
              <span
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/users/exporter/newApplication/importerInfo/attachments");
                }}
                className={
                  router.asPath ==
                  "/users/exporter/newApplication/importerInfo/attachments"
                    ? "selectedSub"
                    : ""
                }
              >
                Attachments
              </span>
            </div>
          </div>
        </div>
        <div
          onClick={(e) => {
            e.preventDefault();
            router.push("/users/exporter/newApplication/paymentTerms/details");
          }}
          className="item"
        >
          <PortalIcons
            icon={"Importer Info"}
            selected={
              router.asPath == "/users/exporter/newApplication/paymentTerms/details"
                ? true
                : false ||
                  router.asPath ==
                    "/users/exporter/newApplication/paymentTerms/paymentType"
                ? true
                : false
            }
          />
          <div>
            <span
              className={
                router.asPath == "/users/exporter/newApplication/paymentTerms/details"
                  ? "selected"
                  : "" ||
                    router.asPath ==
                      "/users/exporter/newApplication/paymentTerms/paymentType"
                  ? "selected"
                  : ""
              }
            >
              Payment Terms
            </span>
            <div className="subItem">
              <span
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/users/exporter/newApplication/paymentTerms/details");
                }}
                className={
                  router.asPath == "/users/exporter/exporter/newApplication/paymentTerms/details"
                    ? "selectedSub"
                    : ""
                }
              >
                Details
              </span>
              <span
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/users/exporter/newApplication/paymentTerms/paymentType");
                }}
                className={
                  router.asPath ==
                  "/users/exporter/newApplication/paymentTerms/paymentType"
                    ? "selectedSub"
                    : ""
                }
              >
                Payment Type
              </span>
            </div>
          </div>
        </div>
        <div
          onClick={(e) => {
            e.preventDefault();
            router.push("/users/exporter/newApplication/security");
          }}
          className="item"
        >
          <PortalIcons
            icon={"Security"}
            selected={
              router.asPath == "/users/exporter/newApplication/security" ? true : false
            }
          />
          <span
            className={
              router.asPath == "/users/exporter/newApplication/security"
                ? "selected"
                : ""
            }
          >
            Security
          </span>
        </div>
        <div
          onClick={(e) => {
            e.preventDefault();
            router.push("/users/exporter/newApplication/closing");
          }}
          className="item"
        >
          <PortalIcons
            icon={"Closing"}
            selected={
              router.asPath == "/users/exporter/newApplication/closing" ? true : false
            }
          />
          <span
            className={
              router.asPath == "/users/exporter/newApplication/closing" ? "selected" : ""
            }
          >
            Closing
          </span>
        </div>
      </div>
    </div>
  );
}
