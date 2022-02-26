// Button used to upload an audio file and send to '/transcribe' page
import { Box, Button, FormControl, FormErrorMessage } from "@chakra-ui/react";
import { React, useState, useRef } from "react";
import { useFormContext } from "react-hook-form";

const UploadButton = (props) => {
  // react-hook-form stuff
  const {
    handleSubmit, //takes as input onSubmit
    register, // function used to link an input to form state
    formState: { errors },
  } = useFormContext();

  // Create a reference to the hidden file input element
  const hiddenFileInput = useRef(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const handleChange = (event) => {
    const file = event.target.files[0]
    console.log(file)
  };

  return (
    <Box>
      <FormControl isInvalid={errors.files}>
        <Button
          borderRadius="16px"
          onClick={handleClick}
          width={40}
          height={12}
          paddingLeft="16px"
          paddingRight="16px"
          shadow="xl"
          _focus={{ boxShadow: "none", shadow: "xl" }}
        >
          Upload
        </Button>
        <input
          id="files"
          type="file"
          ref={hiddenFileInput}
          accept="audio/*"
          onChange={handleChange}
          style={{ display: "none" }}
        />
        <FormErrorMessage>
          {errors.files && errors.files.message}
        </FormErrorMessage>
      </FormControl>
    </Box>
  );
};

export default UploadButton;
