import { PropsWithChildren } from "react";
import styled from "@/components/box/RoundBox.module.css";

interface RoundBoxProps extends PropsWithChildren {
  bgColor?: string;
  marign?: string;
}

function RoundBox({ bgColor, marign, children, ...props }: RoundBoxProps) {
  return (
    <div
      className={styled.wrap}
      style={{
        background: bgColor ?? "#FFF",
        margin: marign ?? "0",
      }}
      {...props}
    >
      {children}
    </div>
  );
}

export default RoundBox;
