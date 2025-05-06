import React from 'react';
import { Search } from 'lucide-react';

type InputFieldProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
};

const InputField: React.FC<InputFieldProps> = ({ value, onChange, placeholder, className = '' }) => (
  <div className={`relative flex items-center ${className}`}>
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="pl-10 pr-4 py-2 rounded border border-yellow-400 bg-neutral-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full transition"
    />
    <Search className="absolute left-3 text-yellow-400 w-5 h-5 pointer-events-none" />
  </div>
);

export default InputField;