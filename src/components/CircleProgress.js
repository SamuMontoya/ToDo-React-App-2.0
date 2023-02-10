import React from "react";

const CircleProgress = (props) => {
  const radius = 85;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * props.percentage) / 100;

  const style = {
    background: {
      fill: "none",
      stroke: "#ddd",
    },
    progress: {
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    text: {
      fontSize: "3rem",
      fontWeight: "bold",
    },
  };

  return (
    <div className="circle-progress">
      <svg
        width={props.circleWidth}
        height={props.ciercleWidth}
        viewBox={`0 0 ${props.circleWidth} ${props.circleWidth}`}
      >
        <defs>
          <linearGradient id="gradient">
            <stop offset="10%" stopColor="#6EB035" />
            <stop offset="50%" stopColor="#74C12D" />
            <stop offset="100%" stopColor="#8FDD53" />
          </linearGradient>
        </defs>
        <circle
          cx={props.circleWidth / 2}
          cy={props.circleWidth / 2}
          strokeWidth="15px"
          r={radius}
          style={style.background}
        />
        <circle
          cx={props.circleWidth / 2}
          cy={props.circleWidth / 2}
          strokeWidth="15px"
          r={radius}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
            ...style.progress,
          }}
          transform={`rotate(-90 ${props.circleWidth / 2} ${
            props.circleWidth / 2
          })`}
          stroke="url(#gradient)"
        />
        <text x="50%" y="60%" dy="0.3em" textAnchor="middle" style={style.text} fill="url(#gradient)">
          {props.percentage}/99
        </text>
        <text x="50%" y="35%" dy="0.3em" textAnchor="middle" style={style.text} >✅</text>
      </svg>
    </div>
  );
};

export { CircleProgress };
