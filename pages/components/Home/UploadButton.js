import { Box, Button } from "@chakra-ui/react";
import React from "react";

const UploadButton = (props) => {
  // Create a reference to the hidden file input element
  const hiddenFileInput = React.useRef(null);

  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    console.log(fileUploaded);
  };
  return (
    <Box>
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
      {/*TODO: Add validation to file upload. Must be less than 15MB and can only be MP3, AIFF, FLAC */}
      <input
        type="file"
        ref={hiddenFileInput}
        accept="audio/*"
        onChange={handleChange}
        style={{ display: "none" }}
      />
    </Box>
  );
};

export default UploadButton;
