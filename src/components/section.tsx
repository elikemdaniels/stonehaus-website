import { cn } from "@/lib/utils";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
};

export default function Section({
  children,
  as: Component = "section",
  className,
  ...rest
}: SectionProps) {
  return (
    <Component className={cn("bg-amber-300", className)} {...rest}>
      {children}
    </Component>
  );
}
