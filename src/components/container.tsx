import { cn } from "@/lib/manageClassNames";

type ContainerProps = React.HTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
  className?: string;
};

export default function Container({
  children,
  className,
  ...rest
}: ContainerProps) {
  return (
    <div className={cn("max-w-5xl mx-auto", className)} {...rest}>
      {children}
    </div>
  );
}
