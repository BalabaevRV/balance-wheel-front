import { Link, Navigate, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '@/app/store';
import { useTranslation } from 'react-i18next';
import { fetchUserProfile } from '@/entities/user/model/userSlice';
import { useEffect } from 'react';

export const AuthLayout = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const { token, isAuthenticated, name, loading } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (token && !name && !loading) {
      dispatch(fetchUserProfile());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading || (token && !name)) {
    return <div>{t('loading')}</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex gap-4">
            <Link to="/dashboard">{t('dashboard')}</Link>
            <Link to="/wheels">{t('wheels')}</Link>
            <Link to="/records">{t('records')}</Link>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <footer className="border-t mt-auto py-4 text-center text-gray-500">
        {t('appName')} © 2025
      </footer>
    </div>
  );
};
