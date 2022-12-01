import React from "react";
import { useRouter } from "next/router";
import { TopbarData, TopbarNewData } from "./data";
import Button from "@components/widgets/button";
import AppContext from "@components/appContext";
import { useContext } from "react";
import { globalState } from "../../types/global";
import SecondButton from "@components/widgets/buttonSecondary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
function TopBarNav() {
  
  const handleClick1 = (e: any) => {
    router.push("/users/exporter");
  };
  const router = useRouter();
  const myContext = useContext<globalState>(AppContext);

  const matchPath1 = (item: any) => {
    const currentRoute = router.asPath.split("/")[3];
    console.log(currentRoute);

    if (currentRoute === item.name.toLowerCase()) {
      return true;
    } else if (item.name.toLowerCase() == "view" && router.asPath == "/") {
      return true;
    } else {
      return false;
    }
  };
  const matchPath = (item: any) => {
    const currentRoute = router.asPath.split("/")[1];
    console.log(currentRoute);

    if (currentRoute === item.name.toLowerCase()) {
      return true;
    } else if (
      item.name.toLowerCase() == "applications" &&
      router.asPath == "/"
    ) {
      return true;
    } else {
      return false;
    }
  };
  console.log(router.asPath);
  const matchPathNewApp = () => {
    const currentPath = router.asPath.split("/")[3];
    if (currentPath === "newApplication") {
      return true;
    }
  };
  return (
    <div className="topbarLower">
      {matchPathNewApp() ? (
        <>
          <div className="newAppBackContainer">
            <div onClick={handleClick1}>
              <FontAwesomeIcon
                icon={faArrowLeft}
                fontSize="24px"
                color="#003C6E"
              />
            </div>
            <span>New Application</span>
          </div>
        </>
      ) : (
        <></>
      )}
      {router.asPath.split("/")[1] == "users"&&
      router.asPath.split("/")[3] != "newApplication"  ? (
        <div className="userTabItems">
          <div className="contents">
            {TopbarNewData.map((item, index) => {
              return (
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    router.push(item.path);
                  }}
                  key={index}
                >
                  <span
                    className={
                      matchPath1(item) ? "content selected" : "content"
                    }
                  >
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <></>
      )}
      {router.asPath.split("/")[2] == "exporter"&&
      router.asPath.split("/")[3] != "newApplication" ? (
        <>
          <div className="userTabItems"></div>
          <div className="entityContent">
            {router.asPath == "/users/exporter" ? (
              <div className="entitySearch">
                <input
                  type="text"
                  placeholder="Search by name or number..."
                  className="inputs"
                ></input>
              </div>
            ) : (
              <div className="viewEntitySelect">
                <select name="" id="" className="inputs">
                  <option value="">Entity Name</option>
                </select>
              </div>
            )}
            <SecondButton
              title={"New Entity"}
              onClick={() => {
                console.log("debug 1:", open);
                myContext.setModal(!myContext.modal);
              }}
            ></SecondButton>
            <Button
              title={"New Application"}
              onClick={() => myContext.setNewApplicationModal(!myContext.newApplicationModal)}
            ></Button>
          </div>
        </>
      ) : (
        router.asPath.split("/")[3] == "applications" && (
          <div className="contents">
            {TopbarData.map((item, index) => {
              return (
                <div
                  onClick={(e) => {
                    e.preventDefault();
                    router.push(item.path);
                  }}
                  key={index}
                >
                  <span
                    className={matchPath(item) ? "content selected" : "content"}
                  >
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        )
      )}
    </div>
  );
}

export default TopBarNav;
