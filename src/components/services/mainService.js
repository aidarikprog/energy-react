import HeadService from "./headerService";
import { Outlet } from "react-router-dom";
import "./services.scss";

export default function MainService() {
      return (
            <>
                  <div className="container-wide back">
                        <HeadService />
                        <Outlet />
                  </div>
            </>
      );
}
