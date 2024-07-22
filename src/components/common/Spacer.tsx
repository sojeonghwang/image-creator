interface SpacerProps {
  height: number;
}

function Spacer({ height }: SpacerProps) {
  return (
    <div
      style={{
        height: `${height}px`,
      }}
    ></div>
  );
}
export default Spacer;
