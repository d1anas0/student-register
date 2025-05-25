import { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@mui/material";

import { formatToDDMMYYYY as dateFormatter } from "../dateFormatter";
import StudentProfile from "./StudentProfile";

export default function StudentRegister() {
  const [listing, setListing] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRowClick = (student) => {
    openModal();
    setSelectedStudent(student);
  };

  const closeModal = () => setIsModalOpen(false);
  const openModal = () => setIsModalOpen(true);

  useEffect(() => {
    fetch("http://localhost:5000/students")
      .then((response) => response.json())
      .then((data) => {
        const formattedDates = data.map((student) => ({
          ...student,
          date_of_birth: dateFormatter(student.date_of_birth),
        }));
        setListing(formattedDates);
      })
      .catch((error) => {
        console.error("error", error);
      });
  }, []);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell align="center">First Name</TableCell>
          <TableCell align="center">Last Name</TableCell>
          <TableCell align="center">
            <p style={{ margin: 0 }}>Date of Birth</p>
            <p style={{ margin: 0 }}>(DD/MM/YYYY)</p>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {listing.map((student) => (
          <TableRow key={student.id} onClick={() => handleRowClick(student)}>
            <TableCell align="center">{student.first_name}</TableCell>
            <TableCell align="center">{student.last_name}</TableCell>
            <TableCell align="center">{student.date_of_birth}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      {isModalOpen && selectedStudent && (
        <StudentProfile
          selectedStudent={selectedStudent}
          open={isModalOpen}
          closeModal={closeModal}
        />
      )}
    </Table>
  );
}
