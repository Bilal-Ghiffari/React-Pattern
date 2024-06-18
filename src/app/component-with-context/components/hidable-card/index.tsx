import * as React from "react";
import { HidableCardContextProvider, useHidableCardContext } from "./context";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";
import IconButton from "@/components/buttons/IconButton";

type HidableCardProps = Pick<
  React.ComponentPropsWithoutRef<"div">,
  "className" | "children"
>;

type HidableCardTitleProps = Pick<
  React.ComponentPropsWithoutRef<"h3">,
  "className" | "children"
>;

type HidableCardSubtitleProps = Pick<
  React.ComponentPropsWithoutRef<"p">,
  "className" | "children"
>;

export const HidableCardParent: React.FunctionComponent<HidableCardProps> = ({
  className,
  ...rest
}) => {
  return (
    <HidableCardContextProvider>
      <div
        className={cn([
          "p-4",
          "rounded-lg border border-gray-200 shadow-sm",
          className,
        ])}
        {...rest}
      />
    </HidableCardContextProvider>
  );
};

export function HidableCardTitle({
  className,
  children,
}: Pick<React.ComponentPropsWithoutRef<"h3">, "className" | "children">) {
  const { hidden } = useHidableCardContext();

  return (
    <h3 className={cn(["text-gray-800 tracking-tighter", className])}>
      {hidden ? <span className="tracking-wide">••••••••</span> : children}
    </h3>
  );
}

export const HidableCardSubtitle: React.FunctionComponent<
  HidableCardSubtitleProps
> = ({ className, children }) => {
  const { hidden } = useHidableCardContext();
  return (
    <p className={cn(["text-gray-500 text-sm", className])}>
      {hidden ? <span className="tracking-wide">••••••••</span> : children}
    </p>
  );
};

export const HidableCardHideButton: React.FunctionComponent<{
  className?: string;
}> = ({ className }) => {
  const { hidden, toggle } = useHidableCardContext();
  return (
    <IconButton
      variant="light"
      icon={hidden ? EyeOff : Eye}
      className={className}
      classNames={{ icon: "text-xs" }}
      onClick={toggle}
    />
  );
};

export const HidableCard = Object.assign(HidableCardParent, {
  Title: HidableCardTitle,
  Subtitle: HidableCardSubtitle,
  HideButton: HidableCardHideButton,
});
