import { useEffect, useState } from "react";
import { Dialog, DialogContent, Box, Typography } from "@mui/material/";

import { formatToDDMMYYYY as dateFormatter } from "../dateFormatter";

export default function StudentProfile({ selectedStudent, open, closeModal }) {
  const [details, setDetails] = useState({});
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
        // TODO: Error Handling (messages)
        .catch((error) => {
          console.error("error", error);
        });
    }
  }, [selectedStudent?.id]);

  return (
    // TODO: UI of modal
    <Dialog
      maxWidth="sm"
      open={open}
      onClose={closeModal}
      PaperProps={{
        sx: {
          bgcolor: "contrast.default",
          color: "text.primary",
        },
      }}
    >
      {/* TODO: Holds profile picture  */}
      {/* TODO: First name and Last name fields are editable */}
      <DialogContent>
        {details.first_name ? (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="h6">
              {details.first_name} {details.last_name}
            </Typography>
            <Typography>Date of Birth: {birthdate}</Typography>
            <Typography>
              {details.address?.street_line1} {details.address?.street_line2}
            </Typography>
            <Typography>
              {details.address?.postcode} {details.address?.country}
            </Typography>
          </Box>
        ) : (
          <Typography>Loading...</Typography>
        )}
      </DialogContent>
    </Dialog>
  );
}
