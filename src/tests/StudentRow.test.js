import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Table, TableBody } from "@mui/material";
import StudentRow from "../components/StudentRow";

const mockStudent = {
  id: 1,
  first_name: "Alice",
  last_name: "Smith",
  date_of_birth: "01/01/2000",
};

test("calls onClick with the correct student when the row is clicked", () => {
  const handleClick = jest.fn();
  render(
    <Table>
      <TableBody>
        <StudentRow student={mockStudent} onClick={handleClick} />
      </TableBody>
    </Table>
  );

  fireEvent.click(screen.getByTestId("student-row-1"));
  expect(handleClick).toHaveBeenCalledTimes(1);
  expect(handleClick).toHaveBeenCalledWith(mockStudent);
});
