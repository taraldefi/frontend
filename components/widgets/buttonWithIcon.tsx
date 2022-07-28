import { PortalIcons } from "@components/icons";
import React from "react";
interface Props {
  title: string;
  icon: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}
export default function ButtonIcon({ title, icon, onClick }: Props) {
  return (
    <div>
      <button type="submit" className="btn_container btn" onClick={onClick}>
        <span>{title}</span>
        <PortalIcons selected={false} icon={icon}></PortalIcons>
      </button>
    </div>
  );
}
