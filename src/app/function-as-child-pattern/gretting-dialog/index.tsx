import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import * as React from "react";
import { PiHandWaving } from "react-icons/pi";

type ReturnProps = {
  isOpen: boolean;
  openDialog: () => void;
};

const GreetingDialog: React.FunctionComponent<{
  children: (props: ReturnProps) => React.ReactNode;
}> = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const openDialog = () => setOpen((prev) => !prev);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {children({ openDialog, isOpen: open })}
      <DialogContent>
        <div className="flex items-center gap-2">
          <PiHandWaving className="text-yellow-500 animate-waving" size={30} />
          <DialogTitle>Hello form a dialaog</DialogTitle>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GreetingDialog;
