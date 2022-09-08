import { useRouter } from "next/router";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

export default function SideBar() {
  const router = useRouter();
  return (
    <ProSidebar>
      <Menu iconShape="square">
        <MenuItem
          onClick={(e) => {
            e.preventDefault();
            router.push("/users/newApplication/exporterInfo");
          }}
        >
          Exporter Info
        </MenuItem>
        <SubMenu title="Financials">
          <MenuItem
            onClick={(e) => {
              e.preventDefault();
              router.push("/users/newApplication/security");
            }}
          >
            Profit and loss
          </MenuItem>
          <MenuItem>Component 2</MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar>
  );
}
