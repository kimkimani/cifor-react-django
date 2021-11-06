import { CreateUser } from "./component/CreateUser";
import { Home } from "./component/Home";
import { Login } from "./component/Login";
import { PageNotfound } from "./component/PageNotfound";
import { CreateRole } from "./component/CreateRole";
import { CreateStudent } from "./component/CreateStudent";
import { ListStudents } from "./component/ListStudents";
import { ListPermission } from "./component/ListPermission";
import { ListRoles } from "./component/ListRoles";
import { ListContentTypes } from "./component/ListContentTypes";
import { CreatePermission } from "./component/CreatePermission";
import { AssignRole } from "./component/AssignRole";


const routes= [
    {
      exact: true,
      component: Home,
      path: "/",
    },
    
    {
      exact: true,
      component: Login,
      path: "/login",
    },
    {
      exact: true,
      component: CreateUser,
      path: "/addUser",
    },
    {
      exact: true,
      component: CreateRole,
      path: "/create-role",
    },
    {
      exact: true,
      component: CreateStudent,
      path: "/create-student",
    },
    {
      exact: true,
      component:ListStudents,
      path: "/students",
    },
    {
      exact: true,
      component:ListRoles,
      path: "/roles",
    },
    {
      exact: true,
      component:ListPermission,
      path: "/permissions",
    },
    {
      exact: true,
      component:ListContentTypes,
      path: "/content-type",
    },

    {
      exact: true,
      component:CreatePermission,
      path: "/create-permission",
    },
    {
      exact: true,
      component:AssignRole,
      path: "/assign-role",
    },
    {
      exact: true,
      component: PageNotfound,
      path: "*",
    },
       
    

    
  ];
export default routes;