import { Routes, Route, Navigate } from 'react-router-dom'
import '@/app/config/i18n'
import LoginPage from '@/pages/LoginPage'
import RegisterPage from '@/pages/RegisterPage'
import LandingPage from '@/pages/LandingPage'
import { DashboardPage } from '@/pages/DashboardPage'
import WheelPage from '@/pages/WheelPage'
import WheelsListPage from '@/pages/WheelsListPage'
import RecordsListPage from '@/pages/RecordsListPage'
import RecordPage from '@/pages/RecordPage'
import ProfilePage from '@/pages/ProfilePage'
import NotFoundPage from '@/pages/NotFoundPage'
import { MainLayout } from '@/layouts/MainLayout'
import { useEffect } from 'react'
import { useAppDispatch } from '@/app/store/hooks'; 
import { loginUser } from '@/entities/user/model/userSlice'

function App() {
  const dispatch = useAppDispatch(); 

 useEffect(() => {
    dispatch(loginUser({
      login: 'SvetaEng',
      password: 'password123'
    }));
  }, []);

  return (
    <Routes>
       <Route element={<MainLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/wheels" element={<WheelsListPage />} />
        <Route path="/wheel" element={<WheelPage />} />
        <Route path="/wheel/:id" element={<WheelPage />} />
        <Route path="/records" element={<RecordsListPage />} />
        <Route path="/record" element={<RecordPage />} />
        <Route path="/record/:id" element={<RecordPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App