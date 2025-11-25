import { useEffect, useState } from "react";
import { Box, Typography, SvgIcon } from "@mui/material";
import bell from "../../assets/img/bell.svg";

export default function FinalPerfectTimer({
  minutes = 1,
  size = 171,
}: {
  minutes?: number;
  size?: number;
}) {
  const total = minutes * 60;
  const [left, setLeft] = useState(total);
  // (size - strokeWidth)
  const radius = (size - 1) / 2;
  const cx = size / 2;
  const cy = size / 2;
  const progress = (total - left) / total;
  const angle = progress * 360;
  const startAngle = -90;
  const endAngle = startAngle + angle;

  const toXY = (a: number) => {
    const rad = (a * Math.PI) / 180;
    return [cx + radius * Math.cos(rad), cy + radius * Math.sin(rad)];
  };

  const [sx, sy] = toXY(startAngle);
  const [ex, ey] = toXY(endAngle);
  const [dx, dy] = toXY(endAngle);
  const largeArc = angle > 180 ? 1 : 0;

  const path = `M ${sx} ${sy} A ${radius} ${radius} 0 ${largeArc} 1 ${ex} ${ey}`;

  // Timer logic
  useEffect(() => {
    if (left <= 0) return;
    const id = setInterval(() => setLeft((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(id);
  }, [left]);

  const formatTime = () => {
    const m = String(Math.floor(left / 60)).padStart(2, "0");
    const s = String(left % 60).padStart(2, "0");
    return `${m} : ${s}`;
  };
  return (
    <Box
      sx={{
        width: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <SvgIcon
        viewBox={`0 0 ${size} ${size}`}
        sx={{
          width: size,
          height: size,
          position: "absolute",
          zIndex: 2,
          overflow: "visible !important",
        }}
      >
        {/* Background circle */}
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          stroke="#414E63"
          strokeWidth={1}
          fill="none"
        />

        {/* Gradient definitions */}
        <defs>
          <linearGradient
            id="arcGrad"
            x1={sx}
            y1={sy}
            x2={ex}
            y2={ey}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#2A3342" />
            <stop offset="60%" stopColor="#2A6B55" />
            <stop offset="100%" stopColor="#40A578" />
          </linearGradient>

          <radialGradient id="dotGlow">
            <stop offset="0%" stopColor="rgba(64,165,120,1)" />
            <stop offset="60%" stopColor="rgba(64,165,120,0.4)" />
            <stop offset="100%" stopColor="rgba(64,165,120,0)" />
          </radialGradient>

          {/* FIXED SHADOW FILTER */}
          <filter
            id="dotShadow"
            filterUnits="userSpaceOnUse"
            x="-200%"
            y="-200%"
            width="400%"
            height="400%"
          >
            <feDropShadow
              dx="0"
              dy="4"
              stdDeviation="4"
              floodColor="#40A578"
              floodOpacity="1"
            />
          </filter>
        </defs>

        {/* Progress arc */}
        {angle > 0 && (
          <path
            d={path}
            stroke="url(#arcGrad)"
            strokeWidth="4px"
            fill="none"
            strokeLinecap="round"
          />
        )}

        {/* Moving dot with shadow */}
        <circle
          cx={dx}
          cy={dy}
          r={6.105}
          fill="#40A578"
          filter="url(#dotShadow)"
        />

        {/* Dot glow */}
        <circle cx={dx} cy={dy} fill="url(#dotGlow)" />
      </SvgIcon>

      {/* Center text */}
      <Box
        sx={{
          position: "absolute",
          textAlign: "center",
          color: "#D6DEE9",
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        <Typography
          variant="caption"
          sx={{ fontSize: "12px", fontFamily: "NiramitBold",color:"white" }}
        >
          Time For Payment
        </Typography>

        <Typography
          sx={{
            fontFamily: "NiramitBold",
            fontSize: "32px",
            lineHeight: "100%",
            letterSpacing: "6%",
            textTransform: "capitalize",
            color: "#2DD69B",
            mt: "12px",
            mb: "25px",
          }}
        >
          {formatTime()}
        </Typography>

        <Box sx={{
          display:"flex",
          gap:"1.95px",
          alignItems:"center",
          justifyContent:"center",
        }}>
         <Box
          component="img"
          src={bell}
          sx={{
            width: "13.74px",
            height: "13.74px",
            mt:"3.72px"
          }}
        />
        <Typography
          sx={{
            fontFamily: "NiramitBold",
            fontSize: "14px",
            lineHeight: "100%",
            letterSpacing: "0%",
            textTransform: "capitalize",
            color: "white",
          }}
        >
          15 : 30
        </Typography>
       
        </Box>
      </Box>
    </Box>
  );
}
