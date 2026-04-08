import Button from '@/shared/ui/Button/Button' 
import mocks from '@/shared/mocks/mocks.jpg'

export const WheelCard = () => {
        return (
        <li className='bg-blue-300 rounded-xl p-4'>
            <img src={mocks} alt="Колёсо баланса" width='200' className='rounded-lg mb-2' />
            <Button>Создать запись</Button>
        </li>
    )
} 

