import { Box, InputAdornment } from "@mui/material";
import BigBox from "../BigBox";
import { GradientText } from "../dashboard/GradientText";
import StyledInput from "../../Use-everywhere/StyledInput";
import { SearchIcon } from "../dashboard/Icon";
import { CustomButton } from "../../Use-everywhere/CustomButton";
import ButtonTag from "./ButtonTag";
import QuestionBox from "./QuestionBox";

const FAQ = () => {

  return (
    <Box
      sx={{
        width: { xs: 11 / 12, lg: 12 / 12 },
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        flexGrow: 1,
        alignItems: "center",
        mt: "140px",
        mx: "auto",
      }}
    >
      <BigBox padding="59px 96px 64px" mb="54px">
        <Box mx="auto">
          <GradientText fontSizeLg="48px" fontSizeXs="28px">
            help center
          </GradientText>
        </Box>
        <Box
          display="flex"
          gap="20px"
          width="100%"
          alignItems="center"
          sx={{ flexDirection: { xs: "column", md: "row" } }}
        >
          <StyledInput
            sx={{ width: "100%" }}
            variantType="helpCenter"
            placeholder="Find Your Desired Question"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{ pl: "14px" }}>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <CustomButton
            label="Search"
            width="173px"
            mt={0}
            mb={0}
            customFontSize="24px"
            customHight={80}
          />
        </Box>

        <ButtonTag></ButtonTag>
      </BigBox>
      <QuestionBox></QuestionBox>
    </Box>
  )
};

export default FAQ;
