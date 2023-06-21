import Topbar from "@components/topBar";
import {
  Button,
  ProfileAddressCard,
  ProfilePersonalCard,
} from "@taraldefi/tariala-component-library";
import Image from "next/image";

function Profile() {
  return (
    <div className="profilePage">
      <div className="topbarFix">
        <Topbar />
      </div>
      <div className="content">
        <div className="profileCard">
          <div className="userContainer">
            <Image
              className="images"
              src="/assets/images/avatar.png"
              alt=""
              width="100px"
              height="100px"
            ></Image>
            <div className="flexBox">
              <span>Profile Name</span>
              <span>Timezone +6</span>
            </div>
            <div className="lastItem">
              <Button onClick={() => {}} label={"Edit Info"}></Button>
            </div>
          </div>
        </div>
        <div className="profilePageCardContainer">
          <ProfilePersonalCard
            firstName={"John"}
            lastName={"Doe"}
            email={"john@gmail.com"}
            phone={"+1 555 678 9012"}
          />
          <ProfileAddressCard
            country={"United Kingdom"}
            city={"Leeds,ast London"}
            postCode={"ERT 2354"}
            taxId={"As45645756"}
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
