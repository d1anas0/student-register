import React, {useEffect, useState} from "react";

import { formatToDDMMYYYY as dateFormatter } from "../dateFormatter";


export default function StudentProfile() {
    const [details, setDetails] = useState([]);
    const [birthdate, setBirthdate] = useState(null);
    // const [imageURL, setImageURL] = useState(null);

    // 1. fetch data
    useEffect(() => {
        fetch("http://localhost:5000/students/2") // TODO: make dynamic
          .then((response) => response.json())
          .then((data) => {
            const formattedDate = dateFormatter(data.date_of_birth);
            setDetails(data);
            setBirthdate(formattedDate);
          });
          // TODO: Error Handling
          // .catch((error) => {
          //   console.log("error", error);
          // });

      //fetch profile image
        // fetch("http://localhost:5000/profiles/2") // TODO: make dynamic
        //   .then((response) => response.json())
        //   .then((data) => {
        //     console.log("data", data, "image", data.image_URL)
        //     setImageURL(data.image_URL);
        //   });


  }, [])

  return (
    <>
      {/* This is a modal */}
      {/* Holds profile picture  */}
        {/* <div><img src={imageURL}/></div> */}

      {/* First name and Last name fields are editable */}
        <div>{details.first_name}</div>
        <div>{details.last_name}</div>
        <div>{birthdate}</div>
        <div>{details.address.street_line1}</div>
        <div>{details.address.street_line2}</div>
        <div>{details.address.country}</div>
        <div>{details.address.postcode}</div>
    </>
  );
}