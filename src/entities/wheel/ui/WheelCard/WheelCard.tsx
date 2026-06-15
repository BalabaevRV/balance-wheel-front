import Button from '@/shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { WheelChart } from '@/widgets/ui/WheelChart/WheelChart'
import { wheelApi } from '@/entities/wheel/model/api'
import type { IField } from '../../model/types'
import type { IFieldValue } from '@/entities/record/model/types'
import { updateUser } from '@/entities/user/model/userSlice'
import { useAppDispatch } from '@/app/store/hooks'

interface IWheelCardProps {
	name: string
	fields: IField[]
	wheelId: number
	ownerButton: boolean
	attachedButton: boolean
}

export const WheelCard = ({ name, fields, wheelId, ownerButton, attachedButton }: IWheelCardProps) => {
	const { t } = useTranslation()
	const navigate = useNavigate()
	const dispatch = useAppDispatch()

	const createRecord = () => {
		navigate('/record', { state: { wheelId: wheelId } })
	}

	const editWheel = () => {
		navigate(`/wheel/${wheelId}`)
	}

	const attachWheel = async () => {
		const response = await wheelApi.attachWheel(wheelId)
		if (response.success) {
			dispatch(updateUser(response.data))
		}
	}

	const detachWheel = async () => {
		const response = await wheelApi.detachWheel(wheelId)
		if (response.success) {
			dispatch(updateUser(response.data))
		}
	}

	const fieldsWithValues: IFieldValue[] = fields.map((field) => ({
		...field,
		value: 10
	}))

	return (
		<li className="bg-blue-300 rounded-xl p-4 w-full sm:w-48 flex flex-col">
			<div className="mb-4">
				<p className="text-lg font-medium mb-2">{name}</p>
				<div className="mb-2">
					<WheelChart data={fieldsWithValues} width={80} height={80} radius={40} showLabels={false} />
				</div>
			</div>
			<div className="flex-col mt-auto">
				{attachedButton && (
					<Button className="mb-2 w-full" onClick={createRecord}>
						{t('createRecord')}
					</Button>
				)}
				{ownerButton && (
					<Button className="mb-2 w-full" onClick={editWheel}>
						{t('editWheel')}
					</Button>
				)}
				{!ownerButton && attachedButton && (
					<Button className="mb-2 w-full" onClick={detachWheel}>
						{t('detachWheel')}
					</Button>
				)}
				{!ownerButton && !attachedButton && (
					<Button className="mb-2 w-full" onClick={attachWheel}>
						{t('attachWheel')}
					</Button>
				)}
			</div>
		</li>
	)
}
