import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="bg-gray-300 p-2 rounded-md flex mb-4">
      <button className="btn btn-secondary mr-4">Breaking News</button>
      <Marquee pauseOnHover={true}>
      Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as....
      </Marquee>
    </div>
  );
};

export default BreakingNews;
