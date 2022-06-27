import React, { useEffect } from "react";
import { SortBarItem } from "types/";
import { useRouter } from "next/router";

interface Prop {
  data: Array<SortBarItem>;
  width: string;
}

export default function SortBarNav({ data, width }: Prop) {
  const router = useRouter();

  useEffect(() => {
    document.documentElement.style.setProperty("--sortbar-width", width);
    console.log(
      document.documentElement.style.getPropertyValue("--sortbar-width")
    );
    console.log("width---->", width);
  }, [width]);

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
                item.path == router.asPath
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
