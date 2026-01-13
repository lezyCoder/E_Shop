import { Outlet } from "react-router-dom";
import Layout from "./Layout";
const AuthLayout = () => {
    return (
        <Layout>
            <Outlet />
        </Layout>
    );
};

export default AuthLayout;
