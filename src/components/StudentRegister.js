import React, {useEffect, useState} from "react";
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';

import { formatToDDMMYYYY as dateFormatter } from "../dateFormatter";


export default function StudentRegister() {
 const [listing, setListing] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/students")
      .then((response) => response.json())
      .then((data) => {
        // Date formatter: need DD/MM/YYYY (original = YYYY-MM-DD)
        const formattedDates = data.map((student) => ({
          ...student, 
          date_of_birth: dateFormatter(student.date_of_birth),
        }));
        setListing(formattedDates);
      })
      // TODO: Error Handling
      // .catch((error) => {
      //   console.log("error", error);
      // });
  }, [])

 
  return (
    <Table> 
      <TableHead>
        <TableRow>
        <TableCell>First Name</TableCell>
        <TableCell>Last Name</TableCell>
        <TableCell>Date of Birth (DD/MM/YYYY)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {listing.map((student) => (
          <TableRow
            // TODO: Each row (listing) can open up a modal for editing
            key={student.id}
          >
            <TableCell>{student.first_name}</TableCell>
            <TableCell>{student.last_name}</TableCell>
            <TableCell>{student.date_of_birth}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}