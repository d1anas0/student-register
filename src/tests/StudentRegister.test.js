import { render, screen } from "@testing-library/react";
import StudentRegister from "../components/StudentRegister";

describe("Given the landing page (Student Register) DID render correctly", () => {
  it("Should be displaying a table with columns titled 'First Name', 'Last Name' and 'Date of Birth'", () => {
    render(<StudentRegister />);
    expect(screen.getByTestId("first-name-header")).toBeInTheDocument();
    expect(screen.getByTestId("last-name-header")).toBeInTheDocument();
    expect(screen.getByTestId("date-of-birth-header")).toBeInTheDocument();
  });
  it("Should NOT be displaying a table with a column titled 'address'", () => {
    render(<StudentRegister />);
    expect(screen.queryByText(/address/i)).not.toBeInTheDocument();
  });
});
