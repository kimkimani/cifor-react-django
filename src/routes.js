import { CreateUser } from "./component/CreateUser";
import { Home } from "./component/Home";
import { Login } from "./component/Login";
import { PageNotfound } from "./component/PageNotfound";
import { CreateRole } from "./component/CreateRole";
import { CreateStudent } from "./component/CreateStudent";
import { ListStudents } from "./component/ListStudents";

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
      component: PageNotfound,
      path: "*",
    },
       

    
  ];
export default routes;