import React, { useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./interface/models";





export const Progress_bar = () => {



  const allDetails = useSelector((state: any) => {
    return state.ProgressBarflag
  })

  const step_1 = allDetails.ProgressbarFlag1 ? 20 : 0;
  const step_2 = allDetails.ProgressbarFlag2 ? 20 : 0;
  const step_3 = allDetails.ProgressbarFlag3 ? 20 : 0;
  const step_4 = allDetails.ProgressbarFlag4 ? 20 : 0;
  const step_5 = allDetails.ProgressbarFlag5 ? 20 : 0;

  const finalData = step_1+step_2+step_3+step_4+step_5  


  return <ProgressBar className="pro" completed={finalData} />
};