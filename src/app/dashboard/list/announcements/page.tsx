import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { announcementsData, role} from "@/lib/data";

type Announcement = {
  id: number;
  title: string;
  class: number;
  date: string;
};

const columns = [
  {
    header: "Title",
    accessor: "title",
    className: "md:table-cell",
  },
  {
    header: "Class",
    accessor: "class",
    className: "md:table-cell",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

const AnnouncementsListPage = () => {
  const renderRow = (item: Announcement) => (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 md:text-sm text-xs hover:bg-lamaPurpleLight h-[60px]">
        <td className="md:table-cell">{item.title}</td>
        <td className="md:table-cell">{item.class}</td>
        <td className="hidden md:table-cell">{item.date}</td>
        <td>
            <div className="flex items-center gap-2">
            <Link href={`/list/teachers/${item.id}`}>
                <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
                <Image
                    src="/edit.png"
                    width={16}
                    height={16}
                    alt="Edit Teacher" />
                </button>
            </Link>
            {role === "admin" && (
                <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
                <Image
                src="/delete.png"
                width={16}
                height={16}
                alt="Edit Teacher" />
            </button>
            )}
            </div>
        </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Events</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image
                src="/filter.png"
                width={20}
                height={20}
                alt="Add Teacher"
              />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" width={20} height={20} alt="Add Teacher" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/plus.png" width={20} height={20} alt="Add Teacher" />
            </button>
          </div>
        </div>
      </div>
      {/* LIST */}
      <div className="">
        <Table columns={columns}  renderRow={renderRow} data={announcementsData}/>
      </div>
      {/* PAGINATION */}
      <div className="">
        <Pagination />
      </div>
    </div>
  );
};

export default AnnouncementsListPage;
