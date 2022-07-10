import "./home.scss";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "./../../components/navbar/Navbar";
import Widget from "../../components/widgets/Widget";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="User" />
          <Widget type="Order" />
          <Widget type="Earnings" />
          <Widget type="Balance" />
        </div>
      </div>
    </div>
  );
};

export default Home;
