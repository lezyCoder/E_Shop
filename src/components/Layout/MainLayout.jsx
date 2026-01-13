import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import Layout from "./Layout";
const MainLayout = () => {
    return (
        <>
            <Navbar />
            <Layout>
                <Outlet />
            </Layout>
            <Footer />
        </>
    );
};

export default MainLayout;
