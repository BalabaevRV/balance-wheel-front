import { useTranslation } from 'react-i18next'
import { addRecord, updateRecord, removeRecord } from '@/entities/user/model/userSlice'
import { useNavigate, useParams } from 'react-router-dom'
import { WheelChart } from '@/widgets/ui/WheelChart/WheelChart'
import { RecordValueInput } from '@/entities/record/ui/RecordValueInput/RecordValueInput'
import { useMemo, useState } from 'react'
import { Button } from '@/shared/ui/Button/Button'
import { WheelSelector } from '@/shared/ui/Selector/Selector'
import { Input } from '@/shared/ui/Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '@/app/store'
import { recordApi } from '@/entities/record/model/api'

export function RecordPage() {
	const dispatch = useDispatch<AppDispatch>()
	const { t } = useTranslation()
	const navigate = useNavigate()
	const { id } = useParams()
	const { wheels, records } = useSelector((state: RootState) => state.user)
	const { id: idCurrentUser } = useSelector((state: RootState) => state.user)

	const initialState = useMemo(() => {
		if (id) {
			const existingRecord = records.find((rec) => rec.record_id === parseInt(id))
			if (existingRecord) {
				const initialValues: Record<number, number> = {}
				existingRecord.values?.forEach((field) => {
					initialValues[field.field_id] = field.value
				})
				return {
					wheelId: existingRecord.wheel_id,
					wheelName: existingRecord.balance_wheel_name,
					customValues: initialValues,
					date: existingRecord.date
				}
			}
		}

		return {
			wheelId: 0,
			wheelName: '',
			customValues: {} as Record<number, number>,
			date: new Date()
		}
	}, [id, records])

	const [wheelId, setWheelId] = useState(initialState.wheelId)
	const [wheelName] = useState(initialState.wheelName)
	const [date, setDate] = useState<Date | string>(initialState.date)
	const [customValues, setCustomValues] = useState(initialState.customValues)

	const selectedWheel = useMemo(() => {
		if (wheelId <= 0) return null
		return wheels.find((wheel) => wheel.wheel_id === wheelId)
	}, [wheelId, wheels])

	const numberValues = useMemo(() => {
		if (!selectedWheel) return []
		return selectedWheel.fields.map((field) => ({
			field_id: field.field_id,
			name: field.name,
			color_hex: field.color_hex,
			value: customValues[field.field_id] ?? 10
		}))
	}, [selectedWheel, customValues])

	const handleNumberChange = (fieldId: number, newValue: number) => {
		setCustomValues((prev) => ({
			...prev,
			[fieldId]: newValue
		}))
	}

	const handleWheelChange = (value: number) => {
		setWheelId(value)
		setCustomValues({})
	}

	const wheelOptions = wheels.map((wheel) => ({
		value: wheel.wheel_id,
		name: wheel.name
	}))

	const renderValues = () => {
		if (numberValues.length === 0) {
			return <p className="text-gray-500 italic">{t('selectWheelFirst')}</p>
		}
		return numberValues.map((field) => (
			<RecordValueInput
				key={field.field_id}
				id={field.field_id}
				name={field.name}
				color={field.color_hex}
				value={field.value}
				onChange={(e) => handleNumberChange(field.field_id, parseInt(e.target.value))}
			/>
		))
	}

	const saveRecord = async () => {
		if (!idCurrentUser || !wheelId || numberValues.length === 0) {
			return
		}
		const response = await recordApi.saveRecord({
			record_id: id ? parseInt(id) : undefined,
			wheel_id: wheelId,
			values: numberValues
		})
		if (response.success) {
			dispatch(id ? updateRecord(response.data) : addRecord(response.data))
			navigate('/dashboard')
		}
	}

	const deleteRecord = async () => {
		if (!idCurrentUser || !id) {
			return
		}
		const response = await recordApi.deleteRecord(parseInt(id))
		if (response.success) {
			dispatch(removeRecord(parseInt(id)))
			navigate('/dashboard')
		}
	}

	return (
		<>
			<h1 className="text-xl font-bold mb-6">{id ? t('editRecord') : t('newRecord')}</h1>
			<div className="flex align-center gap-6">
				<div>
					<div>
						{id ? (
							<p className="text-m font-medium mb-2">{wheelName}</p>
						) : (
							<WheelSelector
								options={wheelOptions}
								placeholder={t('selectWheel')}
								defaultValue={wheelId || ''}
								onChange={handleWheelChange}
							/>
						)}
						<div className="mb-4">
							<Input
								type="date"
								id="record-date"
								onChange={(e) => setDate(new Date(e.target.value))}
								value={date instanceof Date ? date.toISOString().split('T')[0] : date.split('T')[0]}
							/>
						</div>
					</div>
					<div className="flex flex-col gap-2">{renderValues()}</div>
					<div className="flex gap-4 mt-6">
						<Button onClick={saveRecord}>{t('save')}</Button>
						<Button onClick={deleteRecord}>{t('delete')}</Button>
					</div>
				</div>
				<WheelChart data={numberValues} />
			</div>
		</>
	)
}

export default RecordPage
