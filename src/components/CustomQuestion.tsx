import { Typography , Link } from "@mui/material"

interface Content {
question:string;
answer:string;
src: string;
}

const CustomQuestion: React.FC<Content> = ({
    question,
    answer,
    src
}) => {
  return (
          <Typography
            sx={{
              fontFamily: "Niramit, sans-serif",
              fontWeight: 700,
              fontStyle: "normal",
              fontSize: { xs: "12px", sm: "14px", lg: "16px" },
              lineHeight: "100%",
              letterSpacing: "0%",
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
              href={src}
              underline="hover"
              sx={{
                fontWeight: 700,
                color: "#1D8D94",
                cursor: "pointer",
              }}
            >
             {answer}
               {/* Login
              register */}
            </Link>
          </Typography>

  )
}

export default CustomQuestion