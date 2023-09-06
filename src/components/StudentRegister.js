// This is a table:
// // Displays: first_name, last_name, date_of_birth
// // // Date formatter: DOB = DD/MM/YYYY
// // // Each row (listing) can open up a modal for editing


import React, {useEffect, useState} from "react";
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';



export default function StudentRegister() {
 const [listing, setListing] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/students")
      .then((response) => response.json())
      .then((data) => {console.log(data); setListing(data)})
      .catch((error) => console.log("error", error));
  }, []);

return (
  <Table> 
    <TableHead>
      <TableRow>
       <TableCell>First Name</TableCell>
       <TableCell>Last Name</TableCell>
       <TableCell>Date of Birth</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {listing.map((data) => (
        <TableRow
          key={data.id}
        >
          <TableCell>{data.first_name}</TableCell>
          <TableCell>{data.last_name}</TableCell>
          <TableCell>{data.date_of_birth}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>

  
);
    }