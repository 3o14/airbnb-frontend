import { Outlet } from "react-router";

export default function Root() {
    return (
        <h1>
            This is Root
            <Outlet/>
        </h1>
    );
}