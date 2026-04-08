import { Link, Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
       <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex gap-4">
            <Link to="/dashboard">Дашборд</Link>
            <Link to="/wheels">Колёса</Link>
            <Link to="/records">Записи</Link>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <Outlet /> 
      </main>
      <footer className="border-t mt-auto py-4 text-center text-gray-500">
        BalanceWheel © 2025
      </footer>
    </div>
  );
};