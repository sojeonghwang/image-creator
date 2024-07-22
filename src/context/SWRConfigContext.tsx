"use client";

import { SWRConfig } from "swr";

interface Props {
  children: React.ReactNode;
}

export default function SWRConfigContext({ children }: Props) {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string, options) =>
          fetch(url, options).then((res) => res.json),
      }}
    >
      {children}
    </SWRConfig>
  );
}
