import { useEffect, useMemo } from "react";
import { Card, CardContent } from "@mui/material";
import { QRCodeCanvas } from "qrcode.react";

interface QrStaticDisplayProps {
  onGenerate?: (value: string) => void;
}

export default function QrStaticDisplay({ onGenerate }: QrStaticDisplayProps) {
  
  const generateRandomHash = (length: number) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  };

  const qrValue = useMemo(() => generateRandomHash(26), []);

  useEffect(() => {
    if (onGenerate) {
      onGenerate(qrValue);
    }
  }, [qrValue, onGenerate]);

  return (
    <Card sx={{ p: 0, m: 0, background: "transparent", boxShadow: "none", width: "191px", height: "191px" }}>
      <CardContent sx={{ background: "transparent", p: 0 }}>
        <QRCodeCanvas
          value={qrValue}
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


