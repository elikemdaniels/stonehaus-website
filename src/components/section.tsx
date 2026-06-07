import { cn } from "@/lib/manageClassNames";

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
    <Component className={cn("px-5 rounded-3xl", className)} {...rest}>
      {children}
    </Component>
  );
}
