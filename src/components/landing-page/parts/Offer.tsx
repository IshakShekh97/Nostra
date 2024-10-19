import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

const Offer = () => {
  return (
    <div className="pb-20">
      <div className="w-full max-w-screen-xl mx-auto overflow-hidden rounded-md bg-muted-foreground text-background lg:h-96">
        <div className="flex flex-wrap items-center justify-between ">
          <div className="w-full lg:w-1/2">
            <img
              src="/images/offer.jpg"
              alt="offer"
              className="object-contain w-full lg:-ml-10 lg:h-96"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-full space-y-5 max-lg:text-center max-lg:py-5 lg:items-start lg:w-1/2">
            <span>Limited Offer</span>
            <h2 className="text-2xl font-bold md:text-4xl lg:text-4xl">
              <span className="font-sans font-black "> 35% </span>
              off only in this friday and get Special Gifts
            </h2>
            <Button className="px-10 py-6 ">
              Grab It Now
              <MoveRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
