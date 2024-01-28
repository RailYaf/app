import React from "react";
import { Form, Field } from "react-final-form";
import { useMutation, useQueryClient } from "react-query";
/* import { FORM_ERROR } from "final-form"; */
import { Box, FormHelperText, InputAdornment, Typography } from "@mui/material";

import { loginAuth } from "features/auth/auth-form";
import { Input, InputPassword, Icon, LoadingButton } from "shared/ui";

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Введите логин";
  }
  if (!values.password) {
    errors.password = "Введите пароль";
  }
  return errors;
};

export const AuthForm = () => {
  const client = useQueryClient();

  const { mutate: login } = useMutation({
    mutationFn: loginAuth,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: "auth" });
    },
  });

  const onSubmit = (values) => {
    login(values);
  };

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 480,
        height: 360,
      }}
    >
      <Typography
        sx={{
          fontSize: 32,
          fontWeight: 700,
          mb: "20px",
          color: (theme) => theme.palette.primary.main,
        }}
      >
        Авторизация
      </Typography>
      <Form onSubmit={onSubmit} validate={validate}>
        {({ handleSubmit, submitting, submitError }) => {
          return (
            <form onSubmit={handleSubmit}>
              {submitError && (
                <FormHelperText error sx={{ textAlign: "center", mb: "20px" }}>
                  {submitError}
                </FormHelperText>
              )}
              <Field name="username">
                {({ input, meta }) => (
                  <Input
                    input={input}
                    meta={meta}
                    label="Имя пользователя"
                    placeholder="Имя пользователя"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Icon
                            name="loginPerson"
                            fontSize="small"
                            sx={{ fill: "none" }}
                          />
                        </InputAdornment>
                      ),
                    }}
                    InputLabelProps={{ required: false }}
                    fullWidth
                    required
                  />
                )}
              </Field>
              <Field name="password">
                {({ input, meta }) => (
                  <InputPassword
                    input={input}
                    meta={meta}
                    label="Пароль"
                    placeholder="Пароль"
                    variant="outlined"
                    InputLabelProps={{ required: false }}
                    fullWidth
                    required
                  />
                )}
              </Field>
              <LoadingButton
                loading={submitting}
                variant="contained"
                type="submit"
                fullWidth
                sx={{ height: 55 }}
              >
                Вход
              </LoadingButton>
            </form>
          );
        }}
      </Form>
    </Box>
  );
};
