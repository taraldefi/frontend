import React from "react";
interface Props {
  title: string;
  onClick: () => void;
}
export default function Button({ title, onClick }: Props) {
  return (
    <div>
      <button className="btn" onClick={onClick}>
        {title}
      </button>
    </div>
  );
}
