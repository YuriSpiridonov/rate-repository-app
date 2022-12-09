import { View, Pressable, StyleSheet } from "react-native";
import { Formik } from "formik";

import * as yup from "yup";

import Text from "./Text";
import FormikTextInput from "./FormikTextInput";
import theme from "../theme";

const loginStyles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    display: "flex",
    felxDirection: "column",
    padding: 16,
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 4,
  },
});

const onSubmit = (values) => {
  console.log(values);
};

const initialValues = {
  username: "",
  password: "",
};

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const SignIn = ({ onSubmit }) => {
  return (
    <View style={loginStyles.container}>
      <FormikTextInput name="username" placeholder="username" />
      <FormikTextInput
        name="password"
        placeholder="password"
        secureTextEntry={true}
      />
      <Pressable style={loginStyles.button} onPress={onSubmit}>
        <Text color="white" fontSize="subheading" fontWeight="bold">
          Sign In
        </Text>
      </Pressable>
    </View>
  );
};

const Login = ({ isValidating }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => isValidating ?? <SignIn onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default Login;
