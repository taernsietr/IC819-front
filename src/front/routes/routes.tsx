import {  } from "react-router-dom";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Menu from "../components/Menu/Menu";
import HomeScreen from "../screens/HomeScreen";

export const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <App/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}