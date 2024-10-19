import { X } from "lucide-react";
import { Button } from "../ui/button";
import { useRef } from "react";

const Topbar = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const handleClick = () => {
    if (divRef.current) {
      divRef.current.style.display = "none";
    }
  };

  return (
    <div
      ref={divRef}
      className="relative flex items-center justify-center w-full h-12 gap-2 sm:h-8 bg-card-foreground text-background max-sm:flex-col"
    >
      <p className="max-sm:text-xs">
        Sign up to {""}
        <span className="font-bold">GET 20% OFF </span>
        for your first order.
      </p>
      <span className="underline cursor-pointer max-sm:text-xs">
        Sign up now
      </span>

      <Button
        className="absolute right-0"
        variant={"ghost"}
        size={"icon"}
        onClick={handleClick}
      >
        <X />
      </Button>
    </div>
  );
};

export default Topbar;
