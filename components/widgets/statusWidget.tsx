import React, { useEffect, useState } from "react";
interface Props {
  type: string;
}
const colorHash = {
  active: {
    bgcolor: "#D1FAE5",
    color: "#059669",
  },
  change: {
    bgcolor: "#FEE2E2",
    color: "#EF4444",
  },
  review: {
    bgcolor: "#FEF3C7",
    color: "#F59E0B",
  },
  completed: {
    bgcolor: "#10B981",
    color: "#ECFDF5",
  },
};
function StatusWidget({ type }: Props) {
  const [style, setStyle] = useState({});
  useEffect(() => {
    switch (type.toLowerCase()) {
      case "change":
        setStyle({
          opacity: 1,
          backgroundColor: colorHash.change.bgcolor,
          color: colorHash.change.color,
        });
        break;
      case "review":
        setStyle({
          opacity: 1,
          backgroundColor: colorHash.review.bgcolor,
          color: colorHash.review.color,
        });
        break;
      case "completed":
        setStyle({
          opacity: 1,
          backgroundColor: colorHash.completed.bgcolor,
          color: colorHash.completed.color,
        });
        break;

      default:
        setStyle({
          opacity: 1,
          backgroundColor: colorHash.active.bgcolor,
          color: colorHash.active.color,
        });
        break;
    }
  }, [type]);

  return (
    <div>
      <div className="tableStatus" style={style}>
        {type}
      </div>
    </div>
  );
}
export default StatusWidget;
