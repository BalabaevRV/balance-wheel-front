import { Input } from "@/shared/ui/Input/Input"
import { Button } from "@/shared/ui/Button/Button"
import { useDispatch } from 'react-redux';
import { useTranslation } from "react-i18next";
import { signupUser } from "@/entities/user/model/userSlice";
import { useState } from "react";
import type { AppDispatch } from '@/app/store';
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const { t } = useTranslation();   
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');  
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  
  const handleSubmit =  async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
     const result = await dispatch(signupUser({ login, password, email, name }));
    if (signupUser.fulfilled.match(result)) {
      navigate('/dashboard');
    } else {
      setError(t('signupFailed'));
    }
  };

  return (
    <div>
        <form className="flex flex-col gap-4 max-w-md" onSubmit={handleSubmit}>
            <Input placeholder={t('login')} type="text" value={login} id="login" onChange={(e) => setLogin(e.target.value)} />
            <Input placeholder={t('password')} type="password" value={password} id="password" onChange={(e) => setPassword(e.target.value)} />
            <Input placeholder={t('email')} type="email" value={email} id="email" onChange={(e) => setEmail(e.target.value)} />
            <Input placeholder={t('name')} type="text" value={name} id="name" onChange={(e) => setName(e.target.value)} />
             {error && <p className="text-red-500">{error}</p>}
            <Button type="submit">{t('signupAction')}</Button>
        </form>
        <p>{t('alreadyRegistered')} <a href="/login" className="text-blue-500 hover:underline">{t('loginAction')}</a></p>

    </div>
  );
}

export default SignupPage;