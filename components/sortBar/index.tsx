import React, { useEffect } from "react";
import { SortBarItem } from "types/";
import { useRouter } from "next/router";

interface Prop {
  data: Array<SortBarItem>;
  width: string;
}

export default function SortBarNav({ data, width }: Prop) {
  const router = useRouter();
  const [selectedId, setSelectedId] = React.useState(1);

  function handleSelect(index: number) {
    setSelectedId(index);
  }

  useEffect(() => {
    function setWidth(width: string) {
      document.documentElement.style.setProperty("--sortbar-width", width);
    }
    setWidth(width);
  }, []);

  return (
    <div className="sortBox">
      {data.map((item: SortBarItem, index: number) => {
        return (
          <div
            className="sortitem"
            onClick={(e) => {
              e.preventDefault();
              router.push(item.path);
            }}
            key={index}
          >
            <span
              className={
                router.asPath === item.path
                  ? "SortBarItem selected"
                  : "SortBarItem"
              }
            >
              {item.title}
            </span>
          </div>
        );
      })}
    </div>
  );
}
