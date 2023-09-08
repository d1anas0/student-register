import { render, screen } from "@testing-library/react";

import StudentRegister from "../components/StudentRegister";


describe('Given the landing page (Student Register) DID render correctly', () => {
    it('Should be displaying a table with columns titled \'First Name\', \'Last Name\' and \'Date of Birth\'', () => {
        render(<StudentRegister />); 
        expect(screen.queryByText(/first name/i)).toBeInTheDocument();
        expect(screen.queryByText(/last name/i)).toBeInTheDocument();
        expect(screen.queryByText(/date of birth/i)).toBeInTheDocument();
    });
    it('Should NOT be displaying a table with a column titled \'address\'', () => {
        render(<StudentRegister />); 
        expect(screen.queryByText(/address/i)).not.toBeInTheDocument();
    });
});

// TODO: how to test the formatter function? mock? 
// describe('Given date_of_birth was correctly formatted', () => {
//     it('Should be shown in the format DD/MM/YYYY', () => {
//         render(<StudentRegister />); 
//     })
// })
