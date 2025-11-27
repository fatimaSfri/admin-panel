import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface Content {
  question: string;
  answer: string;
  src: string;
}

const CustomQuestion: React.FC<Content> = ({ question, answer, src }) => {
  return (
    <Typography
      sx={{
        fontFamily:"NiramitBold",
        fontSize: { xs: "12px", sm: "14px", lg: "16px" },
        lineHeight: "100%",
        letterSpacing: "0px",
        textTransform: "capitalize",
        leadingTrim: "none",
        color: "#ABABAB",
        textAlign: "center",
      }}
    >
      {/* Have An Account?{" "}
            dont have an account?{" "} */}
      {question}{" "}
      <Link
        to={src}
        style={{
          fontFamily:"NiramitBold",
          color: "#1D8D94",
          textUnderlineOffset: "1px",
        }}
      >
        {answer}
        {/* Login
              register */}
      </Link>
    </Typography>
  );
};

export default CustomQuestion;
