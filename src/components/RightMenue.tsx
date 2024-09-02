import React from "react";
import FriendRequests from "./FriendRequests";
import Birthday from "./Birthday";
import Ad from "./Ad";
import UserInfoCard from "./UserInfoCard";
import UserMediaCard from "./UserMediaCard";

const RightMenue = ({ userId }: { userId?: string }) => {
  return (
    <div className="flex flex-col gap-6">
      {userId && (
        <>
          <UserInfoCard userId={userId} />
          <UserMediaCard userId={userId} />
        </>
      )}
      <FriendRequests />
      <Birthday />
      <Ad size="md" />
    </div>
  );
};

export default RightMenue;
