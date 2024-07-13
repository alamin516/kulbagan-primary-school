"use client";
import useTheme from "next-theme";
import { FC } from "react";

type Props = {
  classes: string;
};

const LightGradient: FC<Props> = ({ classes }) => {
  const { theme } = useTheme();
  return <>{theme === "light" && <div className={classes}></div>}</>;
};

export default LightGradient;
