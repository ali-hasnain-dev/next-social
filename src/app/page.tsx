import AddPost from "@/components/AddPost";
import Feed from "@/components/Feed";
import LeftMenue from "@/components/LeftMenue";
import RightMenue from "@/components/RightMenue";
import Stories from "@/components/Stories";

const Homepage = () => {
  return (
    <div className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenue type="home" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <Stories />
          <AddPost />
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenue />
      </div>
    </div>
  );
};

export default Homepage;
