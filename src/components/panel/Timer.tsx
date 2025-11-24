// import  { useEffect, useRef, useState } from "react";
// import { Box, Typography } from "@mui/material";

// type Props = {
//   minutes: number;
//   size?: number;
//   strokeWidth?: number;
//   alarmLabel?: string;
//   onComplete?: () => void;
// };

// const clamp = (v: number, a = 0, b = 1) => Math.max(a, Math.min(b, v));

// export default function PaymentTimer({
//   minutes,
//   size = 240,
//   strokeWidth = 2,
//   alarmLabel,
//   onComplete,
// }: Props) {
//   const totalSeconds = Math.max(1, Math.floor(minutes * 60));
//   const [secondsLeft, setSecondsLeft] = useState(totalSeconds);

//   const rafRef = useRef<number | null>(null);
//   const lastTsRef = useRef<number | null>(null);
//   const runningRef = useRef(true);

//   useEffect(() => {
//     lastTsRef.current = performance.now();
//     runningRef.current = true;

//     const step = (ts: number) => {
//       if (!lastTsRef.current) lastTsRef.current = ts;
//       const dt = ts - lastTsRef.current;

//       if (dt >= 1000) {
//         const dec = Math.floor(dt / 1000);
//         setSecondsLeft((s) => {
//           const ns = Math.max(0, s - dec);
//           if (ns === 0 && s !== 0) {
//             if (onComplete) onComplete();
//             runningRef.current = false;
//           }
//           return ns;
//         });
//         lastTsRef.current = ts;
//       }

//       if (runningRef.current && secondsLeft > 0) {
//         rafRef.current = requestAnimationFrame(step);
//       }
//     };

//     rafRef.current = requestAnimationFrame(step);
//     return () => {
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//   }, []);

//   const minutesLeft = Math.floor(secondsLeft / 60);
//   const secondsRemainder = secondsLeft % 60;
//   const minutesStr = String(minutesLeft).padStart(2, "0");
//   const secondsStr = String(secondsRemainder).padStart(2, "0");

//   const cx = size / 2;
//   const cy = size / 2;
//   const radius = (size - strokeWidth) / 2 - 2;
//   const circumference = 2 * Math.PI * radius;

//   const progress = clamp((totalSeconds - secondsLeft) / totalSeconds, 0, 1);
//   const dashoffset = circumference * (1 - progress);

//   const angle = (progress * 360 - 90) * (Math.PI / 180);
//   const dotX = cx + Math.cos(angle) * radius;
//   const dotY = cy + Math.sin(angle) * radius;

//   return (
//     <Box sx={{ display: "inline-block" }}>
//       <div
//         style={{
//           width: size,
//           height: size,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           background: "#1C2433",
//           borderRadius: "14px",
//           position: "relative",
//         }}
//       >
//         <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
//           <circle
//             cx={cx}
//             cy={cy}
//             r={radius + 6}
//             fill="none"
//             stroke="rgba(255,255,255,0.05)"
//             strokeWidth={2}
//             style={{ filter: "blur(3px)", opacity: 0.6 }}
//           />

//           <circle
//             cx={cx}
//             cy={cy}
//             r={radius}
//             fill="none"
//             stroke="#293241"
//             strokeWidth={strokeWidth}
//             strokeLinecap="round"
//           />

//           <defs>
//     <linearGradient id="grad-teal" x1="0%" y1="0%" x2="100%" y2="100%">
//       <stop offset="40.61%" stopColor="#40A578" />
//       <stop offset="60.88%" stopColor="#2A3342" />
//     </linearGradient>
//   </defs>

//           <circle
//             cx={cx}
//             cy={cy}
//             r={radius}
//             fill="none"
//             stroke="url(#grad-teal)"
//             strokeWidth={strokeWidth}
//             strokeLinecap="round"
//             strokeDasharray={circumference}
//             strokeDashoffset={dashoffset}
//             transform={`rotate(-90 ${cx} ${cy})`}
//             style={{ transition: "stroke-dashoffset 0.25s linear" }}
//           />

//           <circle
//             cx={dotX}
//             cy={dotY}
//             r={8}
//             fill="#2DD69B"
//             style={{ filter: "drop-shadow(0 0 12px rgba(45,214,155,0.9))" }}
//           />

//           <circle cx={dotX} cy={dotY} r={16} fill="url(#dotGlow)" />
//         </svg>

//         <div
//           style={{
//             position: "absolute",
//             textAlign: "center",
//             userSelect: "none",
//           }}
//         >
//           <Typography sx={{ color: "#D6DEE9", fontSize: 13 }}>Time For Payment</Typography>

