import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import styled from "./InitButton.module.css";

interface InitButtonPropsInterface
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {}

export default function InitButton({ ...props }: InitButtonPropsInterface) {
  return <button className={styled.initButton} {...props}></button>;
}
