import { useParams, useNavigate, Outlet, useLocation } from "react-router-dom";
import ExchangeSteps from "./Stepper";
import ParentForAll from "../Use-everywhere/ParentForAll";
import RenderStepContent from "./RenderStepContent";


const Home = () => {
  const { step = "0" } = useParams();
  const activeStep = parseInt(step, 10);
  const navigate = useNavigate();
  const location = useLocation();

  const hasChildRoute = location.pathname.split("/").length > 4;

  if (activeStep < 0 || activeStep > 2) {
    navigate("/home/step/0", { replace: true });
  }


  return (
    <ParentForAll gap="35px">
      <ExchangeSteps activeStep={activeStep} />
      {/* <RenderStepContent
        step={activeStep}
        goToStep={(num) => navigate(`/home/step/${num}`)}
      /> */}

        {!hasChildRoute && (
        <RenderStepContent
          step={activeStep}
          goToStep={(num) => navigate(`/home/step/${num}`)}
        />
      )}
      
      <Outlet/>
    </ParentForAll>
  );
};

export default Home;
