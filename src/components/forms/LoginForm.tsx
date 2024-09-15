'use client';

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "../InputField";
import { usersData , role} from "@/lib/data";
import { useRouter } from "next/navigation"; // Correct import for Next.js 13+
// import { useRoleStore } from "@/utils/store/role";

// Object Schema
const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long!" })
    .max(20, { message: "Username must be at most 20 characters long!" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long!" }),
});

// Declare the input type for the schema
type Inputs = z.infer<typeof schema>;

// MAIN COMPONENT
const TeacherForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });


  // const {role, setRole} = useRoleStore();
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter(); // Initialize the router for navigation

  // HANDLE WHAT WILL HAPPEN ON SUBMIT
  const onSubmit = (data: Inputs) => {
    console.log("Submitted")
    // Check if the teacher's credentials exist in usersData
    const foundTeacher = usersData.find(
      (teacher) =>
        teacher.username === data.username && 
        teacher.password === data.password
    );

    if (foundTeacher) {
      console.log("User found! :)")
      console.log(foundTeacher)
      // setRole(foundTeacher.post);
      // role = foundTeacher.post;
      console.log("posts found: "+ foundTeacher.post);
      // If credentials match, redirect to the dashboard
      router.push('/'+foundTeacher.post+'/'+foundTeacher.id+'/dashboard');
      // role = foundTeacher.post;

    } else {
      console.log("User not found! :(")
      // If credentials don't match, show an error message
      setErrorMessage('Invalid credentials! Please check your username or password, or sign up.');
    }
  };

  return (
    <form
      className="flex flex-col gap-4 w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-4">
        <InputField
          label="Username"
          name="username"
          defaultValue=""
          register={register}
          error={errors.username}
        />

        <InputField
          label="Password"
          name="password"
          defaultValue=""
          register={register}
          error={errors.password}
        />
      </div>

      {/* Display error message if login fails */}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}

      {/* SUBMIT BUTTON */}
      <button type="submit" className="bg-blue-300 rounded-md p-2">
        Log In
      </button>
    </form>
  );
};

export default TeacherForm;
