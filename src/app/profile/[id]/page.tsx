import Feed from "@/components/Feed";
import LeftMenue from "@/components/LeftMenue";
import RightMenue from "@/components/RightMenue";
import React from "react";

const ProfilePage = () => {
  return (
    <div className="flex gap-6 pt-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenue />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenue userId="test" />
      </div>
    </div>
  );
};

export default ProfilePage;
