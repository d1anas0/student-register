import { TableRow, TableCell, Typography } from "@mui/material";

export default function StudentRow({ student, onClick }) {
  return (
    <TableRow
      key={student.id}
      onClick={() => onClick(student)}
      hover
      data-testid={`student-row-${student.id}`}
      aria-labelledby={`first-name-header last-name-header date-of-birth-header`}
    >
      <TableCell
        align="center"
        data-testid={`first-name-cell-${student.id}`}
        headers="first-name-header"
      >
        <Typography
          variant="body1"
          sx={{ fontWeight: 500, color: "text.primary" }}
        >
          {student.first_name}
        </Typography>
      </TableCell>
      <TableCell
        align="center"
        data-testid={`last-name-cell-${student.id}`}
        headers="last-name-header"
      >
        <Typography
          variant="body1"
          sx={{ fontWeight: 500, color: "text.primary" }}
        >
          {student.last_name}
        </Typography>
      </TableCell>
      <TableCell
        align="center"
        data-testid={`dob-cell-${student.id}`}
        headers="date-of-birth-header"
      >
        <Typography variant="body1" sx={{ color: "text.primary" }}>
          {student.date_of_birth}
        </Typography>
      </TableCell>
    </TableRow>
  );
}
