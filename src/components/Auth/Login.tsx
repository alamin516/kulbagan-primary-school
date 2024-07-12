"use client";
import { styles } from "@/styles/style";
import { Twitter } from "@mui/icons-material";
import { useFormik } from "formik";
import { EyeIcon, EyeOffIcon, Facebook, Github } from "lucide-react";
import React, { FC, useState } from "react";
import * as Yup from "yup";
type Props = {
  setRoute: (route: string) => void;
};

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email!")
    .required("Please enter your email"),
  password: Yup.string().required("Please enter your password").min(6),
});

const Login: FC<Props> = (props: Props) => {
  const [show, setShow] = useState(false);

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: schema,
    onSubmit: async ({ email, password }) => {
      console.log(email, password);
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <div className="w-full p-4">
      <h1 className={`${styles.title}`}>Login with Dot Learning</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className={`${styles.label}`}>
          Enter your email here
        </label>
        <input
          type="email"
          id="email"
          value={values.email}
          onChange={handleChange}
          placeholder="loginaddress@****.com"
          className={`${errors.email && touched.email && "border-red-500"} ${
            styles.input
          }`}
        />
        {errors.email && touched.email && (
          <span className="text-red-500 p-2 block">{errors.email}</span>
        )}
        <div className="w-full mt-5 relative mb-1">
          <label htmlFor="password" className={`${styles.label}`}>
            Enter your password here
          </label>
          <input
            type={!show ? "password" : "text"}
            id="password"
            value={values.password}
            onChange={handleChange}
            placeholder="********"
            className={`${
              errors.password && touched.password && "border-red-500"
            } ${styles.input}`}
          />
          {!show ? (
            <EyeOffIcon
              className="absolute bottom-2 right-2 z-1 cursor-pointer dark:text-white"
              onClick={() => setShow(true)}
            />
          ) : (
            <>
              <EyeIcon
                className="absolute bottom-2 right-2 z-1 cursor-pointer dark:text-white"
                onClick={() => setShow(false)}
              />
            </>
          )}
          {errors.password && touched.password && (
            <span className="text-red-500 p-2 block">{errors.password}</span>
          )}
        </div>
        <div className="w-full mt-5">
          <input type="button" value="Login" className={`${styles.button}`} />
        </div>
        <div className="w-full mt-8 text-center">
          <p className={`${styles.label}`}>Or join with</p>
        </div>
        <div className="flex items-center justify-center my-3 gap-2">
            <Github className="cursor-pointer dark:text-black text-white bg-green-600 dark:bg-white p-2 rounded-full w-10 h-10"/>
            <Facebook className="cursor-pointer dark:text-black text-white bg-green-600 dark:bg-white p-2 rounded-full w-10 h-10"/>
            <Twitter className="cursor-pointer dark:text-black text-white bg-green-600 dark:bg-white p-2 rounded-full !w-10 !h-10"/>
        </div>
      </form>
    </div>
  );
};

export default Login;
