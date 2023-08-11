import Navbar from "../components/Navbar";
import HomeTitle from "../components/HomeTitle";
import SherlockImg from "../assets/dogs.jpg";
import Footer from "../components/Footer";
import Dogs from "../components/Dogs";

function Adoption() {
  return (
    <>
      <Navbar />
      <HomeTitle
        cName="title-mid"
        titleImg={SherlockImg}
        title="Sherlock Rescue dogs for adoption"
        btnClass="hide"
      />
      <Dogs />
      <Footer />
    </>
  );
}

export default Adoption;
