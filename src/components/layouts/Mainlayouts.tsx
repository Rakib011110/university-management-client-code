import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./SideBar";
import { logout } from "../../redux/Fetures/auth/authSlice";
import { useAppDispatch } from "../../redux/Fetures/hooks";
const { Header, Content, Footer } = Layout;

// const items: MenuProps["items"] = [
//   {
//     key: "Dasboard",
//     label: <NavLink to="/admin/dashboard"> Dasboard </NavLink>,
//   },

//   {
//     key: "User Management",
//     label: "User Management",
//     children: [
//       {
//         key: "Create Admin",
//         label: <NavLink to="/admin/create-admin">Create Admin </NavLink>,
//       },
//       {
//         key: "Create Faculty",
//         label: <NavLink to="/admin/create-faculty">Create Faculty </NavLink>,
//       },
//       {
//         key: "Create Student",
//         label: <NavLink to="/admin/create-student">Create Student </NavLink>,
//       },
//     ],
//   },
// ];

const Mainlayouts = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <Layout style={{ height: "100%" }}>
        <Sidebar />

        <Layout>
          <Header style={{ padding: 0 }}>
            <button onClick={handleLogout}> Logout</button>
          </Header>
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
              }}>
              {/* here is the outlets */}
              <Outlet />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default Mainlayouts;
