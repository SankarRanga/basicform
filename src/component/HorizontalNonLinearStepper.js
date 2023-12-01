import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import { useDispatch } from 'react-redux';

const steps = ['Basic', 'Addresss', 'Preview and Submit'];

export default function HorizontalNonLinearStepper({ children, step }) {
  const [activeStep, setActiveStep] = React.useState( 0);
  const [completed, setCompleted] = React.useState({});
  const dispatch = useDispatch();

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = (activeStep) => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
  };

  React.useEffect(() => {
    if (activeStep !== step) {
      handleComplete(activeStep || 0);
      dispatch({ type: "ACTIVE_STEP", data: activeStep });
    }
  }, [activeStep]);

  React.useEffect(() => {
    if (activeStep !== step) {
      handleComplete(step || 0);
      setActiveStep(step || 0);
    }
  }, [step]);


  return (
    <Box sx={{ width: '100%' }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[activeStep] }>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        <React.Fragment>
          {children}
        </React.Fragment>
      </div>
    </Box>
  );
}