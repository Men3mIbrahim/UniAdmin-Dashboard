import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/Layout/Layout";

import Dashboard from "../pages/Dashboard/Dashboard";
import Students from "../pages/Students/Students";
import Courses from "../pages/Courses/Courses";
import Departments from "../pages/Departments/Departments";
import Applications from "../pages/Applications/Applications";
import Users from "../pages/Users/Users";
import Settings from "../pages/Settings/Settings";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Layout />}>

                    <Route index element={<Dashboard />} />

                    <Route path="students" element={<Students />} />

                    <Route path="courses" element={<Courses />} />

                    <Route path="departments" element={<Departments />} />

                    <Route path="applications" element={<Applications />} />

                    <Route path="users" element={<Users />} />

                    <Route path="settings" element={<Settings />} />

                </Route>

            </Routes>
        </BrowserRouter>
    );
}