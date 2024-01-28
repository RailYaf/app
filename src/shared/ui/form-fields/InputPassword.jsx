import React from "react";
import { IconButton, InputAdornment } from "@mui/material";
import { Icon, Input } from "shared/ui";

export const InputPassword = ({ InputProps, ...props }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Input
      {...props}
      type={showPassword ? "text" : "password"}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Icon name="loginLock" fontSize="small" sx={{ fill: "none" }} />
          </InputAdornment>
        ),
        endAdornment: (
          <IconButton
            aria-label="toggle password visibility"
            onClick={toggleShowPassword}
          >
            {showPassword ? (
              <Icon
                name="passwordView"
                fontSize="small"
                sx={{ fill: "none" }}
              />
            ) : (
              <Icon
                name="passwordNotView"
                fontSize="small"
                sx={{ fill: "none" }}
              />
            )}
          </IconButton>
        ),
        ...InputProps,
      }}
    />
  );
};
