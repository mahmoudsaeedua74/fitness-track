import { Button } from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { loginFormData } from '../../utils';
import type { LoginFormData, LoginFormProps } from '../../utils/interface';

const LoginForm: React.FC<LoginFormProps> = ({ register, handleSubmit, errors, onSubmit }) => {
  return (
    <div className="max-w-sm mx-auto w-full">
      <div className="mb-8">
        <p className="text-gray-600 font-medium mb-2">Welcome to the Club</p>
        <h1 className="text-3xl font-bold text-gray-800">Sign In</h1>
      </div>

      <div className="space-y-6">
        {loginFormData.map((formInput, idx) => (
          <Input<LoginFormData>
            key={idx}
            name={formInput.name as keyof LoginFormData}
            type={formInput.type}
            placeholder={formInput.placeholder}
            label={formInput.label}
            register={register}
            errors={errors}
          />
        ))}

        <Button
          type="button"
          onClick={handleSubmit(onSubmit)}
          variant="opinion"
          size="lg"
          className="w-full mt-6"
        >
          Sign In
        </Button>
      </div>

      <button className="w-full text-blue-600 hover:text-blue-900 font-medium py-2 mt-4 transition-colors">
        Forgot Password?
      </button>
    </div>
  );
};

export default LoginForm;
