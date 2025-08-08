import type { FieldErrors, UseFormRegister, UseFormHandleSubmit } from 'react-hook-form';

export interface Trainer {
  id: number;
  name: string;
  specialty: string;
  description: string;
  image: string;
  rating: number;
}

export interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular: boolean;
}

// Login Form Types
export interface LoginFormData {
  email: string;
  password: string;
}

// Signup Form Types
export interface SignupFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

// Form Props Types
export interface LoginFormProps {
  register: UseFormRegister<LoginFormData>;
  handleSubmit: UseFormHandleSubmit<LoginFormData>;
  errors: FieldErrors<LoginFormData>;
  onSubmit: (data: LoginFormData) => void | Promise<void>;
}

export interface SignupFormProps {
  register: UseFormRegister<SignupFormData>;
  handleSubmit: UseFormHandleSubmit<SignupFormData>;
  errors: FieldErrors<SignupFormData>;
  onSubmit: (data: SignupFormData) => void | Promise<void>;
}

// Form Field Configuration Types
export interface FormFieldConfig {
  name: string;
  type: string;
  placeholder: string;
  label: string;
}
