import BreakingNews from "../components/BreakingNews";
import Header from "../components/Header";
import LeftSideNav from "../components/LeftSideNav";
import RightSideNav from "../components/RightSideNav";
import Navbar from './../components/Navbar';

const Home = () => {
  return (
      <div>
         <Header></Header>
         <BreakingNews></BreakingNews>
         <Navbar></Navbar>
         <div className=" grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="border"><LeftSideNav></LeftSideNav></div>
          <div className="border md:col-span-2">News are coming here</div>
          <div className="border"><RightSideNav></RightSideNav></div>
         </div>
      </div>
  )
};

export default Home;
