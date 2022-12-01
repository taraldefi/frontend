import { PortalIcons } from "@components/icons";
import { useRouter } from "next/router";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
export default function SideBar() {
  const router = useRouter();

  return (
    <ProSidebar collapsed={false}>
      <Menu iconShape="square">
        <MenuItem
          onClick={(e) => {
            e.preventDefault();
            router.push("/users/exporter/newApplication/exporterInfo");
          }}
        >
          <PortalIcons
            selected={
              router.asPath == "/users/exporter/newApplication/exporterInfo"
                ? true
                : false
            }
            icon={"Exporter Info"}
          ></PortalIcons>
          <span>Exporter Info</span>
        </MenuItem>
        <div className="itemAndIconContainer">
          <PortalIcons
            selected={
              router.asPath ==
                "/users/exporter/newApplication/financials-p&l/profit&loss" ||
              router.asPath ==
                "/users/newApplication/financials-p&l/balanceSheet" ||
              router.asPath == "/users/newApplication/financials-p&l/cashFlow"
                ? true
                : false
            }
            icon={"Financials - P&L"}
          ></PortalIcons>
          <SubMenu title="Financials" open={true}>
            <MenuItem
              className="spanItem"
              onClick={(e) => {
                e.preventDefault();
                router.push("/users/exporter/newApplication/financials-p&l/profit&loss");
              }}
            >
              <div className="innerItemWrapper">Profit & Loss</div>
            </MenuItem>
            <MenuItem
              onClick={(e) => {
                e.preventDefault();
                router.push(
                  "/users/newApplication/financials-p&l/balanceSheet"
                );
              }}
            >
              <div className="innerItemWrapper">Balance Sheet</div>
            </MenuItem>
            <MenuItem
              onClick={(e) => {
                e.preventDefault();
                router.push("/users/newApplication/financials-p&l/cashFlow");
              }}
            >
              <div className="innerItemWrapper">Cash Flow</div>
            </MenuItem>
          </SubMenu>
        </div>
        <div className="itemAndIconContainer">
          <PortalIcons
            selected={
              router.asPath ==
              "/users/newApplication/transactionDetails/projectDetails"
                ? true
                : false ||
                  router.asPath ==
                    "/users/newApplication/transactionDetails/contactAndDelivery"
                ? true
                : false ||
                  router.asPath ==
                    "/users/newApplication/transactionDetails/additionalInfo"
                ? true
                : false
            }
            icon={"Transaction Details"}
          ></PortalIcons>
          <SubMenu title="Transaction Details" open={true}>
            <MenuItem
              className="spanItem"
              onClick={(e) => {
                e.preventDefault();
                router.push(
                  "/users/newApplication/transactionDetails/projectDetails"
                );
              }}
            >
              <div className="innerItemWrapper">Project Details</div>
            </MenuItem>
            <MenuItem
              className="spanItem"
              onClick={(e) => {
                e.preventDefault();
                router.push(
                  "/users/newApplication/transactionDetails/contactAndDelivery"
                );
              }}
            >
              <div className="innerItemWrapper">Contract and Delivery</div>
            </MenuItem>
            <MenuItem
              className="spanItem"
              onClick={(e) => {
                e.preventDefault();
                router.push(
                  "/users/newApplication/transactionDetails/additionalInfo"
                );
              }}
            >
              <div className="innerItemWrapper">Additional Info</div>
            </MenuItem>
          </SubMenu>
        </div>
        <div className="itemAndIconContainer">
          <PortalIcons
            selected={
              router.asPath == "/users/newApplication/importerInfo/information"
                ? true
                : false ||
                  router.asPath ==
                    "/users/newApplication/importerInfo/attachments"
                ? true
                : false ||
                  router.asPath ==
                    "/users/exporter/newApplication/importerInfo/relationship"
                ? true
                : false ||
                  router.asPath == "/users/newApplication/importerInfo/business"
                ? true
                : false
            }
            icon={"Importer Info"}
          ></PortalIcons>
          <SubMenu title="Importer Info" open={true}>
            <MenuItem
              className="spanItem"
              onClick={(e) => {
                e.preventDefault();
                router.push("/users/newApplication/importerInfo/information");
              }}
            >
              <div className="innerItemWrapper">Information</div>
            </MenuItem>
            <MenuItem
              className="spanItem"
              onClick={(e) => {
                e.preventDefault();
                router.push("/users/newApplication/importerInfo/business");
              }}
            >
              <div className="innerItemWrapper">Business</div>
            </MenuItem>
            <MenuItem
              className="spanItem"
              onClick={(e) => {
                e.preventDefault();
                router.push("/users/exporter/newApplication/importerInfo/relationship");
              }}
            >
              <div className="innerItemWrapper">Relationship</div>
            </MenuItem>
            <MenuItem
              className="spanItem"
              onClick={(e) => {
                e.preventDefault();
                router.push("/users/newApplication/importerInfo/attachments");
              }}
            >
              <div className="innerItemWrapper">Attachments</div>
            </MenuItem>
          </SubMenu>
        </div>
        <div className="itemAndIconContainer">
          <PortalIcons
            selected={
              router.asPath == "/users/newApplication/paymentTerms/details"
                ? true
                : false ||
                  router.asPath ==
                    "/users/newApplication/paymentTerms/paymentType"
                ? true
                : false
            }
            icon={"Payment Terms"}
          ></PortalIcons>
          <SubMenu title="Payment Terms" open={true}>
            <MenuItem
              className="spanItem"
              onClick={(e) => {
                e.preventDefault();
                router.push("/users/newApplication/paymentTerms/details");
              }}
            >
              <div className="innerItemWrapper">Details</div>
            </MenuItem>
            <MenuItem
              className="spanItem"
              onClick={(e) => {
                e.preventDefault();
                router.push("/users/newApplication/paymentTerms/paymentType");
              }}
            >
              <div className="innerItemWrapper">Payment Type</div>
            </MenuItem>
          </SubMenu>
        </div>
        <MenuItem
          onClick={(e) => {
            e.preventDefault();
            router.push("/users/newApplication/security");
          }}
        >
          <PortalIcons
            selected={
              router.asPath == "/users/newApplication/security" ? true : false
            }
            icon={"Security"}
          ></PortalIcons>
          <span>Security</span>
        </MenuItem>
        <MenuItem
          onClick={(e) => {
            e.preventDefault();
            router.push("/users/newApplication/closing");
          }}
        >
          <PortalIcons
            selected={
              router.asPath == "/users/newApplication/closing" ? true : false
            }
            icon={"Closing"}
          ></PortalIcons>
          <span>Closing</span>
        </MenuItem>
      </Menu>
    </ProSidebar>
  );
}
