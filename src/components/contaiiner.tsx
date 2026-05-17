import { cn } from "@/lib/utils";

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
    <div className={cn("bg-amber-100 max-w-5xl mx-auto", className)} {...rest}>
      {children}
    </div>
  );
}
