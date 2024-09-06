import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import styled from "./ResetButton.module.css";

interface ResetButtonPropsInterface
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {}

export default function ResetButton({ ...props }: ResetButtonPropsInterface) {
  return <button className={styled.resetButton} {...props}></button>;
}
