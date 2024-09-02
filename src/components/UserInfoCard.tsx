import Image from "next/image";
import Link from "next/link";
import React from "react";

const UserInfoCard = ({ userId }: { userId: string }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Info</span>
        <Link href="/" className="text-xs text-blue-500">
          See all
        </Link>
      </div>

      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-lg text-black">Name</span>
          <span className="text-sm">@Name</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa aliquid
          repellat
        </p>
        <div className="flex items-center gap-2">
          <Image src="/map.png" alt="" width={16} height={16} />
          <span>
            Live in <b>here</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/school.png" alt="" width={16} height={16} />
          <span>
            Went to school <b>here</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/work.png" alt="" width={16} height={16} />
          <span>
            Work at <b>Software house</b>
          </span>
        </div>

        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-1">
            <Image src="/link.png" alt="" width={16} height={16} />
            <Link href="/" className="text-blue-500 font-medium">
              Link
            </Link>
          </div>
          <div className="flex items-center gap-1">
            <Image src="/date.png" alt="" width={16} height={16} />
            <span>Joined, September 16 2023</span>
          </div>
        </div>
        <button className="bg-blue-500 text-white text-sm rounded-md py-2">
          Follow
        </button>
        <span className="text-red-500 self-end text-xs cursor-pointer">
          Block user
        </span>
      </div>
    </div>
  );
};

export default UserInfoCard;
