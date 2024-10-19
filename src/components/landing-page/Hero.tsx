import { Search } from "lucide-react";
import BrandFeatures from "./parts/BrandFeatures";
import BrandsStrip from "./parts/BrandsStrip";
import CuratedPicks from "./parts/CuratedPicks";
import FeaturedProducts from "./parts/FeaturedProducts";
import Highlight from "./parts/Highlight";
import ImageCarousel from "./parts/ImageCarousel";
import NewsLetter from "./parts/NewsLetter";
import Offer from "./parts/Offer";
import { Input } from "../ui/input";

const Hero = () => {
  return (
    <div>
      <div className="relative sm:hidden ">
        <Search className="absolute top-2.5 left-2 size-5" />
        <Input
          placeholder="Search"
          className="pl-10 border-2 border-foreground hover:border-none focus:border-none"
        />
      </div>

      <ImageCarousel />
      <BrandsStrip />
      <Highlight />
      <BrandFeatures />
      <CuratedPicks />
      <FeaturedProducts />
      <Offer />
      <NewsLetter />
    </div>
  );
};

export default Hero;
