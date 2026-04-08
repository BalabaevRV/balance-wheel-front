import Button from '@/shared/ui/Button/Button'
import mocks from '@/shared/mocks/mocks.jpg'

function DashboardPage() {
  return (
    <>
      <p className="text-xl font-bold mb-6">Здравствуй, Света!</p>
      <div className='mb-4'>
        <p className="text-lg font-medium mb-2">Мои колёса</p>
        <ul className='flex gap-4'>
          <li className='bg-blue-300 rounded-xl p-4'>
            <img src={mocks} alt="Колёсо баланса" width='200' className='rounded-lg mb-2' />
            <Button>Создать запись</Button>
          </li>
          <li className='bg-blue-300 rounded-xl p-4'>
            <img src={mocks} alt="Колёсо баланса" width='200' className='rounded-lg mb-2' />
            <Button>Создать запись</Button>
          </li>
          <li className='bg-blue-300 rounded-xl p-4'>
            <img src={mocks} alt="Колёсо баланса" width='200' className='rounded-lg mb-2' />
            <Button>Создать запись</Button>
          </li>
          <li className='bg-blue-300 rounded-xl p-4'>
            <img src={mocks} alt="Колёсо баланса" width='200' className='rounded-lg mb-2' />
            <Button>Создать запись</Button>
          </li>          
        </ul>
      </div>
      <div className='mb-4'>
        <p className="text-lg font-medium mb-2">Последние записи</p>
        <ul>
          <li></li>
        </ul>
      </div>
      <Button>Создать запись</Button>
    </>
  );
}

export default DashboardPage;