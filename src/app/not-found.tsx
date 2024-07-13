import Header from "@/components/common/Header";
import LightGradient from "@/utils/LightGradient";
import Link from "next/link";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <>
      <Header />
      <div className="w-full ">
        <LightGradient
          classes={
            "absolute top-[80px] h-[80vh] w-full bg-gradient-to-b from-green-100 via-[#f3ecec] to-white -z-10"
          }
        />

        <div className="w-full h-[80vh] flex flex-col space-x-3 items-center justify-center">
          <h2 className="text-[45px] text-black dark:text-white font-Josefin mb-6">
            Not Found
          </h2>
          <p className="text-xl mb-5">Could not find requested resource</p>
          <Link
            className="bg-green-500 text-white px-5 py-1 rounded-md"
            href="/"
          >
            Return Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
