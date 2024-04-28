const CircularProgress = ({ progress, color }) => {
  const radius = 46;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg height="100" width="100">
      <circle
        stroke="#E9E9E9"
        strokeWidth="2"
        fill="transparent"
        r={radius}
        cx="50"
        cy="50"
      />
      <circle
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill="transparent"
        r={radius}
        cx="50"
        cy="50"
        style={{
          strokeDasharray: circumference,
          strokeDashoffset: offset,
          transition: "stroke-dashoffset 0.3s ease",
        }}
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="20"
        fill={"#434343"}
      >
        {`${progress}%`}
      </text>
    </svg>
  );
};

export default CircularProgress;
