import Image from "next/image";
import React from "react";

const Ad = ({ size }: { size: "sm" | "md" | "lg" }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      <div className="flex items-center justify-between text-gray-500 font-medium">
        <span>Sponsered Ads</span>
        <Image src="/more.png" alt="" width={16} height={16} />
      </div>
      <div
        className={`flex flex-col mt-4 ${size === "sm" ? "gap-2" : "gap-4"}`}
      >
        <div
          className={`relative w-full ${
            size === "sm" ? "h-24" : size === "md" ? "h-36" : "h-48"
          }`}
        >
          <Image
            src="https://images.pexels.com/photos/26741437/pexels-photo-26741437/free-photo-of-a-woman-in-a-white-dress-standing-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            fill
            className="rounded-lg object-cover"
          />
        </div>

        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/26741437/pexels-photo-26741437/free-photo-of-a-woman-in-a-white-dress-standing-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
            width={24}
            height={24}
            className="rounded-full object-cover w-6 h-6"
          />
          <span className="text-blue-500 font-semibold">XYZ</span>
        </div>
        <p className={size === "sm" ? "text-xs" : "text-sm"}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
          necessitatibus eveniet
        </p>
        <button className="bg-gray-200 text-gray-500 text-xs p-2 rounded-lg">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Ad;
