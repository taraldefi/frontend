import Image from "next/image";
import { useRouter } from "next/router";
import { PortalIcons } from "../icons";
const Topbar = () => {
  const router = useRouter();
  return (
    <>
      <div className="tab">
        <div className="topbar">
          <div className="logoContainer">
            <Image
              className="images"
              src="/assets/images/logo.png"
              alt=""
              width="40%"
              height="40%"
            ></Image>
            <span className="header">Tariala</span>
          </div>
          <div className="icons">
            <div
              onClick={() => {
                router.push("/profile");
              }}
            >
              <PortalIcons
                icon={"user"}
                selected={router.asPath === "/profile"}
              ></PortalIcons>
            </div>
            <div onClick={() => {}}>
              <PortalIcons icon={"bell"} selected={false}></PortalIcons>
            </div>
            <div onClick={() => {}}>
              <PortalIcons icon={"settings"} selected={false}></PortalIcons>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
