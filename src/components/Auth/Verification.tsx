import { styles } from "@/styles/style";
import { ShieldCheck } from "lucide-react";
import React, { useRef, useState } from "react";

type Props = {
  setRoute: (route: string) => void;
};

type VerifyNumber = {
  "0": string;
  "1": string;
  "2": string;
  "3": string;
};

const Verification: React.FC<Props> = ({ setRoute }) => {
  const [invalidError, setInvalidError] = useState(false);

  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const [verifyNumber, setVerifyNumber] = useState<VerifyNumber>({
    0: "",
    1: "",
    2: "",
    3: "",
  });

  const verificationHandler = async () => {
    setInvalidError(true);
  };

  const handleInputChange = (index: number, value: string) => {
    setInvalidError(false);
    const newVerifyNumber = { ...verifyNumber, [index]: value };
    setVerifyNumber(newVerifyNumber);
    if (value === "" && index > 0) {
      inputRefs[index - 1].current?.focus();
    } else if (value.length === 1 && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  return (
    <div className="p-4">
      <h1 className={`${styles.title}`}>Verify Your Account</h1>
      <div className="w-full flex items-center justify-center mt-3">
        <div className="w-[80px] h-[80px] rounded-full bg-blue-500 flex items-center justify-center">
          <ShieldCheck className="text-white h-10 w-10" />
        </div>
      </div>
      <br />
      <br />
      <div className="w-full mx-auto flex items-center justify-center gap-1">
        {Object.keys(verifyNumber).map((key, index) => {
          return (
            <input
              type="text"
              key={key}
              ref={inputRefs[index]}
              className={`w-[55px] h-[55px] bg-transparent border-[3px] rounded-[10px] flex items-center text-center text-black justify-center dark:text-white text-[18px] font-Poppins outline-none ${
                invalidError
                  ? "shake border-red-500"
                  : "dark:border-white border-green-500"
              }`}
              placeholder=""
              maxLength={1}
              value={verifyNumber[key as keyof VerifyNumber]}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
          );
        })}
      </div>
      <br />
      <br />
      <button
        onClick={verificationHandler}
        className={`flex flex-row justify-center items-center px-6 rounded-md bg-green-600 text-white min-h-[45px] w-full text-base font-Poppins font-semibold cursor-pointer`}
      >
        Verify OTP
      </button>
      <br />
      <div className="w-full mt-8 text-center">
        <p className={`${styles.label}`}>
          Go back to sign in?{" "}
          <span
            className="text-green-500 cursor-pointer"
            onClick={() => setRoute("Login")}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Verification;
