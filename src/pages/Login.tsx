import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/Fetures/auth/authApi";
import { useAppDispatch } from "../redux/Fetures/hooks";
import { TUser, setUser } from "../redux/Fetures/auth/authSlice";
import { veriFytoken } from "../utilis/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../form/PHForm";
import PHInput from "../form/PHInput";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // const { register, handleSubmit } = useForm({
  //   defaultValues: {
  //     userId: "A-0001",
  //     password: "sadiya11",
  //   },
  // });

  const [login, { data }] = useLoginMutation();
  console.log("Data=>", data);

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const toastId = toast.loading("Logging in ");

    try {
      const userInfo = {
        id: data.userId,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();

      const user = veriFytoken(res.data.accessToken) as TUser;
      console.log(user);
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Logged in", { id: toastId, duration: 2000 });
      navigate(`/${user.role}/dashboard`);
      console.log(res);
    } catch (error) {
      toast.error("Something Went Wrong");
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <PHForm onSubmit={onSubmit}>
        <PHInput type={"text"} name={"userId"} label="ID" />
        <PHInput type={"password"} name={"password"} label="password" />
        <Button htmlType="submit">Login</Button>
      </PHForm>
    </Row>
  );
};

export default Login;
