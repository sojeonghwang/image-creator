import type { Metadata, Viewport } from "next";
import "./globals.css";
import Title from "@/components/Title";
import Toast from "@/containers/alert/Toast";
import sytled from "./page.module.css";
import SWRConfigContext from "@/context/SWRConfigContext";

export const metadata: Metadata = {
  title: "이미지 생성기",
  description: "일러스트 이미지 생성기 사이트 입니다.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SWRConfigContext>
          <>
            <Title />
            <div className={sytled.content}>{children}</div>
          </>
          <Toast />
        </SWRConfigContext>
      </body>
    </html>
  );
}
