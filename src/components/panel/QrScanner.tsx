import { Card, CardContent } from "@mui/material";
import { QRCodeCanvas } from "qrcode.react";

export default function QrStaticDisplay() {
  const randomNumber = Math.floor(Math.random() * 1000000000).toString();

  return (
    <Card sx={{ p: 0, m: 0, background: "transparent", boxShadow: "none", width:"191px",height:"191px"}}>
      <CardContent sx={{ background: "transparent", p: 0 }}>
        <QRCodeCanvas
          value={randomNumber}
          size={191}
          bgColor="transparent"   
          fgColor="#ABABAB"
          level="H"
          includeMargin={false}   
        />
      </CardContent>
    </Card>
  );
}
