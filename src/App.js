import { ConfigProvider } from 'antd';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/dashboard';
import AdminSetNewPassword from './pages/authentication/adminSetNewPassword';
import AdminLogin from './pages/authentication/adminLogin';
import AdminEmailConfirmation from './pages/authentication/adminEmailConfirmation';
import AdminForgotPasswordConfirmation from './pages/authentication/adminForgotEmailConformation';
import AdminForgotPassword from './pages/authentication/adminForgotPassword';
import AdminVerifyEmail from './pages/authentication/adminVerifyEmail';
import AdminFirstTimeSetPass from './pages/authentication/adminFirstTimeSetPass';
import DashboardCompo from './components/DashboardCompo';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          // colorBgContainer: "#E5F0EA"
          colorPrimary: '#1b7165',
          algorithm: true,
        },
        components: {
          Button: {
            colorPrimary: '#1b7165',
          },
          Menu: {
            itemSelectedBg: '#1b7165',
            itemSelectedColor: '#ffffff',
            itemColor: '#1b7165',
            collapsedWidth: 150,
          },
          Popover: {
            minWidth: 500,
          },
        },
      }}
    >
      <div className="App">
        <BrowserRouter>
          <Routes>
            {/* Auth Routes  */}
            <Route path="/adminVerifyEmail" element={<AdminVerifyEmail />} />
            <Route
              path="/adminSetNewPassword"
              element={<AdminSetNewPassword />}
            />
            <Route
              path="/adminFirstTimeSetPass"
              element={<AdminFirstTimeSetPass />}
            />
            <Route path="/adminLogin" element={<AdminLogin />} />
            {/* <Route path="/adminSignup" element={<AdminSignup />} /> */}
            <Route
              path="/adminEmailconfirmation"
              element={<AdminEmailConfirmation />}
            />
            <Route
              path="/adminForgotPasswordConfirmation"
              element={<AdminForgotPasswordConfirmation />}
            />
            <Route
              path="/adminForgotPassword"
              element={<AdminForgotPassword />}
            />
            {/* <Route path="/forgotPassword" element={<ForgotPassword />} /> */}
            {/* Dashboard routes  */}
            {/* <Route path="/" element={<Dashboard />} /> */}
            <Route path="/" element={<Dashboard />}>
              <Route path="/home" element={<DashboardCompo />} />
              {/* <Route path="tasks" element={<DashboardTasks />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ConfigProvider>
  );
}

export default App;
