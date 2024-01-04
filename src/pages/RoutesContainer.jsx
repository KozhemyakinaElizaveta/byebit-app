import { Route, Routes, useLocation } from "react-router-dom";
import {HomePage} from './HomePage';
import {SellPage} from './SellPage';
import {BuyPage} from './BuyPage';
import { RegistrationPage } from "./RegistrationPage";
import { LogInPage } from "./LogInPage";


export default function RoutesContainer() {
    const location = useLocation();
    const locationState = location.state;
    const background = locationState && locationState.background;
    return (
        <>
            <Routes location={background || location}>
                <Route path="/" element={<HomePage />} />
                <Route path="/buy" element={<BuyPage />} />
                <Route path="/sell" element={<SellPage />} />
                <Route path="/registration" element={<RegistrationPage />} />
                <Route path="/login" element={<LogInPage />} />
            </Routes>
        </>
    )
}