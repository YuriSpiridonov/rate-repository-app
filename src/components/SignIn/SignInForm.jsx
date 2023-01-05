import { StyleSheet, View, Pressable } from "react-native";
import FormikTextInput from "../FormikTextInput";

import Text from "../Text";
import theme from "../../theme";

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

const SignInForm = ({ onSubmit }) => {
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

export default SignInForm;
