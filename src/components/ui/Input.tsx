import type {
  FieldError,
  FieldErrors,
  FieldValues,
  UseFormRegister,
  Path as RHFPath,
} from 'react-hook-form';
import FormInlineError from './FormInlineError';
import { useState, type InputHTMLAttributes } from 'react';
import { Eye, EyeOff } from 'lucide-react';

type InputProps<T extends FieldValues> = {
  name: RHFPath<T>;
  type: string;
  errors?: FieldErrors<T>;
  placeholder?: string;
  className?: string;
  register: UseFormRegister<T>;
  label?: string;
  maxLength?: number;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'name' | 'type' | 'placeholder' | 'maxLength'>;

function Input<T extends FieldValues>({
  name,
  type,
  errors,
  placeholder,
  className = '',
  register,
  label,
  maxLength,
  ...props
}: InputProps<T>) {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const baseClass = ` w-full h-[52px] rounded-md bg-[#F2F2F2]  mt-0.5 border-2 border-black-text/40 focus:outline-none focus:border-blue-600 transition-colors duration-200 px-4 py-2`;
  const textAlignClass = type === 'tel' ? 'text-end' : '';
  const finalClass = [baseClass, textAlignClass].join(' ');

  const fieldError = errors?.[name] as FieldError | undefined;

  return (
    <div className={`${className} w-full`}>
      {label && (
        <label htmlFor={name} className="block text-black-text font-medium sm:text-lg mb-2">
          {label} :
        </label>
      )}
      <div className="relative w-full h-[56px]">
        <input
          {...register(name)}
          id={name}
          name={name}
          type={type === 'password' ? (isShowPassword ? 'text' : 'password') : type}
          autoComplete={
            type === 'password'
              ? 'new-password'
              : type === 'email' || name === 'email'
              ? 'username'
              : undefined
          }
          placeholder={placeholder}
          className={finalClass}
          maxLength={maxLength}
          {...props}
        />

        {type === 'password' && (
          <button
            type="button"
            onClick={() => setIsShowPassword((prev) => !prev)}
            className="w-5 h-5 absolute end-4 top-1/2 -translate-y-1/2 cursor-pointer"
          >
            {isShowPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
      {fieldError?.message && <FormInlineError error={{ message: fieldError.message }} />}
    </div>
  );
}

export default Input;
