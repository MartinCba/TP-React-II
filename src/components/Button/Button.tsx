
type ButtonProps = {
  content: string;
  navigateTo: () => void;
}
export default function Button({content, navigateTo}:ButtonProps) {
  return (
    <button onClick={navigateTo} className='cursor-pointer m-5 border p-5 rounded-xl hover:bg-gray-50 hover:text-black '>{content}</button>
  )
}
