import React, {useEffect, useState} from "react";

import { formatToDDMMYYYY as dateFormatter } from "../dateFormatter";
import { Dialog } from "@mui/material/";


export default function StudentProfile({ selectedStudent, open, closeModal }) {
    const [details, setDetails] = useState([]);
    const [birthdate, setBirthdate] = useState(null);

    useEffect(() => {
      if (selectedStudent?.id) {
        fetch(`http://localhost:5000/students/${selectedStudent.id}`)
          .then((response) => response.json())
          .then((data) => {
            const formattedDate = dateFormatter(data.date_of_birth);
            setDetails(data);
            setBirthdate(formattedDate);
          })
          // TODO: Error Handling
          .catch((error) => {
            console.error("error", error);
          });
        }
  }, [selectedStudent?.id])

  return (
    // TODO: UI of modal
    <Dialog
      maxWidth="sm"
      open={open}
      onClose={closeModal}
    >
      {/* Holds profile picture  */}

      {/* First name and Last name fields are editable */}
        <div>{details.first_name}</div>
        <div>{details.last_name}</div>
        <div>{birthdate}</div>
        <div>{details.address?.street_line1}</div>
        <div>{details.address?.street_line2}</div>
        <div>{details.address?.country}</div>
        <div>{details.address?.postcode}</div>
    </Dialog>
  );
}