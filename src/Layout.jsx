import { Outlet } from "react-router-dom";
import NavBar from "./components/Navbar";
import Footer from "./sections/Footer";

export default function Layout() {
    return <>
        <div className="flex flex-col justify-between min-h-screen">
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    </>
}
