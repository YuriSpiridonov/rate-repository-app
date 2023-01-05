import { useNavigate } from "react-router-native";
import Login from "./Login";
import { useSignIn } from "../../hooks/useSignIn";

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const data = await signIn({ username, password });
      console.log(data.authenticate.accessToken);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return <Login onSubmit={onSubmit} />;
};

export default SignIn;
