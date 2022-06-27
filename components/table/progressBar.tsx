import React from "react";
interface Props {
  progress: number;
}
function ProgressBar({ progress }: Props) {
  const [style, setStyle] = React.useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${progress}%`,
    };

    setStyle(newStyle);
  }, 200);

  return (
    <div>
      <div className="progress">
        <div className="progress-done" style={style}></div>
      </div>
    </div>
  );
}
export default ProgressBar;
