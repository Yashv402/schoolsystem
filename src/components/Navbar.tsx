"use client";

import Image from "next/image";
import Link from "next/link";
// import { useRouter } from 'next/router';
import React from "react";
import { usePathname } from 'next/navigation'
import { useRoleStore } from "@/utils/store/role";

const Navbar = () => {
    const pathname = usePathname();
    const role = pathname.split("/")[1];
    const roleid = pathname.split("/")[1] +"/"+ pathname.split("/")[2];

  return (
    <div className="flex items-center justify-between p-4">
      {/* SEARCH BAR */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src="/search.png" alt="search" width={14} height={14} />
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] p-2 bg-transparent outline-none"
        />
      </div>
      {/* ICONS AND USER */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center cursor-pointer">
          <Image src="/message.png" alt="" width={25} height={25} />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center cursor-pointer relative">
          <Image src="/announcement.png" alt="" width={20} height={30} />
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-bold">Yashvi Singh</span>
          <span className="text-[10px] text-gray-500 text-right">{role}</span>
        </div>
        <Link href={`/${roleid}/profile`}>
          <Image
            src="/avatar.png"
            alt="avatar"
            width={30}
            height={30}
            className="rounded-full"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
