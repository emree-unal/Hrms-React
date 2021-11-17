import React from "react";
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import { Button, Label, Grid, FormField, Container, Header } from "semantic-ui-react";
import axios from "axios";

import HrmsTextInput from "../utilities/customFormControls/HrmsTextInput";

import HrmsDateTimePicker from "../utilities/customFormControls/HrmsDateTimePicker";

export default function CandidateAdd() {
  const initialValues = {
    nationalIdentity: "",
    firstName: "",
    lastName: "",
    email: "",
    birthDate: "",
    password: "",
  };

  const schema = yup.object({
    nationalIdentity: yup
      .string()
      .required("National identity is required!!")
      .min(11, "National identity can not be less than 11 character!!"),

    firstName: yup.string().required("First Name is required!!"),
    lastName: yup.string().required("Last Name is required!!"),
    email: yup.string().required("Email is required !!"),
    birthDate: yup.date().required("BirthDate is required !!"),
    password: yup.string().required("Password is required !!"),
  });

  return (
    <div>
      <Grid>
        <Grid.Row>
        <Grid.Column width={3}/>
          <Grid.Column width={10}>
            <Header textAlign="center" size="huge">Candidate Sign up</Header>
            
            <Formik
              initialValues={initialValues}
              validationSchema={schema}
              onSubmit={(values) => {
                axios
                .post("http://localhost:8080/api/candidates/register", values)
              }}
            >
              <Form className="ui form">
                <HrmsTextInput
                  name="nationalIdentity"
                  placeholder="National ID"
                ></HrmsTextInput>

                <HrmsTextInput
                  name="firstName"
                  placeholder="First Name"
                ></HrmsTextInput>

                <HrmsTextInput
                  name="lastName"
                  placeholder="Last Name"
                ></HrmsTextInput>

                <HrmsTextInput name="email" placeholder="Email"></HrmsTextInput>
                <HrmsDateTimePicker
                  name="birthDate"
                  placeholder="BirthDate"
                ></HrmsDateTimePicker>

                <HrmsTextInput
                  name="password"
                  placeholder="Password"
                ></HrmsTextInput>

                <br />
                <Button type="submit" color="green">
                  Save
                </Button>
              </Form>
            </Formik>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