//           <Typography
//             sx={{
//               color: "#2DD69B",
//               fontSize: 36,
//               fontWeight: 700,
//               letterSpacing: 2,
//               mt: 0.8,
//             }}
//           >
//             {minutesStr} : {secondsStr}
//           </Typography>

//           {alarmLabel && (
//             <Typography sx={{ color: "#D6DEE9", fontSize: 13, mt: 0.6 }}>
//               🔔 {alarmLabel}
//             </Typography>
//           )}
//         </div>
//       </div>
//     </Box>
//   );
// }

// import { useEffect, useState } from "react";

// export default function FinalPerfectTimer({
//   minutes = 1,
//   size = 171,
//   strokeWidth = 1
// }) {
//   const total = minutes * 60;
//   const [left, setLeft] = useState(total);

//   const radius = (size - strokeWidth) / 2;
//   const cx = size / 2;
//   const cy = size / 2;

//   const progress = (total - left) / total;
//   const angle = progress * 360;

//   const startAngle = -90;
//   const endAngle = startAngle + angle;

//   const toXY = (a: number) => {
//     const rad = (a * Math.PI) / 180;
//     return [cx + radius * Math.cos(rad), cy + radius * Math.sin(rad)];
//   };

//   const [sx, sy] = toXY(startAngle);
//   const [ex, ey] = toXY(endAngle);

//   const largeArc = angle > 180 ? 1 : 0;

//   const path = `M ${sx} ${sy} A ${radius} ${radius} 0 ${largeArc} 1 ${ex} ${ey}`;

//   const [dx, dy] = toXY(endAngle);

//   // Timer
//   useEffect(() => {
//     if (left <= 0) return;
//     const id = setInterval(() => setLeft(s => Math.max(0, s - 1)), 1000);
//     return () => clearInterval(id);
//   }, [left]);

//   return (
//     <div
//       style={{
//         width: size,
//         height: size,
//         background: "#1C2433",
//         borderRadius: "20px",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         position: "relative"
//       }}
//     >
//       <svg width={size} height={size}>

//         {/* BACKGROUND CIRCLE */}
//         <circle
//           cx={cx}
//           cy={cy}
//           r={radius}
//           stroke="#2A3342"
//           strokeWidth={strokeWidth}
//           fill="none"
//         />

//         <defs>
//           {/* گرادینت کاملاً در امتداد مسیر */}
//           <linearGradient
//             id="arcGrad"
//             gradientUnits="userSpaceOnUse"
//             x1={sx}
//             y1={sy}
//             x2={ex}
//             y2={ey}
//           >
//             <stop offset="0%" stopColor="#2A3342" />
//             <stop offset="60%" stopColor="#2A6B55" />
//             <stop offset="100%" stopColor="#40A578" />
//           </linearGradient>

//           <radialGradient id="dotGlow">
//             <stop offset="0%" stopColor="rgba(64,165,120,1)" />
//             <stop offset="60%" stopColor="rgba(64,165,120,0.4)" />
//             <stop offset="100%" stopColor="rgba(64,165,120,0)" />
//           </radialGradient>
//         </defs>

//         {/* مسیر طی‌شده — تنها جایی که روشن می‌شود */}
//         {angle > 0 && (
//           <path
//             d={path}
//             stroke="url(#arcGrad)"
//             strokeWidth={strokeWidth}
//             fill="none"
//             strokeLinecap="round"
//           />
//         )}

//         {/* DOT */}
//         <circle
//           cx={dx}
//           cy={dy}
//           r={10}
//           fill="#40A578"
//           style={{ filter: "drop-shadow(0 0 14px rgba(64,165,120,1))" }}
//         />

//         {/* DOT GLOW */}
//         <circle cx={dx} cy={dy} r={28} fill="url(#dotGlow)" />
//       </svg>

//       {/* CENTER TEXT */}
//       <div
//         style={{
//           position: "absolute",
//           textAlign: "center",
//           color: "#D6DEE9",
//           userSelect: "none"
//         }}
//       >
//         <div style={{ fontSize: 13 }}>Time For Payment</div>
//         <div
//           style={{
//             fontSize: 36,
//             fontWeight: 700,
//             color: "#2DD69B",
//             letterSpacing: 2,
//             marginTop: 8
//           }}
//         >
//           {String(Math.floor(left / 60)).padStart(2, "0")} :
//           {String(left % 60).padStart(2, "0")}
//         </div>
//       </div>
//     </div>
//   );
// }

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
