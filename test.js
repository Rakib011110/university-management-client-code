const AdminPaths2 = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: "ADMIN DASHBOARD",
  },

  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: "CREATE_ADMIN",
      },
      {
        name: "Create faculty",
        path: "create-faculty",
        element: "CREAT_FACULTY",
      },
      {
        name: "Create Student",
        path: "create-student",
        element: "CREAT_STUDENT",
      },
    ],
  },
];

const newArray = AdminPaths2.reduce((acc, item) => {
  if (item.path && item.element) {
    acc.push({
      key: item.name,
      label: "NAVLINK",
    });
  }

  if (item.children) {
    acc.push({
      key: item.name,
      label: item.name,

      children: item.children.map((child) => ({
        key: child.name,
        label: "NAVLINK",
      })),
    });
  }

  return acc;
}, []);

console.log("new Array =>", newArray);

// const newArray = AdminPaths2.reduce((acc, item) => {
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
