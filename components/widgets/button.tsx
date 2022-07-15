import React from "react";
interface Props {
  title: string;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}
export default function Button({ title, onClick }: Props) {
  <button onClick={onClick}>{title}</button>;
}
