import { FC, useState } from "react";
import Heading from "../utils/Heading";
import Header from "@/components/common/Header";
import Hero from "@/components/client/Root/Hero";

interface Props {}

const Page: FC<Props> = (props) => {
  
  return (
    <div>
      <Heading
        title="Dot Learning"
        description="This is a learning platform for beginner"
        keywords="Programming, React, JavaScript"
      />
      <Header/>
      <Hero/>
    </div>
  );
};

export default Page;
