
type ButtonProps = {
  content: string;
  navigateTo: () => void;
}
export default function Button({content, navigateTo}:ButtonProps) {
  return (
    <button onClick={navigateTo} className='cursor-pointer ml-10 mr-10 mt-7 mb-7 border p-2 rounded-xl hover:bg-gray-50 hover:text-black'>{content}</button>
  )
}
