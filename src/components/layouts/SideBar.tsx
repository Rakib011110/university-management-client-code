import { Layout, Menu } from "antd";

const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};

import { sideBarItemsGenarator } from "../../utilis/sidebarItemsGenarator";
import { AdminPath } from "../../routes/admin.routes";
import { facultyPath } from "../../routes/Faculty.routes";
import { studentPaths } from "../../routes/student.routes";
const Sidebar = () => {
  const role = "student";
  let sideBarItems;
  switch (role) {
    case userRole.ADMIN:
      sideBarItems = sideBarItemsGenarator(AdminPath, userRole.ADMIN);

      break;
    case userRole.FACULTY:
      sideBarItems = sideBarItemsGenarator(facultyPath, userRole.FACULTY);

      break;
    case userRole.STUDENT:
      sideBarItems = sideBarItemsGenarator(studentPaths, userRole.STUDENT);

      break;

    default:
      break;
  }

  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div
        style={{
          color: "white",
          textAlign: "center",
          height: "3rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <h1> PH UNIVERSITY </h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sideBarItems}
      />
    </Sider>
  );
};

export default Sidebar;
