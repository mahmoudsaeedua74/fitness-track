import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import type { LoginFormData, SignupFormData } from '../utils/interface';
import { loginSchema, signupSchema } from '../validation';
import LoginForm from '../components/auth/Login';
import SignupForm from '../components/auth/SingIn';
import { login } from '../lib/api/authApi';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Registration: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<0 | 1>(0);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  // Login Form Hook
  const loginForm = useForm<LoginFormData>({
    mode: 'onChange',
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // Signup Form Hook
  const signupForm = useForm<SignupFormData>({
    mode: 'onChange',
    resolver: yupResolver(signupSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    },
  });

  const handleLoginSubmit = async (data: LoginFormData): Promise<void> => {
    setIsLoading(true);
    toast.loading('Logging in...');
    console.log(data);
    try {
      const response = await login(data);
      console.log(data);
      console.log(response);
      toast.dismiss();
      toast.success('Login successful!');
      // Save user data to Redux store and also persist it in localStorage
      // so that the user stays logged in even after a page refresh

      // base on the role of user will redirect on him pages
      navigate('/dashboard');
    } catch (error) {
      console.log(error);
      toast.dismiss();
      toast.error(error?.response?.data?.message || 'Login failed. Check email/password.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignupSubmit = async (data: SignupFormData): Promise<void> => {
    try {
      console.log('Signup data:', data);
      // Add your signup API call here
      // await signupAPI(data);
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="flex h-full">
          <div className="w-full sm:w-1/2 relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentPage * 100}%)` }}
            >
              {/* Login Page */}
              <div className="w-full flex-shrink-0 p-4 flex flex-col justify-center">
                <LoginForm
                  register={loginForm.register}
                  handleSubmit={loginForm.handleSubmit}
                  errors={loginForm.formState.errors}
                  onSubmit={handleLoginSubmit}
                />

                <div className="mt-8 text-center">
                  <span className="text-gray-600">Don't have an account? </span>
                  <button
                    type="button"
                    onClick={() => setCurrentPage(1)}
                    className="text-blue-600 hover:text-blue-900 font-semibold transition-colors"
                  >
                    Sign Up Now
                  </button>
                </div>
              </div>

              {/* Signup Page */}
              <div className="w-full flex-shrink-0 p-4 flex flex-col justify-center">
                <SignupForm
                  register={signupForm.register}
                  handleSubmit={signupForm.handleSubmit}
                  errors={signupForm.formState.errors}
                  onSubmit={handleSignupSubmit}
                />

                <div className="mt-6 text-center">
                  <span className="text-gray-600">Already have an account? </span>
                  <button
                    type="button"
                    onClick={() => setCurrentPage(0)}
                    className="text-blue-600 hover:text-blue-900 font-semibold transition-colors"
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Background Image */}
          <div className="hidden sm:block sm:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-red-600"></div>
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{
                backgroundImage: 'url("/assets/banner.webp")',
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
