import { Outlet } from "react-router-dom";

import './styles.sass';

const DefaultLayout = () => {
    return (
        <div className="default-layout-container">
            <Outlet/>
        </div>
    )
}

export default DefaultLayout;