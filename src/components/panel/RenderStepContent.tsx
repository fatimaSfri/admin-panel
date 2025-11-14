import T from "./T"
import Step2 from "./step2"
import Step3 from "./Step3"

export const renderStepContent = (step: number, { goToStep }: { goToStep: (step: number) => void }) => {
  switch (step) {
    case 0: return <T goToStep={goToStep} />;
    case 1: return <Step2 goToStep={goToStep} />;
    case 2: return <Step3 goToStep={goToStep} />;
  }
};