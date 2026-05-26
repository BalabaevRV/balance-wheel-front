import { Routes, Route, Navigate } from 'react-router-dom'
import '@/app/config/i18n'
import LoginPage from '@/pages/LoginPage'
import LandingPage from '@/pages/LandingPage'
import { DashboardPage } from '@/pages/DashboardPage'
import WheelPage from '@/pages/WheelPage'
import WheelsListPage from '@/pages/WheelsListPage'
import RecordsListPage from '@/pages/RecordsListPage'
import RecordPage from '@/pages/RecordPage'
import ProfilePage from '@/pages/ProfilePage'
import NotFoundPage from '@/pages/NotFoundPage'
import { AuthLayout } from '@/layouts/AuthLayout'
import SignupPage from '@/pages/SignupPage'
import { GuestLayout } from '@/layouts/GuestLayout'

function App() {

  return (
    <Routes>
      <Route element={<GuestLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
      </Route>
      <Route element={<AuthLayout />}>
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
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App