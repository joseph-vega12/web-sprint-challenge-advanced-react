import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows
test('test renders without crashing', () =>{
    render(<CheckoutForm/>)
});

test("form header renders", () => {
    render(<CheckoutForm/>)
    const header = screen.getByText(/Checkout Form/);
    expect(header).toHaveTextContent(/checkout form/i);
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>);
    const firstName = screen.getByLabelText(/first name/i);
    const lastName = screen.getByLabelText(/last name/i);
    const address = screen.getByLabelText(/address/i);
    // const city = screen.getByLabelText(/city/i);
    // const state = screen.getByLabelText(/state/i);
    // const zipCode = screen.getByLabelText(/zip/i);


    fireEvent.change(firstName, {target:{value: 'Joseph'}});    
    fireEvent.change(lastName, {target:{value: 'Vega'}});
    fireEvent.change(address, {target:{value: '3929  Baldwin Rd'}});
    fireEvent.change(city, {target:{value: 'Baldwin Park'}});
    fireEvent.change(state, {target:{value: 'CA'}});
    fireEvent.change(zipCode, {target:{value: 91706}})

    const button = screen.getByRole("button");
    fireEvent.click(button);

    const newFirstName = screen.getByText(/joseph/i);
    const newLastName = screen.getByText(/vega/i);
    const newAddress = screen.getByText(/3929  Baldwin Rd/i);
    const newCity = screen.getByText(/baldwin park/i);
    const newState = screen.getByText(/ca/i);
    const newZipcode = screen.getByText(/91706/i);

    expect(newFirstName).toBeTruthy();
    expect(newLastName).toBeTruthy();
    expect(newAddress).toBeTruthy();
    expect(newCity).toBeTruthy();
    expect(newState).toBeTruthy();
    expect(newZipcode).toBeTruthy();
});
