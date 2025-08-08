import { Button } from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import { signupFormData } from '../../utils';
import type { SignupFormData, SignupFormProps } from '../../utils/interface';
const SignupForm: React.FC<SignupFormProps> = ({ register, handleSubmit, errors, onSubmit }) => {
  return (
    <div className="max-w-sm mx-auto w-full">
      <div className="mb-6">
        <p className="text-gray-600 font-medium mb-2">Welcome to the Club</p>
        <h1 className="text-3xl font-bold text-gray-800">Create Account</h1>
      </div>

      <div className="space-y-4">
        {signupFormData.map((formInput, idx) => (
          <Input<SignupFormData>
            key={idx}
            name={formInput.name as keyof SignupFormData}
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
          Create Account
        </Button>
      </div>
    </div>
  );
};

export default SignupForm;
