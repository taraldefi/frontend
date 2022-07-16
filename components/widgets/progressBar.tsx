import React, { useEffect } from "react";
interface Props {
  progress: number;
  color: string;
  showText: boolean;
}
function Progress({ progress, color, showText }: Props) {
  const [style, setStyle] = React.useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${progress}%`,
      backgroundColor: color,
    };

    setStyle(newStyle);
  }, 100);

  return (
    <div>
      {showText ? <span>Overall Progress: {progress}%</span> : ""}
      <div className="progress">
        <div className="progress-done" style={style}></div>
      </div>
    </div>
  );
}
export default Progress;
