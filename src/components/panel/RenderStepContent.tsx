import ExchangeBox from "./ExchangeBox"
import Confirm from "./Confirm"
import TetherToPm from "./TetherToPm"
import PmToTether from "./PmToTether";
import { useSelector } from "react-redux";
import type { AppRootState } from "../../store/Store";


interface StepContentProps {
  step: number;
  goToStep: (step: number) => void;
}

const RenderStepContent = ({ step, goToStep }: StepContentProps) => {
  const exchangeData = useSelector((state:AppRootState) => state.exchange.data);


  if (step === 0) return <ExchangeBox goToStep={goToStep} />;
  if (step === 1) return <Confirm goToStep={goToStep} />;

  
  if (step === 2) {
   
    if (exchangeData?.fromCurrency.value === "USDT") {
      return <TetherToPm />;
    }
    
    if (exchangeData?.fromCurrency.value === "Perfect Money") {
      return <PmToTether />;
    }

    return (
      <></>
    );
  }

  
  return null;
};

export default RenderStepContent;