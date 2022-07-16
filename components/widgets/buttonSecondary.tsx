import React from "react";
interface Props {
  title: string;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}
export default function SecondButton({ title, onClick }: Props) {
  return (
    <div>
      <button className="btn_secondary" onClick={onClick}>
        <span>{title}</span>
      </button>
    </div>
  );
}
