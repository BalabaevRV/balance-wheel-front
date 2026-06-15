import { useTranslation } from 'react-i18next'
import { WheelCard } from '@/entities/wheel/ui/WheelCard/WheelCard'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/shared/ui/Button/Button'
import { wheelApi } from '@/entities/wheel/model/api'
import { useEffect, useState } from 'react'
import type { IWheel } from '@/entities/wheel/model/types'
import { useSelector } from 'react-redux'
import type { RootState } from '@/app/store'

export const WheelsListPage = () => {
	const { t } = useTranslation()
	const navigate = useNavigate()
	const [wheels, setWheels] = useState<IWheel[]>([])
	const { id, wheels: userWheels } = useSelector((state: RootState) => state.user)

	useEffect(() => {
		wheelApi
			.getWheelsList()
			.then((response) => {
				if (response.success) {
					setWheels(response.data)
				}
			})
			.catch((error) => {
				console.error('Error fetching wheels:', error)
			})
	}, [])

	const wheelsList = wheels.map((wheel) => (
		<WheelCard
			key={wheel.wheel_id}
			name={wheel.name}
			fields={wheel.fields}
			wheelId={wheel.wheel_id}
			ownerButton={wheel.owner_id === id}
			attachedButton={userWheels.some((w) => w.wheel_id === wheel.wheel_id)}
		/>
	))

	const createWheel = () => {
		navigate('/wheel')
	}

	return (
		<>
			<h1 className="text-xl font-bold mb-6">{t('wheels')}</h1>
			<ul className="flex flex-wrap gap-4 mb-6">
				{wheelsList.length > 0 ? (
					wheelsList
				) : (
					<div>
						<p>{t('wheelsEmpty')}</p>
						<Button onClick={createWheel}>{t('createWheel')}</Button>
					</div>
				)}
			</ul>
		</>
	)
}
