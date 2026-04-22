import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '@/app/store';
import { MainLayout } from '@/layouts/MainLayout';
import { useTranslation } from 'react-i18next';
import { fetchUserProfile } from '@/entities/user/model/userSlice';
import { useEffect } from 'react';

export const ProtectedLayout = () => {
    const { t } = useTranslation();    
    const dispatch = useDispatch<AppDispatch>();
    const { token, isAuthenticated, name, loading } = useSelector(
        (state: RootState) => state.user
    );

  
    useEffect(() => {
        if (token && !name && !loading) {
            dispatch(fetchUserProfile());
        }
    }, []);


    if (loading || (token && !name)) {
        return <div>{t('loading')}</div>;
    }
    
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }
    
    return <MainLayout />;
};