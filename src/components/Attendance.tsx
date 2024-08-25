'use client'
import Image from 'next/image';
import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    present: 40,
    absent: 60,
  },
  {
    name: 'Tue',
    present: 50,
    absent: 30,
  },
  {
    name: 'Wed',
    present: 70,
    absent: 30,
  },
  {
    name: 'Thu',
    present: 50,
    absent: 40,
  },
  {
    name: 'Fri',
    present: 30,
    absent: 70,
  },
  {
    name: 'Sat',
    present: 80,
    absent: 20,
  },
];

// export default class Example extends PureComponent {
//   static demoUrl = 'https://codesandbox.io/p/sandbox/simple-bar-chart-72d7y5';

//   render() {
//     return (
//     );
//   }
// }


const Attendance = () => {
  return (
    <div className='flex flex-col justify-between bg-white rounded-lg p-2 w-full h-full'>
        <div className="flex justify-between items-center">
            <h1>Attendence</h1>
            <Image src="/moreDark.png" alt="" width={20} height={20} />
        </div>
        <ResponsiveContainer className="h-fit" width="90%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={15}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd"/>
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
          <YAxis axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false}/>
          <Tooltip />
          <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop: "20px", paddingBottom: "40px" }}/>
          <Bar dataKey="present" fill="#C3EBFA"  
          legendType='circle'
          radius={[10, 10, 0, 0]}
          />
          <Bar dataKey="absent" fill="#FAE27C" 
          legendType='circle'
          radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Attendance


