import React from "react";
import { Button as MuiButton } from "@mui/material";
import { LoadingButton as MuiLoadingButton } from "@mui/lab";

export const Button = (props) => {
  return <MuiButton {...props} />;
};

export const LoadingButton = (props) => {
  return <MuiLoadingButton {...props} />;
};
