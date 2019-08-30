import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Label, Input, SignUpWrapper } from '../styledComponents/StyledComponents'



function Login({ touched, errors }) {
  const token = localStorage.getItem("token");


  if (token) {
    return <Redirect to="/menu" />;
  }

  return (
    
    <div>
    <h1 className ="signup heading">Sign in</h1>
   <SignUpWrapper className="wrapper"> 
      

      <Form className="singUpForm">
        <div>
          <Input>
            <Label>Username</Label>
            <Field 
              name="username" 
              type="username"
              autoComplete="off"
            />
            <br/>
            <p>{touched.username && errors.username}</p>
          </Input>

          <Input>
            <Label>Password</Label>
            <Field
              name="password"
              type="password"
              autoComplete="off"
            />
            <br/>
            <p>{touched.password && errors.password}</p>
          </Input>

          <button type="submit" >Submit &rarr;</button>
        </div>
      </Form>

    </SignUpWrapper>
    </div>
  );
}

export default withFormik({

  mapPropsToValues() {
    return {
      username: "",
      password: ""
    };
  },


  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(3)
      .required(),
    password: Yup.string()
      .min(6)
      .required()
  }),


  handleSubmit(values, formikBag) {
    // const url = "https://career-longevity-predictor.herokuapp.com/api/auth/login";
    const url = "https://potluckplanner-be.herokuapp.com/users/login"


    // console.log("LOOK AT ME",values)
    axios
      .post(url, values)
      .then(response => {
        console.log("LOOK AT ME", response)
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("id", response.data.user_id);
        formikBag.props.history.push("/menu");
      })
      .catch(e => {
        console.log(e);
      });
  }

})(Login);
