import { link } from "fs";
import Image from "next/image";
import Link from "next/link";


const category =[
  {
    id:1,
    name:"admin",
    link: "/dashboard/admin",
  },
  {
    id:2,
    name:"teacher",
    link: "/dashboard/teacher",
  },
  {
    id:3,
    name:"students",
    link: "/dashboard/student",
  },
  {
    id:4,
    name:"parent",
    link: "/dashboard/parent",
  },
]
export default function Home() {
  return (
    <div className="w-full h-svh bg-lamaSkyLight flex flex-col justify-center items-center gap-10 p-10">
      <h1 className="text-5xl font-bold text-gray-800">Welcome to <span className="text-lamaPurple">School<span className="text-lamaYellow">Lama</span></span> System</h1>
      <Image src="/logo.png" alt="School System" width={200} height={200} />
      <ul className="flex gap-5">
      {
        category.map((item)=>{
          return(
            <Link href={item.link} key={item.id}>
              <input className="border py-1 px-2 border-slate-500 rounded-xl" type="button" value={item.name} />
            </Link>
          )
        })
      }
      </ul>
    </div>
  );
}
