import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../utils/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center border-[1px] font-bold rounded-[6px] sm:rounded-[10px] p-[10px] transition-colors duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        default:
          'text-sm sm:text-base  text-black-text shadow bg-white hover:bg-black-text hover:text-white transition-all duration-300',
        menu: 'bg-white text-black-text hover:bg-highlight-color  w-fit',
        opinion:
          ' text-white shadow bg-black-text hover:bg-white hover:text-black-text border-2 border-black-text  transition-all duration-300',
        secondary: 'bg-white text-secondary-color border-border-color hover:bg-gray-200',
        delete: 'hover:bg-[#D9534F] bg-[#FDEAEA] text-[#D9534F] hover:text-white border-[#D9534F]',
        expert:
          'bg-transparent text-secondary-color border-border-color hover:text-black hover:bg-gray-50',
        disabled: 'bg-gray-300 text-gray-500 border-gray-300 cursor-not-allowed opacity-50',
      },
      size: {
        default: 'h-[33px] sm:h-[44px] w-[131px] px-2 py-1 sm:px-4 sm:py-2',
        sm: 'h-6 rounded-md px-3 text-xs',
        lg: 'h-[44px] w-[300px] px-4 py-2',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = 'Button';

export { Button };
