import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//import {
//    createBrowserRouter,
//    RouterProvider,
//} from "react-router-dom";
import { Towar } from './towar/TowarPage.jsx';
import { Towary } from './towar/TowaryPage.jsx'
import { Pracownik } from './pracownik/PracownikPage.jsx'
import { Pracownicy } from './pracownik/PracownicyPage.jsx'
import { Layout } from './layout/Layout.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StatystykiSamochodowe from './towar/StatystykiSamochodowe.jsx';
import Kontakt from './Kontakt.jsx';
import StatystykiPracownicze from './pracownik/StatystykiPracownicze.jsx';
import RentPage from './towar/RentPage.jsx';


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* <RouterProvider router={router} />*/}
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/> }>
                    <Route index element={<App/> }/>
                </Route>
                <Route path='/towar' element={<Layout />}>
                    <Route index element={<Towar />} />
                </Route>
                <Route path='/towary' element={<Layout />}>
                    <Route index element={<Towary />} />
                </Route>
                <Route path='/pracownik' element={<Layout />}>
                    <Route index element={<Pracownik />} />
                </Route>
                <Route path='/pracownicy' element={<Layout />}>
                    <Route index element={<Pracownicy />} />
                </Route>
                <Route path='/kontakt' element={<Layout />}>
                    <Route index element={<Kontakt />} />
                </Route>
                <Route path='/statystyki' element={<Layout />}>
                    <Route index element={<StatystykiSamochodowe />} />
                </Route>
                <Route path='/statystyki_p' element={<Layout />}>
                    <Route index element={<StatystykiPracownicze />} />
                </Route>
                <Route path='/rent' element={<Layout />}>
                    <Route index element={<RentPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
