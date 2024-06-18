import { cn } from "@/lib/utils";
import * as React from "react";

type DemoBlockProps = React.ComponentPropsWithoutRef<"div">;

const DemoBlock: React.FunctionComponent<DemoBlockProps> = ({
  className,
  ...rest
}) => {
  return (
    <div
      className={cn([
        "border-gray-300 p-4 border-dashed border-2 rounded-md ",
        className,
      ])}
      {...rest}
    ></div>
  );
};

export default DemoBlock;
