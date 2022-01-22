import {
  Input,
  FormControl,
  FormErrorMessage,
  Button,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import ytdl from "ytdl-core";
import { useRouter } from "next/router";

export default function YoutubeLinkHookForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [value, setValue] = useState("");
  const handleChange = (event) => setValue(event.target.value);

  function onSubmit(value) {

  }

  return (
    <form onSubmit={handleSubmit(onSubmit(value))}>
      <FormControl isInvalid={errors.link}>
        <InputGroup width="lg">
          <Input
            id="link"
            /* {...register("link", {
              required: "This is required",
              validate: ytdl.validateURL(value)
            })} */
            pr="4.5rem"
            type="text"
            value={value}
            onChange={handleChange}
            placeholder="YouTube Link"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" mr="8px" size="sm" type="submit">
              Submit
            </Button>
          </InputRightElement>
        </InputGroup>
        <FormErrorMessage>
          {errors.link && errors.link.message}
        </FormErrorMessage>
      </FormControl>
    </form>
  );
}
