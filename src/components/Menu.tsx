"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRoleStore } from "@/utils/store/role";
import { usePathname } from 'next/navigation';

const Menu = () => {
  const pathname = usePathname();
  const role = pathname.split("/")[1];
  const id = pathname.split("/")[2];

  return (
    <div className="mt-4 text-xs px-4">
      {menuItems.map((menu, index) => (
        <div className="flex flex-col " key={index}>
          <h1 className="hidden lg:block text-gray-400 font-light my-4">
            {menu.title}
          </h1>
          <ul className="flex flex-col gap-2">
            {menu.items.map((item, index) => {
              if (item.visible.includes(role)) {
                return (
                  <li className="" key={index}>
                    <Link
                      className="flex items-center justify-center lg:justify-start gap-2 text-gray-500 rounded-md hover:bg-lamaSkyLight p-2"
                      href={index===0 ? `/${role}/${id}${item.href}`:`/${role}${item.href}`}
                      key={item.label}
                    >
                      <Image
                        width={15}
                        height={15}
                        src={item.icon}
                        alt={item.label}
                      />
                      <span className="hidden lg:block">{item.label}</span>
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Menu;

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/dashboard",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/teacher.png",
        label: "Teachers",
        href:  "/list/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/student.png",
        label: "Students",
        href: "/list/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/parent.png",
        label: "Parents",
        href: "/list/parents",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/subject.png",
        label: "Subjects",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: "/class.png",
        label: "Classes",
        href: "/list/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/lesson.png",
        label: "Lessons",
        href: "/list/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon: "/exam.png",
        label: "Exams",
        href: "/list/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/assignment.png",
        label: "Assignments",
        href: "/list/assignments",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/result.png",
        label: "Results",
        href: "/list/results",
        visible: ["admin", "teacher", "student", "parent"],
      },
      // {
      //   icon: "/attendance.png",
      //   label: "Attendance",
      //   href: "/list/attendance",
      //   visible: ["admin", "teacher", "student", "parent"],
      // },
      {
        icon: "/calendar.png",
        label: "Events",
        href: "/list/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      // {
      //   icon: "/message.png",
      //   label: "Messages",
      //   href: "/list/messages",
      //   visible: ["admin", "teacher", "student", "parent"],
      // },
      {
        icon: "/announcement.png",
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];
