import ExchangeBox from "./ExchangeBox"
import Confirm from "./Confirm"
import TetherToPm from "./TetherToPm"

export const renderStepContent = (step: number, { goToStep }: { goToStep: (step: number) => void }) => {
  switch (step) {
    case 0: return <ExchangeBox goToStep={goToStep} />;
    case 1: return <Confirm goToStep={goToStep} />;
    case 2: return <TetherToPm goToStep={goToStep} />;
  }
};