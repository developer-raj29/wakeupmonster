import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef, ReactNode } from "react";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  id: string;
  className?: string;
  background?: ReactNode;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid justify-center w-full h-min auto-rows-[150px] grid-cols-3 gap-[10px]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({ className, background, ...props }: BentoCardProps) => (
  <div
    className={cn(
      "group relative overflow-hidden col-span-3 flex flex-col rounded-[10px] will-change-transform",
      "bg-[#171717] border-1 border-neutral-700",
      //   "bg-gradient-to-br from-[#0e0d0d] to-[#0c0c0c] border-1 border-neutral-700",
      className
    )}
    {...props}
  >
    {/* Your Content */}
    {background}
  </div>
);

export { BentoGrid, BentoCard };
