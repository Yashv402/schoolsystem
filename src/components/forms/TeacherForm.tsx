import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "../InputField";
import Image from "next/image";
import { teachersData } from "@/lib/data";


// Object Schema
const schema = z.object({
  teacherId: z.string().min(10, {message: "Max length should be 10"}),
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long!" })
    .max(20, { message: "Username must be at most 20 characters long!" }),
  email: z.string().email({ message: "Invalid email address!" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long!" }),
  firstName: z.string().min(1, { message: "First name is required!" }),
  lastName: z.string().min(1, { message: "Last name is required!" }),
  phone: z.string().min(8, { message: "Phone number is required!" }),
  bloodType: z.string().min(1, { message: "Blood type is required!" }),
  address: z.string().min(1, { message: "Address is required!" }),
  birthday: z.string().refine((value) => {
    const parsedDate = new Date(value);
    return !isNaN(parsedDate.getTime());
  }, { message: "Invalid date!" }),
  
  sex: z.enum(["male", "female"], { message: "Sex is required!" }),
  photo: z.instanceof(File, { message: "Image is required!" }),
});



// declair the input type for the schema 
type Inputs = z.infer<typeof schema>;



// MAIN COMPONENT
const TeacherForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {


  // FOR SHOWING THE IMAGE ON UPLOADING
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  // FOR UPLOADING THE PHOTO OUT WITHOUT THE ZOD 
  const [photo, setPhoto] = useState<File | null>(null); // State to store the image file
  // 
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,

  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });


  // UPDATE THE DATA AND SHOW THE IMAGE ON CHANGING
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhoto(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file); // Convert the file to a base64 string
    }
  };


  // HANDLE WHAT WILL HAPPEN ON SUBMIT
  const onSubmit = (data: any) => {
    data.preventDefault();
    console.log(data);
    data = getValues();
    console.log(data);
    if (!photo) {
      alert("Please upload an image!");
      return;
    }

    console.log({ ...data, photo:imageUrl });
    const n = teachersData.length;
    console.log(n);
    console.log(teachersData);
    teachersData.push({ ...data, photo:imageUrl, id:n }); // Uncomment to add to teachersData
    


  };

  return (
    <form className="flex flex-col gap-4" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">Create a new Teacher</h1>

      <span className="text-xs text-gray-400 font-medium">
        Authentication Information
      </span>

      <div className="flex gap-4 justify-between">
        <InputField
          label="Username"
          name="username"
          defaultValue={data?.username}
          register={register}
          error={errors.username}
        />

        <InputField
          label="Email"
          name="email"
          defaultValue={data?.email}
          register={register}
          error={errors.email}
        />

        <InputField
          label="Password"
          name="password"
          defaultValue={data?.password}
          register={register}
          error={errors.password}
        />
      </div>

      <span className="text-xs text-gray-400 font-medium">
        Personal Information
      </span>

      <div className="flex gap-4 justify-between">
        <InputField
          label="First Name"
          name="firstName"
          defaultValue={data?.firstName}
          register={register}
          error={errors.firstName}
        />

        <InputField
          label="Last Name"
          name="lastName"
          defaultValue={data?.lastname}
          register={register}
          error={errors.lastName}
        />

        <InputField
          label="Phone"
          name="phone"
          defaultValue={data?.phone}
          register={register}
          error={errors.phone}
        />
      </div>

      <div className="flex gap-4 justify-between">
        <InputField
          label="Address"
          name="address"
          defaultValue={data?.address}
          register={register}
          error={errors.address}
        />

        <InputField
          label="Blood Type"
          name="bloodType"
          defaultValue={data?.bloodtype}
          register={register}
          error={errors.bloodType}
        />

        <InputField
          label="Birthday"
          name="birthday"
          defaultValue={data?.birthday}
          register={register}
          error={errors.birthday}
          type="date"
        />
      </div>

{/* INPUT FOR SEX */}
      <div className="flex justify-between">
        <div className="flex flex-col gap-2 w-[30%]">
          <label className="text-xs text-gray-400">Sex</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("sex")}
            defaultValue={data?.sex}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.sex?.message && (
            <p className="text-xs text-red-400">
              {errors.sex.message.toString()}
            </p>
          )}
        </div>


{/* INPUT FOR IMAGE */}
        <div className="flex flex-col gap-2 w-[30%] justify-center">
          <label
            className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer"
            htmlFor="img"
          >
            <Image src="/upload.png" width={28} height={28} alt="" />
            <span>Upload a photo</span>
          </label>
          <input
            id="img"
            className="hidden"
            type="file"
            name="photo"
            onChange={handleImageChange}
          />
          {!photo && (
            <p className="text-xs text-red-400">Image is required!</p>
          )}
        </div>
      </div>

{/* TO SHOW THE IMAGES UPLOADED */}
      {imageUrl && (
        <div className="flex justify-center mt-4">
          <Image
            src={imageUrl}
            alt="Image Preview"
            width={100}
            height={100}
            className="object-cover rounded-md"
          />
        </div>
      )}

{/* SUBMIT BUTTON */}
      <button type="submit" className="bg-blue-300 rounded-md p-2">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default TeacherForm;
