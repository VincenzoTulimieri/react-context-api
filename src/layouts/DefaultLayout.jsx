// importazione file
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

export default function DefaultLayout() {
    return (
        <>
            <Header />
            <main>
                <div className="container">
                    <Outlet />
                </div>
            </main>
        </>
    )
}