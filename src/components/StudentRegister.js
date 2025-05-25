import { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Typography,
} from "@mui/material";

import { formatToDDMMYYYY as dateFormatter } from "../dateFormatter";
import StudentProfile from "./StudentProfile";
import ListItem from "./StudentList";

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
          <TableCell align="center">
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 600, color: "text.primary" }}
            >
              First Name
            </Typography>
          </TableCell>
          <TableCell align="center">
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 600, color: "text.primary" }}
            >
              Last Name
            </Typography>
          </TableCell>
          <TableCell align="center">
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 600, color: "text.primary", m: 0 }}
            >
              Date of Birth
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ color: "text.primary", m: 0 }}
            >
              (DD/MM/YYYY)
            </Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {listing.map((student) => (
          <ListItem
            key={student.id}
            student={student}
            onClick={handleRowClick}
          />
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
