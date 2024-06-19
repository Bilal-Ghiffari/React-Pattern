import DemoBlock from "@/components/buttons/DemoBlock";
import * as React from "react";
import GrettingDialogDemo from "./gretting-dialog/demo";

interface IPageChildPatternProps {}

const PageChildPattern: React.FunctionComponent<IPageChildPatternProps> = (
  props
) => {
  return (
    <main className="py-20 layout">
      <DemoBlock className="mt-8">
        <GrettingDialogDemo />
      </DemoBlock>
    </main>
  );
};

export default PageChildPattern;
