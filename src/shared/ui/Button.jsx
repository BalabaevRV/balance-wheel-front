export const Button = ({ children }) => {
    return <button className="bg-blue-800 p-2 text-white rounded-lg cursor-pointer hover:bg-blue-700 active:bg-sky-900 transition-colors">{ children }</button>
}

export default Button