import { Modal, Box, styled } from "@mui/material";
import React from "react";
import { AppTypographyBold } from "../../Use-everywhere/AppTypography ";
import { CloseIcon } from "./Icon";
import StyledInput from "../../Use-everywhere/StyledInput";
import { CustomButton } from "../../Use-everywhere/CustomButton";

interface WithdrawModalProps {
  open: boolean;
  onClose: () => void;
}

/* ---------------- Styled Components ---------------- */
const CenteredModal = styled(Modal)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const ModalContainer = styled(Box)(({ theme }) => ({
  maxWidth: "744px",
  borderRadius: "20px",
  backgroundColor: "#2A3342",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  gap: "41px",
  padding: "32px 58px 58px 59px",
  width: "52%",
  [theme.breakpoints.down("md")]: {
    padding: "32px 38px 38px 39px",
    width: "80%",
  },
}));

const ModalHeader = styled(Box)(() => ({
  borderBottom: "1px solid #364153",
  paddingBottom: "34px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "#ABABAB",
}));

const ModalBody = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
}));

/* ---------------- Component ---------------- */
const WithdrawModal: React.FC<WithdrawModalProps> = ({ open, onClose }) => {
  return (
    <CenteredModal open={open} onClose={onClose}>
      <ModalContainer>
        {/* Header */}
        <ModalHeader>
          <AppTypographyBold color="white" size={24}>
            withdraw
          </AppTypographyBold>
          <Box sx={{ cursor: "pointer" }} onClick={onClose}>
            <CloseIcon />
          </Box>
        </ModalHeader>

        {/* Body */}
        <ModalBody>
          <AppTypographyBold sx={{ mb: "9px" }}>
            your wallet address (tether TRC20)
          </AppTypographyBold>
          <StyledInput placeholder="address" />
          <CustomButton
            label="confirm"
            mt={0}
            mb={0}
            maxWidth="627px"
            width="100%"
          />
        </ModalBody>
      </ModalContainer>
    </CenteredModal>
  );
};

export default WithdrawModal;
