"use client";

import * as React from "react";
import GreetingDialog from ".";
import Button from "@/components/buttons/Button";

interface IGrettingDialogDemoProps {}

const GrettingDialogDemo: React.FunctionComponent<IGrettingDialogDemoProps> = (
  props
) => {
  return (
    <GreetingDialog>
      {({ isOpen, openDialog }) => (
        <div>
          <div>
            Dialog is{" "}
            {isOpen ? (
              <span className="text-green-500">opened</span>
            ) : (
              <span className="text-red-500">closed</span>
            )}
          </div>
          <Button className="mt-4" variant="dark" onClick={openDialog}>
            click me!
          </Button>
        </div>
      )}
    </GreetingDialog>
  );
};

export default GrettingDialogDemo;
