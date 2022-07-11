import React, { useEffect } from "react";
interface Props {
  progress: number;
  color: string;
  showText: boolean;
}
function Progress({ progress, color, showText }: Props) {
  const [style, setStyle] = React.useState({});

  useEffect(() => {
    console.log(color);
    document.documentElement.style.setProperty("--progress-color", color);
    console.log(
      "Color set -->",
      document.documentElement.style.getPropertyValue("--progress-color")
    );
  }, [color]);

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${progress}%`,
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
