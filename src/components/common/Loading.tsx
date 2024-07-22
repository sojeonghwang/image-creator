import styled from "./Loading.module.css";

function Loading() {
  return (
    <div className={styled.ldsEllipsis}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Loading;
