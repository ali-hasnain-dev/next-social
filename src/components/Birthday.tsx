import Image from "next/image";
import Link from "next/link";
import React from "react";

const Birthday = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      <div className="flex justify-between items-center font-medium ">
        <span className="text-gray-500">Birthdays</span>
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
          <button className="bg-blue-500 text-xs text-white px-2 py-1 rounded-md">
            Celebrate
          </button>
        </div>
      </div>
      <div className="p-4 bg-slate-100 rounded-lg flex items-center gap-4">
        <Image src="/gift.png" alt="" width={24} height={24} />
        <Link href="/" className="flex flex-col gap-1 text-xs">
          <span className="text-gray-700 font-semibold">
            Upcoming Birthdays
          </span>
          <span className="text-gray-500">
            see other 16 have coming Birthdays
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Birthday;
