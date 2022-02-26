import {
  Input,
  FormControl,
  FormErrorMessage,
  Button,
  InputGroup,
  InputRightElement,
  Box,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";
import React, { useState } from "react";
import ytdl from "ytdl-core";

export default function YoutubeLinkHookForm() {
  // react-hook-form stuff
  const {
    handleSubmit, //takes as input onSubmit
    register, // function used to link an input to form state
    formState: { errors },
  } = useFormContext();

  const [value, setValue] = useState(""); // variable to hold input string
  const handleChange = (event) => setValue(event.target.value);

  function onSubmit() {
    console.log(
      `This is the link: ${value} \nThis is the validation ${ytdl.validateURL(
        value
      )}`
    );
  }

  return (
    <Box>
      <FormControl isInvalid={errors.link}>
        <InputGroup width="lg">
          <Input
            id="link"
            {...register("link", {
              required: "This is required",
              validate: (link) =>
                ytdl.validateURL(link) || "Invalid YouTube Link", // react-hook-form validation needs to be a function and then or'd with err msg
            })}
            pr="4.5rem"
            type="text"
            value={value}
            onChange={handleChange}
            placeholder="YouTube Link"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" mr="8px" size="sm" type="submit" onClick={handleSubmit(onSubmit)}>
              Submit
            </Button>
          </InputRightElement>
        </InputGroup>
        <FormErrorMessage>
          {errors.link && errors.link.message}
        </FormErrorMessage>
      </FormControl>
    </Box>
  );
}
