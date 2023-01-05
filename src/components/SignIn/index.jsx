// import { View, Pressable, StyleSheet } from "react-native";
import { useNavigate } from "react-router-native";

// import { Formik } from "formik";

import * as yup from "yup";

// import Text from "./Text";
// import FormikTextInput from "./FormikTextInput";
// import theme from "../theme";
import Login from "./Login";

import { useSignIn } from "../../hooks/useSignIn";

// const loginStyles = StyleSheet.create({
//   container: {
//     backgroundColor: theme.colors.white,
//     display: "flex",
//     felxDirection: "column",
//     padding: 16,
//   },
//   button: {
//     backgroundColor: theme.colors.primary,
//     paddingVertical: 12,
//     alignItems: "center",
//     borderRadius: 4,
//   },
// });

// const onSubmit = (values) => {
// const onSubmit = async (values) => {
//   console.log("values ", values);
//   const { username, password } = values;
//   // const { signIn } = useSignIn();
//   console.log("values 2 ", values);
//   const [signIn] = useSignIn();
//   console.log("values 3 ", values);
//   const history = useHistory();

//   console.log("we are here!");
//   const { data } = await signIn({ username, password });
//   console.log("try data ", data);

//   history.push("/");

//   try {
//     console.log("we are here!");
//     const { data } = await signIn({ username, password });
//     console.log("try data ", data);

//     history.push("/");
//   } catch (e) {
//     console.log(e);
//   }
// };

// const initialValues = {
//   username: "",
//   password: "",
// };

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
      console.log(data);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  // return (
  //   <View style={loginStyles.container}>
  //     <FormikTextInput name="username" placeholder="username" />
  //     <FormikTextInput
  //       name="password"
  //       placeholder="password"
  //       secureTextEntry={true}
  //     />
  //     <Pressable style={loginStyles.button} onPress={onSubmit}>
  //       <Text color="white" fontSize="subheading" fontWeight="bold">
  //         Sign In
  //       </Text>
  //     </Pressable>
  //   </View>
  // );
  // return <Login onSubmit={onSubmit} />;

  return <Login onSubmit={onSubmit} validationSchema={validationSchema} />;
};

// const Login = ({ onSubmit }) => {
//   //  isValidating
//   return (
//     <Formik
//       initialValues={initialValues}
//       onSubmit={onSubmit}
//       validationSchema={validationSchema}
//     >
//       {({ handleSubmit }) => <SignIn onSubmit={handleSubmit} />}

//       {/* {({ handleSubmit }) => isValidating ?? <SignIn onSubmit={handleSubmit} />} */}
//     </Formik>
//   );
// };

// export default Login;
export default SignIn;
