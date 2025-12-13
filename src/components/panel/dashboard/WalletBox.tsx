import { Box, Button, Typography, styled } from "@mui/material";
import React, { useState } from "react";
import { Diamond } from "./Icon";
import WithdrawModal from "./WithdrawModal";

interface WalletBoxProps {
  padding?: string;
  showButton?: boolean;
  amount?: string;
  title?: string;
  icon?: React.ReactNode;
  logoColor?: string;
  logoShadow?: string;
}

/* ---------------- Root ---------------- */
const Root = styled(Box)<{ padding?: string }>(({ padding, theme }) => ({
  padding: padding ?? "22px 30px 23px 17px",
  display: "flex",
  backgroundColor: theme.palette.primary.main,
  borderRadius: "10px",
  color: "white",
  boxSizing: "border-box",
  justifyContent: "space-between",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    flexWrap: "wrap",
  },
}));

/* ---------------- Parent ---------------- */
const Parent = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "16px",
  boxSizing: "border-box",
}));

/* ---------------- Logo ---------------- */
const LogoWrapper = styled(Box)<{ bgColor?: string; shadow?: string }>(
  ({ bgColor, shadow }) => ({
    minWidth: "67px",
    minHeight: "67px",
    width: "67px",
    height: "67px",
    backgroundColor: bgColor ?? "#40A578",
    boxShadow: shadow ?? "0px 4px 20px 0px #40A57880",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  })
);

/* ---------------- Text Column ---------------- */
const TextColumn = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "14px",
}));

const Title = styled(Typography)(() => ({
  fontFamily: "NiramitBold",
  fontSize: "18px",
  lineHeight: "100%",
  letterSpacing: "0",
  textTransform: "capitalize",
}));

const Amount = styled(Typography)(() => ({
  fontFamily: "NiramitBold",
  fontSize: "24px",
  lineHeight: "100%",
  letterSpacing: "0",
  textTransform: "capitalize",
  marginTop: "2px",
}));

/* ---------------- Button ---------------- */
const ButtonWrapper = styled(Box)(({ theme }) => ({
  paddingLeft: "91px",
  [theme.breakpoints.down("sm")]: {
    paddingLeft: 0,
    width: "100%",
    display: "flex",
    justifyContent: "end",
    marginTop: "16px",
  },
}));

const WithdrawButton = styled(Button)(() => ({
  maxWidth: "133px",
  minWidth: "133px",
  height: "51px",
  backgroundColor: "#40A578",
  borderRadius: "10px",
  color: "white",
  fontFamily: "NiramitBold",
  fontSize: "16px",
  lineHeight: "100%",
  letterSpacing: "0",
  textTransform: "capitalize",
}));

/* ---------------- Component ---------------- */
const WalletBox: React.FC<WalletBoxProps> = ({
  padding,
  showButton = true,
  amount = "320 USDT",
  title = "your Wallet balance",
  icon,
  logoColor = "#40A578",
  logoShadow,
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Root padding={padding}>
        <Parent>
          <LogoWrapper bgColor={logoColor} shadow={logoShadow}>
            {icon ?? <DefaultDiamond />}
          </LogoWrapper>

          <TextColumn>
            <Title>{title}</Title>
            <Amount color={logoColor}>{amount}</Amount>
          </TextColumn>
        </Parent>
        {showButton && (
          <ButtonWrapper>
            <WithdrawButton onClick={handleOpen}>withdraw</WithdrawButton>
          </ButtonWrapper>
        )}
      </Root>
      <WithdrawModal open={open} onClose={handleClose} />
    </>
  );
};

/* ---------------- Default Icon ---------------- */
const DefaultDiamond = () => <Diamond />;

export default WalletBox;
