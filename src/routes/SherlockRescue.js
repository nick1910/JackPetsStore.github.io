import Navbar from "../components/Navbar";
import HomeTitle from "../components/HomeTitle";
import SherlockInfo from "../components/SherlockInfo";
import Footer from "../components/Footer";
import SherlockImg from "../assets/rescue.jpg";

function SherlockRescue() {
  return (
    <>
      <Navbar />
      <HomeTitle
        cName="title-mid"
        titleImg={SherlockImg}
        title="Sherlock Rescue"
        btnClass="hide"
      />
      <SherlockInfo />
      <Footer />
    </>
  );
}

export default SherlockRescue;
