import Navbar from "../components/Navbar";
import HomeTitle from "../components/HomeTitle";
import Products from "../components/Products";
import Footer from "../components/Footer";
import SubscribeInfo from "../components/SubscribeInfo";


function Home() {
    return (
      <>
        <Navbar />
        <HomeTitle
          cName="title"
          titleImg="https://i.pinimg.com/originals/f0/69/5a/f0695ae05c3b4d8503247120cd5ce5f1.jpg"
          title="Welcome to Jack Pets Store"
          text="The best store for all your pet needs!"
          btnClass="show"
          buttonText="Find out more"
          url=""
        />
        <Products />
        <SubscribeInfo />
        <Footer />
      </>
    );
  }
  
  export default Home;
