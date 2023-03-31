import { Route, Routes } from "react-router-dom";
import Settings from "./Settings";
import Users from "./Users";

const Main=()=>{
    return(
        <div>
            <Routes>
                <Route path="/settings" element={<Settings/>}></Route>
                <Route path="/users" element={<Users/>}></Route>
            </Routes>
        </div>
    )
}
export default Main;