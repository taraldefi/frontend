import React, { useContext } from "react";
import { SidebarDataEx, SidebarDataIm } from "./data";
import { PortalIcons } from "../icons";
import { useRouter } from "next/router";
import { useAtom } from "jotai";
import { pageIndexAtom } from "store/PageIndexStore";
import MenuItem from "./MenuItem";
import { itemExpanded } from "store/sideBarStore";

export default function ApplicationLeftMenu() {
  const router = useRouter();
  const [index, setIndex] = useAtom(pageIndexAtom);

  return (
    <div className="leftMenu">
      {router.asPath.split("/")[3] == "newApplication" ? (
        <div className="items">
          <MenuItem
            onClick={(e) => {
              e.preventDefault();
              router.push(
                `/users/${
                  router.asPath.split("/")[2]
                }/newApplication/exporterInfo`
              );
            }}
            id={0}
            icon={"Exporter Info"}
            title="ExporterInfo"
          ></MenuItem>

          <MenuItem id={1} icon={"Financials - P&L"} title="Financials - P&L">
            <p
              onClick={(e) => {
                router.push(
                  `/users/exporter/newApplication/financials-p&l/profit&loss`
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
            </p>
            <p
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
            </p>
            <p
              onClick={(e) => {
                console.log(router.asPath);
                router.push(
                  "/users/exporter/newApplication/financials-p&l/cashFlow"
                );
              }}
              className={
                router.asPath ==
                "/users/exporter/newApplication/financials-p&l/cashFlow"
                  ? "selectedSub"
                  : ""
              }
            >
              Cash Flow
            </p>
          </MenuItem>

          <MenuItem
            id={2}
            icon={"Transaction Details"}
            title="Transaction Details"
          >
            <p
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
            </p>
            <p
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
            </p>
            <p
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
            </p>
          </MenuItem>

          <MenuItem id={3} icon={"Importer Info"} title="Importer Info">
            <p
              onClick={(e) => {
                e.preventDefault();
                router.push(
                  "/users/exporter/newApplication/importerInfo/information"
                );
              }}
              className={
                router.asPath ==
                "/users/exporter/newApplication/importerInfo/information"
                  ? "selectedSub"
                  : ""
              }
            >
              Information
            </p>
            <p
              onClick={(e) => {
                e.preventDefault();
                router.push(
                  "/users/exporter/newApplication/importerInfo/business"
                );
              }}
              className={
                router.asPath ==
                "/users/exporter/newApplication/importerInfo/business"
                  ? "selectedSub"
                  : ""
              }
            >
              Business
            </p>
            <p
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
            </p>
            <p
              onClick={(e) => {
                e.preventDefault();
                router.push(
                  "/users/exporter/newApplication/importerInfo/attachments"
                );
              }}
              className={
                router.asPath ==
                "/users/exporter/newApplication/importerInfo/attachments"
                  ? "selectedSub"
                  : ""
              }
            >
              Attachments
            </p>
          </MenuItem>

          <MenuItem id={4} icon={"Payment Terms"} title="Payment Terms">
            <p
              onClick={(e) => {
                e.preventDefault();
                router.push(
                  "/users/exporter/newApplication/paymentTerms/details"
                );
              }}
              className={
                router.asPath ==
                "/users/exporter/newApplication/paymentTerms/details"
                  ? "selectedSub"
                  : ""
              }
            >
              Details
            </p>
            <p
              onClick={(e) => {
                e.preventDefault();
                router.push(
                  "/users/exporter/newApplication/paymentTerms/paymentType"
                );
              }}
              className={
                router.asPath ==
                "/users/exporter/newApplication/paymentTerms/paymentType"
                  ? "selectedSub"
                  : ""
              }
            >
              Payment Type
            </p>
          </MenuItem>
          <MenuItem
            onClick={(e) => {
              e.preventDefault();
              router.push(
                `/users/${router.asPath.split("/")[2]}/newApplication/security`
              );
            }}
            id={5}
            icon={"Security"}
            title="Security"
          ></MenuItem>
          <MenuItem
            onClick={(e) => {
              e.preventDefault();
              router.push(
                `/users/${router.asPath.split("/")[2]}/newApplication/closing`
              );
            }}
            id={6}
            icon={"closing"}
            title="Closing"
          ></MenuItem>
        </div>
      ) : router.asPath.split("/")[2] == "exporter" &&
        router.asPath.split("/")[3] == "quick" ? (
        <div className="itemsNew">
          {SidebarDataEx.map((item, index) => {
            return (
              <>
                <div
                  key={index}
                  onClick={(e) => {
                    e.preventDefault();
                    setIndex(item.id);
                    router.push(item.path);
                  }}
                  className="item"
                >
                  <PortalIcons
                    icon={item.title}
                    selected={router.asPath == item.path ? true : false}
                  />
                  <span
                    className={router.asPath == item.path ? "selected" : ""}
                  >
                    {item.title}
                  </span>
                </div>
              </>
            );
          })}
        </div>
      ) : router.asPath.split("/")[2] == "importer" &&
        router.asPath.split("/")[3] == "quick" ? (
        <div className="itemsNew">
          {SidebarDataIm.map((item, index) => {
            return (
              <>
                <div
                  key={index}
                  onClick={(e) => {
                    e.preventDefault();
                    setIndex(item.id);
                    router.push(item.path);
                  }}
                  className="item"
                >
                  <PortalIcons
                    icon={item.title}
                    selected={router.asPath == item.path ? true : false}
                  />
                  <span
                    className={router.asPath == item.path ? "selected" : ""}
                  >
                    {item.name}
                  </span>
                </div>
              </>
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
