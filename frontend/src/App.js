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
import OverviewPage from "./pages/OverviewPage";
import WeeklyGoalsPage from "./pages/WeeklyGoalsPage";
import DayLogsPage from "./pages/DayLogsPage";
import MealTrackerPage from "./pages/MealTrackerPage";
import ActivityTrackerPage from "./pages/ActivityTrackerPage";
import SettingsPage from "./pages/SettingsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ErrorPage from "./pages/ErrorPage";
import HelpPage from "./pages/HelpPage";
//layouts
import RootLayout from "./layouts/RootLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import SectionLayout from "./layouts/SectionLayout";
//css
import './index.css';
//mui calendar
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';



function App() {
  const { user } = useAuthContext();
  

  dayjs.extend(updateLocale)
  dayjs.updateLocale('en', {
      weekStart: 1,
  })
  //creating different routes for each page
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="/dashboard/section" element={<SectionLayout />} >
            <Route 
              path="/dashboard/section/overview"
              element={<OverviewPage/>} />
            <Route 
              path="/dashboard/section/weekly-goals" 
              element={<WeeklyGoalsPage />} />
            <Route 
              path="/dashboard/section/day-logs" 
              element={<DayLogsPage />} />
            <Route 
              path="/dashboard/section/meal-tracker" 
              element={<MealTrackerPage />} />
            <Route 
              path="/dashboard/section/activity-tracker" 
              element={<ActivityTrackerPage />} />  
            <Route 
              path="/dashboard/section/settings" 
              element={<SettingsPage />} />  
          </Route>
        </Route>
        <Route path="/help" element={<HelpPage />} />
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
