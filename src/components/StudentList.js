import { TableRow, TableCell, Typography } from "@mui/material";

export default function ListItem({ student, onClick }) {
  return (
    <TableRow key={student.id} onClick={() => onClick(student)} hover>
      <TableCell align="center">
        <Typography
          variant="body1"
          sx={{ fontWeight: 500, color: "text.primary" }}
        >
          {student.first_name}
        </Typography>
      </TableCell>
      <TableCell align="center">
        <Typography
          variant="body1"
          sx={{ fontWeight: 500, color: "text.primary" }}
        >
          {student.last_name}
        </Typography>
      </TableCell>
      <TableCell align="center">
        <Typography variant="body1" sx={{ color: "text.primary" }}>
          {student.date_of_birth}
        </Typography>
      </TableCell>
    </TableRow>
  );
}
