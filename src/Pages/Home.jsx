import { useContext } from "react";
import BreakingNews from "../components/BreakingNews";
import Header from "../components/Header";
import LeftSideNav from "../components/LeftSideNav";
import RightSideNav from "../components/RightSideNav";
import Navbar from './../components/Navbar';
import { AuthContext } from "../Provider/AuthProvider";

const Home = () => {

  const {user} = useContext(AuthContext);
  console.log(user)

  return (
      <div>
         <Header></Header>
         <BreakingNews></BreakingNews>
         <Navbar></Navbar>
         <div className=" grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className=""><LeftSideNav></LeftSideNav></div>
          <div className="border md:col-span-2">News are are coming here</div>
          <div className=""><RightSideNav></RightSideNav></div>
         </div>
      </div>
  )
};

export default Home;
