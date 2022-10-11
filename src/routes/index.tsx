import { Fragment } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter, redirect} from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Registration from "../pages/Registration";
import Cadastro from "../pages/Cadastro";
import { auth } from "../firebase";

// interface Redirect{
//  redirect: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
// }

// const PrivateRoute = ({ component: Component, ...rest }: any) => (
//   <Route
//     {...rest}
//     render={({props}:any) =>
//       auth ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to={{ pathname: "/", state: { from: props.location } }} />
//       )
//     }
//   />
// );

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
