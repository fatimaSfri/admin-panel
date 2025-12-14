import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { type AccordionProps } from "@mui/material/Accordion";
import Polygon from "../../../assets/img/Polygon.svg";
import Bigarrow from "../../../assets/img/Bigarrow.svg";
import { AppTypographyBold } from "../../Use-everywhere/AppTypography ";

const StyledAccordion = styled(Accordion)<AccordionProps>(() => ({
  background: "transparent",
  border: "1px solid #2E3E59",
  boxShadow: "none",
  color: "white",
  borderRadius: "30px",
  overflow: "hidden", 
  margin: "0", 
  "&:before": {
    display: "none",
  },
  padding: "12px 11px 11px 24px",
  "&:not(.Mui-expanded)": {
    borderRadius: "30px",
  },

  "&.Mui-expanded": {
    margin: "0",
    borderRadius: "30px",
  },
}));

const StyledAccordionSummary = styled(AccordionSummary)(() => ({
  fontFamily: "",

  minHeight: 72,
  "& .MuiAccordionSummary-content": {
    alignItems: "center",
  },
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
  },
}));

const StyledAccordionDetails = styled(AccordionDetails)(() => ({
  padding: "11px 16px 21px 52px"
}));

const faqData = [
  {
    id: "panel1",
    question: "How To Complete Identity Verification For A Personal Account?",
    answer:
      "You Can Access The Identity Verification From [Account] – [Identification], Or Click [Verify] / [Get Verified] From The Homepage Banners. You Can Check Your Current Verification Level On The Page, Which Determines The Trading Limit Of Your Account. To Increase Your Limit, Please Complete The Respective Identity Verification Level.",
  },
  {
    id: "panel2",
    question:
      "How To Complete Identity Verification For A Personal Account On The Pmusdt Website?",
    answer:
      "You Can Access The Identity Verification From [Account] – [Identification], Or Click [Verify] / [Get Verified] From The Homepage Banners. You Can Check Your Current Verification Level On The Page, Which Determines The Trading Limit Of Your Account. To Increase Your Limit, Please Complete The Respective Identity Verification Level.",
  },
  {
    id: "panel3",
    question: "How To Complete Identity Verification For A Business Account?",
    answer:
      "You Can Access The Identity Verification From [Account] – [Identification], Or Click [Verify] / [Get Verified] From The Homepage Banners. You Can Check Your Current Verification Level On The Page, Which Determines The Trading Limit Of Your Account. To Increase Your Limit, Please Complete The Respective Identity Verification Level.",
  },
   {
    id: "panel4",
    question: "How To Complete Identity Verification For A Business Account?",
    answer:
      "You Can Access The Identity Verification From [Account] – [Identification], Or Click [Verify] / [Get Verified] From The Homepage Banners. You Can Check Your Current Verification Level On The Page, Which Determines The Trading Limit Of Your Account. To Increase Your Limit, Please Complete The Respective Identity Verification Level.",
  },
   {
    id: "panel5",
    question: "How To Complete Identity Verification For A Business Account?",
    answer:
      "You Can Access The Identity Verification From [Account] – [Identification], Or Click [Verify] / [Get Verified] From The Homepage Banners. You Can Check Your Current Verification Level On The Page, Which Determines The Trading Limit Of Your Account. To Increase Your Limit, Please Complete The Respective Identity Verification Level.",
  },
   {
    id: "panel6",
    question: "How To Complete Identity Verification For A Business Account?",
    answer:
      "You Can Access The Identity Verification From [Account] – [Identification], Or Click [Verify] / [Get Verified] From The Homepage Banners. You Can Check Your Current Verification Level On The Page, Which Determines The Trading Limit Of Your Account. To Increase Your Limit, Please Complete The Respective Identity Verification Level.",
  },
   {
    id: "panel7",
    question: "How To Complete Identity Verification For A Business Account?",
    answer:
      "You Can Access The Identity Verification From [Account] – [Identification], Or Click [Verify] / [Get Verified] From The Homepage Banners. You Can Check Your Current Verification Level On The Page, Which Determines The Trading Limit Of Your Account. To Increase Your Limit, Please Complete The Respective Identity Verification Level.",
  },
   {
    id: "panel8",
    question: "How To Complete Identity Verification For A Business Account?",
    answer:
      "You Can Access The Identity Verification From [Account] – [Identification], Or Click [Verify] / [Get Verified] From The Homepage Banners. You Can Check Your Current Verification Level On The Page, Which Determines The Trading Limit Of Your Account. To Increase Your Limit, Please Complete The Respective Identity Verification Level.",
  },

];

function QuestionBox() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box
      maxWidth="1140px"
      width="100%"
      mb="145px"
      display="flex"
      flexDirection="column"
      gap="26px"
    >
      {faqData.map((faq) => {
        const isOpen = expanded === faq.id;

        return (
          <StyledAccordion
            key={faq.id}
            expanded={isOpen}
            onChange={handleChange(faq.id)}
            disableGutters
          >
            <StyledAccordionSummary
              expandIcon={<Box component="img" src={Bigarrow} />}
            >
              <Box component="img" src={Polygon} sx={{ mr: "12px" }} />
              <Typography
                fontFamily="NiramitBold"
                sx={{ fontSize: { xs: "18px", md: "24px" } }}
              >
                {faq.question}
              </Typography>
            </StyledAccordionSummary>

            <StyledAccordionDetails>
              <AppTypographyBold size={16} sx={{ lineHeight: "32px" }}>
                {faq.answer}
              </AppTypographyBold>
            </StyledAccordionDetails>
          </StyledAccordion>
        );
      })}
    </Box>
  );
}

export default QuestionBox;
