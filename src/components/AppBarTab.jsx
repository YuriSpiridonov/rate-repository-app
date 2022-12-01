import { View, Pressable } from "react-native";
import Text from "./Text";

const AppBarTab = ({ tabName, style }) => {
  return (
    <View style={style}>
      <Pressable>
        <Text
          color="white"
          fontSize="subheading"
          fontWeight="bold"
          style={style}
        >
          {tabName}
        </Text>
      </Pressable>
    </View>
  );
};

export default AppBarTab;
