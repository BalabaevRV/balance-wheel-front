import { Input } from "@/shared/ui/Input/Input"
import { Button } from "@/shared/ui/Button/Button"
import { useDispatch } from 'react-redux';
import { useTranslation } from "react-i18next";
import { loginUser } from "@/entities/user/model/userSlice";
import { useState } from "react";
import type { AppDispatch } from '@/app/store';
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const { t } = useTranslation();   
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');  
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit =  async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    const result = await dispatch(loginUser({ login, password }));
    if (loginUser.fulfilled.match(result)) {
      navigate('/dashboard');
    } else {
      setError(t('loginFailed'));
    }
  };

  return (
    <div>
        <form className="flex flex-col gap-4 max-w-md" onSubmit={handleSubmit}>
            <Input placeholder={t('login')} type="text" value={login} id="login" onChange={(e) => setLogin(e.target.value)} />
            <Input placeholder={t('password')} type="password" value={password} id="password" onChange={(e) => setPassword(e.target.value)} />
             {error && <p className="text-red-500">{error}</p>}
            <Button type="submit">{t('loginAction')}</Button>
        </form>
        <p>{t('dontHaveAccount')} <a href="/signup" className="text-blue-500 hover:underline">{t('signupAction')}</a></p>

    </div>
  );
}

export default LoginPage;