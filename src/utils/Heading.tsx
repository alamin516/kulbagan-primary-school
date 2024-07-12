import { FC } from "react";

interface HeadingProps {
  title: string;
  description: string;
  keywords: string;
}

const Heading: FC<HeadingProps> = ({ title, description, keywords }) => {
  return (
    <>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </>
  );
};


export default Heading;