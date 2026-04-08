import { Routes, Route, Navigate } from 'react-router-dom'
import '@/app/config/i18n'
import LoginPage from '@/pages/LoginPage'
import RegisterPage from '@/pages/RegisterPage'
import LandingPage from '@/pages/LandingPage'
import { DashboardPage } from '@/pages/DashboardPage'
import WheelEditorPage from '@/pages/WheelEditorPage'
import WheelsListPage from '@/pages/WheelsListPage'
import RecordsPage from '@/pages/RecordsPage'
import ProfilePage from '@/pages/ProfilePage'
import NotFoundPage from '@/pages/NotFoundPage'
import { MainLayout } from '@/layouts/MainLayout'

function App() {
  return (
    <Routes>
       <Route element={<MainLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/wheels" element={<WheelsListPage />} />
        <Route path="/wheel/:id" element={<WheelEditorPage />} />
        <Route path="/records" element={<RecordsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App