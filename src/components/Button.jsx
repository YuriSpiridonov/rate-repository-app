import {
  StyleSheet,
  // View,
  Pressable,
} from "react-native";

import Text from "./Text";
import theme from "../theme";

const buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 4,
  },
});

const Button = ({ value, onSubmit }) => {
  return (
    <Pressable style={buttonStyles.button} onPress={onSubmit}>
      <Text color="white" fontSize="subheading" fontWeight="bold">
        {value}
      </Text>
    </Pressable>
  );
};

export default Button;
