import React from "react";
import { LineChart as LC, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const LineChart = () => {
  const mathMarks1 = [
    { student: "Student A", mathMarks: 78 },
    { student: "Student B", mathMarks: 85 },
    { student: "Student C", mathMarks: 92 },
    { student: "Student D", mathMarks: 74 },
    { student: "Student E", mathMarks: 88 },
    { student: "Student F", mathMarks: 95 },
    { student: "Student G", mathMarks: 68 },
    { student: "Student H", mathMarks: 80 },
    { student: "Student I", mathMarks: 90 },
    { student: "Student J", mathMarks: 76 }
  ];

  return (
    <div>
      <LC width={500} height={400} data={mathMarks1}>
        {/* <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="student" />
        <YAxis />
        <Tooltip />
        <Legend /> */}
        <Line type="monotone" dataKey="mathMarks" stroke="#8884d8" />
      </LC>
    </div>
  );
};

export default LineChart;
