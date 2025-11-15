import React from "react";
import { Box, Typography } from "@mui/material";

interface ExchangeStepsProps {
  activeStep?: number; 
}

const ExchangeSteps: React.FC<ExchangeStepsProps> = ({ activeStep = 0 }) => {
  const steps = ["Exchange", "Confirm", "Complete"];

  return (
    <Box
      sx={{
        maxWidth: "1140px",
        width:{xs:11/12 , lg:12/12},
        height: "99px",
        mx:"auto",
        borderRadius: "30px",
        backgroundColor: "rgba(250,250,250,0.025)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 4,
       boxSizing: "border-box",
       mt:"65px"
      }}
    >
      <Box
        sx={{
          maxWidth:"686px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        {steps.map((label, index) => {
          const isActive = index === activeStep;
          const isCompleted = index < activeStep;
          return (
            <React.Fragment key={index}>
            <Box sx={{
                display: "flex",
                alignItems: "center",
              }}>
              {/* Circle */}
              <Box
                sx={{
                  width: 26,
                  height: 26,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: isActive || isCompleted ? "#40A578" : "#596B89",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 14,
                  boxShadow: isActive ? "0px 4px 20px 0px #40A57880" : "none",
                  flexShrink: 0,
                }}
              >
                {index + 1}
              </Box>

              {/* Label */}
              <Typography
                sx={{
                  ml: 1.6,
                  fontSize: 14,
                  fontWeight: isActive ? 700 : 500,
                  color: isActive || isCompleted ? "#40A578" :  "#9aa3ab",
                  whiteSpace: "nowrap",
                }}
              >
                {label}
              </Typography>
              </Box>
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <Box
                  sx={{
                    height: "1px",
                    width: "100px",
                    backgroundColor: isCompleted
                      ? "#40A578"
                      : "#596B89",
                    boxShadow: isCompleted ? "0px 4px 12px 0px #40A57866" : "none",
                    borderRadius: 1,
                    zIndex: 0,
                  }}
                />
              )}
            </React.Fragment>
          );
        })}
      </Box>
    </Box>
  );
};

export default ExchangeSteps;
