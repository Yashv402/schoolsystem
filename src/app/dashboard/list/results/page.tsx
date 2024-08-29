import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { resultsData, role} from "@/lib/data";
import FormModal from "@/components/FormModal";

type Result = {
  id: number;
  subject: string;
  student: string;
  score: number;
  teacher: string;
  class: string;
  date: string;
};

const columns = [
  {
    header: "Subject Names",
    accessor: "subjectname",
    className: "md:table-cell",
  },
  {
    header: "Student",
    accessor: "student",
    className: "md:table-cell",
  },
  {
    header: "Score",
    accessor: "score",
    className: "md:table-cell",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },
  {
    header: "Class",
    accessor: "class",
    className: "md:table-cell",
  },
  {
    header: "Date",
    accessor: "date",
    className: "md:table-cell",
  },
  {
    header: "Actions",
    accessor: "actions",
  },
];

const ResultListPage = () => {
  const renderRow = (item: Result) => (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 md:text-sm text-xs hover:bg-lamaPurpleLight h-[60px]">
        <td className="md:table-cell">{item.subject}</td>
        <td className="md:table-cell">{item.student}</td>
        <td className="md:table-cell">{item.score}</td>
        <td className="hidden md:table-cell">{item.teacher}</td>
        <td className="hidden md:table-cell">{item.class}</td>
        <td className="md:table-cell">{item.date}</td>
        <td>
        {role === "admin" && (
          <div className="flex items-center gap-2">
            <FormModal table="result" type="update" data={item} />
            <FormModal table="result" type="delete" id={item.id} />
          </div>
        )}
        </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Results</h1>
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
            <FormModal table="result" type="create" />
          </div>
        </div>
      </div>
      {/* LIST */}
      <div className="">
        <Table columns={columns}  renderRow={renderRow} data={resultsData}/>
      </div>
      {/* PAGINATION */}
      <div className="">
        <Pagination />
      </div>
    </div>
  );
};

export default ResultListPage;
