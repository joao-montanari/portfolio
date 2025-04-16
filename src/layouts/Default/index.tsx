import { Outlet } from "react-router-dom";

import './styles.sass';
import Header from "@Components/Header";

const DefaultLayout = () => {
    return (
        <div className="default-layout-container">
            <div className="default-layout-content">
                <div className="header-container-layout">
                    <Header/>
                </div>
                <Outlet/>
            </div>
        </div>
    )
}

export default DefaultLayout;