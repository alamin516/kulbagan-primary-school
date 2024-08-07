"use client";
import { styles } from "@/styles/style";
import { useFormik } from "formik";
import { EyeIcon, EyeOffIcon, Github } from "lucide-react";
import { FC, useState } from "react";
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

const Login: FC<Props> = ({ setRoute }) => {
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
    <div className="p-4">
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
          className={`${
            errors.email && touched.email && "border-red-500"
          } w-full text-black dark:text-white bg-transparent border rounded !h-[40px] px-2 outline-none mt-[10px] font-Poppins`}
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
            } w-full text-black dark:text-white bg-transparent border rounded !h-[40px] px-2 outline-none mt-[10px] font-Poppins`}
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
          <input
            type="submit"
            value="Login"
            className={`flex flex-row justify-center items-center px-6 rounded-md bg-green-600 text-white min-h-[45px] w-full text-base font-Poppins font-semibold cursor-pointer`}
          />
        </div>
        <div className="w-full mt-8 text-center">
          <p className={`${styles.label}`}>Or join with</p>
        </div>
        <div className="flex items-center justify-center my-3 gap-2">
          <Github className="cursor-pointer dark:text-black text-white bg-green-600 dark:bg-white p-2 rounded-full w-10 h-10" />
        </div>
        <div className="w-full mt-8 text-center">
          <p className={`${styles.label}`}>
            Not have an account?{" "}
            <span
              className="text-green-500 cursor-pointer"
              onClick={() => setRoute("Sign-Up")}
            >
              Sign Up
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
