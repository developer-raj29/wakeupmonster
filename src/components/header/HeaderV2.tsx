import logo1 from "@/assets/images/WMLogo2.png";
import navigationLinks from "@/assets/jsonData/navigation/navigationData1.json";
import Navigation from "./Navigation";

const HeaderV2 = () => {
  return (
    <>
      <header className="header-menu-wrap">
        <div className="custom-container">
          <div className="custom-row">
            {/* Navigation menu */}
            <Navigation navigationLinks={navigationLinks} logo1={logo1} />
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderV2;
