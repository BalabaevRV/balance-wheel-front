import { Link, Outlet } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export const MainLayout = () => {
	const { t } = useTranslation()
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
			<footer className="border-t mt-auto py-4 text-center text-gray-500">{t('appName')} © 2025</footer>
		</div>
	)
}
