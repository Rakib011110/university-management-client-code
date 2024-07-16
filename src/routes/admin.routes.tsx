import AdminDashBoard from "../pages/Admin/AdminDachBoard";
import CreateAdmin from "../pages/Admin/CreateAdmin";
import CreateStudents from "../pages/Admin/CreateStudents";
import CreateFaculty from "../pages/Admin/CreateFaculty";
import AcademicSemester from "../pages/Admin/academicManagement/AcademicSemester";
import CreateAcademicSemester from "../pages/Admin/academicManagement/CreateAcademicSemester";
import CreateAcademicFaculty from "../pages/Admin/academicManagement/CreateAcademicFaculty";
import AcademicFaculty from "../pages/Admin/academicManagement/AcademicFaculty";
import CreateAcademicDepartment from "../pages/Admin/academicManagement/CreateAcademicDepartment";
import AcademicDepartment from "../pages/Admin/academicManagement/AcademicDepartment";

// type TRoutes = {
//   path: string;
//   element: ReactNode;
// };
// type TSideBarItem = {
//   key: string;
//   label: ReactNode;
//   children?: TSideBarItem[];
// };

export const AdminPath = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashBoard />,
  },

  {
    name: "Academic Management",
    children: [
      {
        name: "Create A. Semester",
        path: "create-academic-semester",
        element: <CreateAcademicSemester />,
      },
      {
        name: "Academic Semester",
        path: "academic-semester",
        element: <AcademicSemester />,
      },
      {
        name: "Create A. Faculty",
        path: "create-academic-faculty",
        element: <CreateAcademicFaculty />,
      },
      {
        name: "Academic Faculty",
        path: "academic-faculty",
        element: <AcademicFaculty />,
      },
      {
        name: "Create A. Department",
        path: "create-academic-department",
        element: <CreateAcademicDepartment />,
      },
      {
        name: "Academic Department",
        path: "academic-department",
        element: <AcademicDepartment />,
      },
    ],
  },

  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudents />,
      },
    ],
  },
];

// export const adminSidebarItems = AdminPath.reduce(
//   (acc: TSideBarItem[], item) => {
//     if (item.path && item.element) {
//       acc.push({
//         key: item.name,
//         label: <NavLink to={`/admin/${item.path}`}> {item.name} </NavLink>,
//       });
//     }

//     if (item.children) {
//       acc.push({
//         key: item.name,
//         label: item.name,

//         children: item.children.map((child) => ({
//           key: child.name,
//           label: <NavLink to={`/admin/${child.path}`}> {child.name} </NavLink>,
//         })),
//       });
//     }

//     return acc;
//   },
//   []
// );

// // * programmatical way
// export const AdminRoutes = AdminPath.reduce((acc: TRoutes[], item) => {
//   if (item.path && item.element) {
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });
//   }

//   if (item.children) {
//     item.children.forEach((child) => {
//       acc.push({
//         path: child.path,
//         element: child.element,
//       });
//     });
//   }

//   return acc;
// }, []);

// export const AdminPaths = [
//   // {
//   //   index: true,
//   //   element: <AdminDashBoard />,
//   // },
//   {
//     path: "dashboard",
//     element: <AdminDashBoard />,
//   },

//   {
//     path: "create-student",
//     element: <CreateStudents />,
//   },
//   {
//     path: "create-admin",
//     element: <CreateAdmin />,
//   },
//   {
//     path: "create-faculty",
//     element: <CreateFaculty />,
//   },
// ];
