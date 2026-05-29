interface IButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary';
    disabled?: boolean;
    className?: string;
}

export const Button = ({ children, onClick, type = 'button', className = '' }: IButtonProps) => {
    return <button type={type} className={`bg-blue-800 p-2 text-white rounded-lg cursor-pointer hover:bg-blue-700 active:bg-sky-900 transition-colors ${className}`} onClick={onClick}>
        { children }
    </button>
}

export default Button