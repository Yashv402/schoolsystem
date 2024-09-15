import React from "react";
import LoginForm from "@/components/forms/LoginForm";
import Image from "next/image";

const page = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-4 w-[30%] p-4">
          <h1 className="text-3xl text-bold">Welcome back to schoolar</h1>
          <Image src="/logo.png" alt="" width={200} height={200} />
        <LoginForm />
      </div>
    </div>
  );
};

export default page;
