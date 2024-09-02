import Image from "next/image";
import Link from "next/link";
import React from "react";

const FriendRequests = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Friend Requets</span>
        <Link href="/" className="text-xs text-blue-500">
          See all
        </Link>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <Image
            src="https://images.pexels.com/photos/26741437/pexels-photo-26741437/free-photo-of-a-woman-in-a-white-dress-standing-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            width={40}
            height={40}
            alt=""
            className="rounded-full w-10 h-10 object-cover"
          />
          <span>ABC</span>
        </div>
        <div className="flex gap-2">
          <Image
            src="/accept.png"
            width={20}
            height={20}
            alt=""
            className="cursor-pointer"
          />
          <Image
            src="/reject.png"
            width={20}
            height={20}
            alt=""
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <Image
            src="https://images.pexels.com/photos/26741437/pexels-photo-26741437/free-photo-of-a-woman-in-a-white-dress-standing-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            width={40}
            height={40}
            alt=""
            className="rounded-full w-10 h-10 object-cover"
          />
          <span>ABC</span>
        </div>
        <div className="flex gap-2">
          <Image
            src="/accept.png"
            width={20}
            height={20}
            alt=""
            className="cursor-pointer"
          />
          <Image
            src="/reject.png"
            width={20}
            height={20}
            alt=""
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <Image
            src="https://images.pexels.com/photos/26741437/pexels-photo-26741437/free-photo-of-a-woman-in-a-white-dress-standing-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            width={40}
            height={40}
            alt=""
            className="rounded-full w-10 h-10 object-cover"
          />
          <span>ABC</span>
        </div>
        <div className="flex gap-2">
          <Image
            src="/accept.png"
            width={20}
            height={20}
            alt=""
            className="cursor-pointer"
          />
          <Image
            src="/reject.png"
            width={20}
            height={20}
            alt=""
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default FriendRequests;
