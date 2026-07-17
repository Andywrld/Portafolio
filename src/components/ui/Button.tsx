import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[transform,background-color,border-color,color] duration-200 ease-[cubic-bezier(0.25,1,0.5,1)] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm',
        solid:
          'bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-sm',
        outline:
          'border border-border bg-transparent text-foreground hover:border-foreground/40 hover:bg-foreground/[0.03]',
        ghost: 'bg-transparent text-foreground hover:bg-foreground/[0.05]',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-5 text-sm rounded-md',
        sm: 'h-9 px-4 text-sm rounded-md',
        lg: 'h-12 px-7 text-[0.95rem] rounded-md',
        icon: 'size-10 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export const Button = ({ className, variant, size, ...props }: ButtonProps) => {
  return (
    <button
      className={buttonVariants({ variant, size, className })}
      {...props}
    ></button>
  );
};

export { buttonVariants };
