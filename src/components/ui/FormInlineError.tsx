type FormInlineErrorProps = {
  error?: { message: string } | null;
};

const FormInlineError: React.FC<FormInlineErrorProps> = ({ error }) => {
  return <span className="text-red-500 font-medium">{error?.message}</span>;
};

export default FormInlineError;
