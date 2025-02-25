import { MobileStepper, Step } from "@mui/material";
import React from "react";

function Hero() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    return(
        <MobileStepper 
        variant="dots"
        steps={3}
        position="static"
        activeStep={activeStep}
        sx={{ maxWidth: 400, flexGrow: 1 }}>
            <Step>

            </Step>
        </MobileStepper>
    );
}

export default Hero;