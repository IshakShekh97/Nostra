import { Button } from "@/components/ui/button";
import { BellPlus, HandCoins, VenetianMask, Zap } from "lucide-react";

const BrandFeaturesContants = [
  {
    icon: HandCoins,
    title: "Original Products",
    description:
      "We Provide Money Back Guarantee if the product is not original.",
  },
  {
    icon: VenetianMask,
    title: "Stisfaction Guarantee",
    description: "Exchange the product You have bought if it does not fit you.",
  },
  {
    icon: BellPlus,
    title: "New Arrivals Every Week",
    description: "We Update our collection every week with new products.",
  },
  {
    icon: Zap,
    title: "Fast and Free Delivery",
    description: "We Offer fast and free shipping for our loyal customers.",
  },
];

const BrandFeatures = () => {
  return (
    <div className="pt-10 mb-10">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {BrandFeaturesContants.map((feature, index) => (
          <div key={index} className="flex flex-col max-w-sm p-4 space-y-3">
            <Button variant={"secondary"} size={"icon"}>
              <feature.icon className="size-7" />
            </Button>
            <h4 className="text-xl font-bold">{feature.title}</h4>
            <p className="text-sm text-muted-foreground">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandFeatures;
