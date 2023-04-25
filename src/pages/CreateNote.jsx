import React, { useState } from "react";
import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import { ValidateSchema } from "../components/ValidateSchema";
import { ArrowForwardOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const sx = {
  textfield: {
    marginBottom: 5,
    marginTop: 5,
    display: "flex",
    flexGrow: 1,
  },
  field: {
    display: "block",
    marginBottom: 5,
    marginTop: 5,
  },
};
const CreateNote = ({ notes, setNotes }) => {
  const [category, setCategory] = useState("class");
  const navigate = useNavigate();
  const onSubmit = (values) => {
    if (values.title && values.note) {
      setNotes((prev) => [
        ...prev,
        { ...values, category, id: notes.length + 1 },
      ]);
      //   navigate("/");
    }
  };
  const formik = useFormik({
    initialValues: {
      title: "",
      note: "",
    },
    validationSchema: ValidateSchema,
    onSubmit,
  });
  return (
    <Container maxWidth={false}>
      <form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
        <TextField
          sx={sx.textfield}
          id="title"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
          label="Email"
          variant="outlined"
          required
          error={formik.errors.title && formik.touched.title}
        />
        <TextField
          sx={sx.textfield}
          id="note"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.note}
          label="Note"
          variant="outlined"
          multiline
          rows={4}
          error={formik.errors.note && formik.touched.note}
          required
        />
        <FormControl sx={sx.field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            color="secondary"
          >
            <FormControlLabel control={<Radio />} value="money" label="Money" />
            <FormControlLabel control={<Radio />} value="class" label="Class" />
            <FormControlLabel control={<Radio />} value="todo" label="Todo" />
            <FormControlLabel
              control={<Radio />}
              value="Travel"
              label="Travel"
            />
          </RadioGroup>
        </FormControl>
        <Button
          endIcon={<ArrowForwardOutlined />}
          variant="contained"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default CreateNote;
