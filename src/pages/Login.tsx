import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/Fetures/auth/authApi";
import { useAppDispatch } from "../redux/Fetures/hooks";
import { setUser } from "../redux/Fetures/auth/authSlice";
import { veriFytoken } from "../utilis/verifyToken";

const Login = () => {
  const dispatch = useAppDispatch();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      userId: "A-0001",
      password: "sadiya11",
    },
  });

  const [login, { data, error }] = useLoginMutation();
  console.log("Data=>", data);
  console.log("error=>", error);

  const onSubmit = async (data) => {
    const userInfo = {
      id: data.userId,
      password: data.password,
    };
    const res = await login(userInfo).unwrap();

    const user = veriFytoken(res.data.accessToken);
    console.log(user);
    dispatch(setUser({ user: user, token: res.data.accessToken }));
    console.log(res);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="id">ID: </label>
          <input type="text" id="id" {...register("userId")} />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input type="text" id="password" {...register("password")} />
        </div>
        <Button htmlType="submit">Login</Button>
      </form>
    </div>
  );
};

export default Login;
