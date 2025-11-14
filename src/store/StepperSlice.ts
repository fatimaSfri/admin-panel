import { createSlice } from "@reduxjs/toolkit";

interface StepperState {
  activeStep: number;
}

const initialState: StepperState = {
  activeStep: 0,
};

createSlice({
    name:"stepper",
    initialState,
    reducers:{

    }
})