import { View, Pressable, StyleSheet } from "react-native";
import { Formik } from "formik";

import Text from "./Text";
import FormikTextInput from "./FormikTextInput";
import theme from "../theme";

const loginStyles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    display: "flex",
    felxDirection: "column",
    padding: 12,
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

const Login = () => {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignIn onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default Login;
