"use client";
import { useEffect, useState } from "react";
import styled from "./toast.module.css";
import alertStore from "@/hooks/store/alert";

function Toast() {
  const { toastMessage, setToastMessage } = alertStore();

  useEffect(
    function hideToastMessage() {
      if (!!toastMessage) {
        const hideToastTimeout = setTimeout(() => {
          setToastMessage(null);
          clearTimeout(hideToastTimeout);
        }, 2000);
      }
    },
    [toastMessage]
  );

  if (!toastMessage) {
    return <></>;
  }
  return (
    <div className={styled.wrap}>
      <div className={styled.inner}>{toastMessage}</div>
    </div>
  );
}

export default Toast;
