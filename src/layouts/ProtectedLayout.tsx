import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '@/app/store';
import { MainLayout } from '@/layouts/MainLayout';
import { useTranslation } from 'react-i18next';

export const ProtectedLayout = () => {
    const { t } = useTranslation();    
    const { isAuthenticated, loading } = useSelector((state: RootState) => state.user);
  
    if (loading) {
        return <div>{t('loading')}</div>;
    }
    
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }
    
    return <MainLayout />;
};