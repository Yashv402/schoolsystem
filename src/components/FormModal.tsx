"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import Announcements from "@/components/Announcements";
import TeacherForm from "./forms/TeacherForm";
import StudentForm from "./forms/StudentForm";

const forms: {
  [key: string]: (type: "create" | "update", data?: any) => JSX.Element;
} = {
  teacher: (type, data) => <TeacherForm type={type} data={data} />,
  student: (type, data) => <StudentForm type={type} data={data} />,
};
const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}) => {
  const size = type == "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type == "create"
      ? "bg-lamaYellow"
      : type == "update"
      ? "bg-lamaSky"
      : "bg-lamaPruple";

  const [open, setOpen] = useState(false);
  const Form = () => {
    return type === "delete" && id ? (
      <form
        action=""
        className="p-4 flex flex-col gap-4 justify-center items-center"
      >
        <span className="text-center font-medium">
          All data will be lost , Are you sure you want to delete this item{" "}
          {table}?
        </span>
        <button className="bg-red-500 text-white py-2 px-4 rounded-md border-none w-[70%]">
          Delete
        </button>
      </form>
    ) : type === "create" || type === "update" ? (
      forms[table](type, data)
    ) : (
      "Form not found!"
    );
  };

  return (
    <div>
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor} `}
        onClick={() => setOpen(true)}
      >
        <Image src={`/${type}.png`} width={16} height={16} alt={type} />
      </button>

      {open && (
        <div className="w-screen h-screen absolute left-0 top-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white  p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] lx:w-[50%] 2xl:w-[40%] ">
            <Form />
            <div className="absolute top-4 right-4 cursor-pointer">
              <Image
                onClick={() => setOpen(false)}
                src="/close.png"
                width={16}
                height={16}
                alt="Close"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormModal;
