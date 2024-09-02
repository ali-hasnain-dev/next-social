import Image from "next/image";
import Link from "next/link";
import React from "react";

const UserMediaCard = ({ userId }: { userId: string }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Media</span>
        <Link href="/" className="text-xs text-blue-500">
          See all
        </Link>
      </div>
      <div className="flex justify-between flex-wrap gap-4">
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/26741437/pexels-photo-26741437/free-photo-of-a-woman-in-a-white-dress-standing-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/26741437/pexels-photo-26741437/free-photo-of-a-woman-in-a-white-dress-standing-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/26741437/pexels-photo-26741437/free-photo-of-a-woman-in-a-white-dress-standing-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/26741437/pexels-photo-26741437/free-photo-of-a-woman-in-a-white-dress-standing-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/26741437/pexels-photo-26741437/free-photo-of-a-woman-in-a-white-dress-standing-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/26741437/pexels-photo-26741437/free-photo-of-a-woman-in-a-white-dress-standing-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/26741437/pexels-photo-26741437/free-photo-of-a-woman-in-a-white-dress-standing-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="relative w-1/5 h-24">
          <Image
            src="https://images.pexels.com/photos/26741437/pexels-photo-26741437/free-photo-of-a-woman-in-a-white-dress-standing-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default UserMediaCard;
