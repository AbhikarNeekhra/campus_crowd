import Carousel from "../../Components/Carousel/Carousel";
import Header from "../../Components/Header/header";
import MoreView from "../../Components/MoreView/MoreView";
import SideMenu from "../../Components/SideMenu/sideMenu";

const LandingPage = () => {
  return (
    <>
      <Header />
      <div className="parent h-[91vh] w-full flex justify-center items-center">
        <div className="child-1 h-full w-[25%] p-4">
          <SideMenu />
        </div>
        <div className="child-2 h-full w-[75%] overflow-y-scroll">
          <Carousel />
          <MoreView />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
