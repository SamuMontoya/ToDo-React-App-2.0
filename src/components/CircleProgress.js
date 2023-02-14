import React from "react";

const CircleProgress = (props) => {
  const style = {
    background: {
      fill: "#F3F3F3",
      stroke: "#E46471",
    },
    progress: {
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    text: {
      fontSize: "40px",
      fontWeight: "bold",
      fontFamily: "Chewy",
    },
  };
  
  const radius = 85;
  const dashArray = radius * Math.PI * 2;
  let dashOffset = 0
  if (props.totalTodos > 0){
    dashOffset = dashArray - (dashArray * props.completedTodos) / props.totalTodos;
  }
  

  return (
    <div className="circle-progress">
      <svg
        width={props.circleWidth}
        height={props.ciercleWidth}
        viewBox={`0 0 ${props.circleWidth} ${props.circleWidth}`}
      >
        <defs>
          <linearGradient id="gradient">
            <stop offset="10%" stopColor="#309398" />
            <stop offset="50%" stopColor="#49B1B6" />
            <stop offset="100%" stopColor="#71D1D6" />
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
        <text x="50%" y="35%" dy="0.3em" textAnchor="middle" style={style.text} fill="#0D253F">✓</text>
        <text x="50%" y="60%" dy="0.3em" textAnchor="middle" style={style.text} fill="#0D253F">
          {props.completedTodos}/{props.totalTodos}
        </text>
      </svg>
    </div>
  );
};

export { CircleProgress };
