// import ParentForAll from "../ParentForAll"
// import Stepper from "./Stepper"
// import T from "./T"
// const Home = () => {
//   return (
//     <ParentForAll gap="35px">
//     <Stepper></Stepper>
//      {/* <Test></Test> */}
//      <T></T>
//     </ParentForAll>
//   )
// }

// export default Home



// Home.tsx
import { useParams, useNavigate } from 'react-router-dom';
import ExchangeSteps from './Stepper';
import { renderStepContent } from './RenderStepContent';
import ParentForAll from "../ParentForAll"

 const Home = () => {
  const { step = '0' } = useParams(); 
  const activeStep = parseInt(step, 10);
  const navigate = useNavigate();

  if (activeStep < 0 || activeStep > 2) {
    navigate('/home/step/0', { replace: true });
    return null;
  }

  return (
    <ParentForAll gap="35px">
      <ExchangeSteps activeStep={activeStep} />
        {renderStepContent(activeStep, {
        goToStep: (num) => navigate(`/home/step/${num}`)})}
    </ParentForAll>
  );
};

export default Home