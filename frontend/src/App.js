//main imports
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Navigate
} from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
// pages
import HomePage from "./pages/HomePage";
import OverviewPage from "./pages/OverviewPage";
import WeeklyGoalsPage from "./pages/WeeklyGoalsPage";
import DayLogsPage from "./pages/DayLogsPage";
import MealTrackerPage from "./pages/MealTrackerPage";
import ActivityTrackerPage from "./pages/ActivityTrackerPage";
import SettingsPage from "./pages/SettingsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ErrorPage from "./pages/ErrorPage";
//layouts
import RootLayout from "./layouts/RootLayout";
import DashboardLayout from "./layouts/DashboardLayout";
//css
import './index.css';
//mui calendar
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'


function App() {
  const { user } = useAuthContext();
  //creating different routes for each page
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<DashboardLayout />} >
          <Route 
            path="/overview"
            element={<OverviewPage/>} />
          <Route 
            path="/weekly-goals" 
            element={<WeeklyGoalsPage />} />
          <Route 
            path="/day-logs" 
            element={<DayLogsPage />} />
          <Route 
            path="/meal-tracker" 
            element={<MealTrackerPage />} />
          <Route 
            path="/activity-tracker" 
            element={<ActivityTrackerPage />} />  
          <Route 
            path="/settings" 
            element={<SettingsPage />} />  
        </Route>
        <Route path="/login-page" element={!user ? <LoginPage /> : <Navigate to="/dashboard"/> } />
        <Route path="/register-page" element={!user ? <RegisterPage /> : <Navigate to="/dashboard" />} />
        {/* error catching */}
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="App">
        <RouterProvider router={router} />
      
      </div>
    </LocalizationProvider>
  );
}

export default App;
