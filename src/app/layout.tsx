import type { Metadata } from "next";
import "./globals.css";
import Title from "@/components/Title";
import sytled from "./page.module.css";

export const metadata: Metadata = {
  title: "이미지 생성기",
  description: "일러스트 이미지 생성기 사이트 입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Title />
        <div className={sytled.content}>{children}</div>
      </body>
    </html>
  );
}
