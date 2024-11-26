import { Button } from "@/components/ui/button";
import React from "react";

const CTAButton = ({ text, onClickFn }: any) => {
  return <Button onClick={onClickFn}>{text}</Button>;
};

export default CTAButton;
