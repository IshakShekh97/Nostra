import { Button } from "@/components/ui/button";
import { IndianRupee, ShoppingCart } from "lucide-react";

const FeaturedProductsConatnts = [
  {
    title: "Printed T-shirt",
    price: 599,
    src: "/featured/1.jpg",
  },
  {
    title: "Printed T-shirt",
    price: 599,
    src: "/featured/2.jpg",
  },
  {
    title: "Printed T-shirt",
    price: 599,
    src: "/featured/3.jpg",
  },
  {
    title: "Printed T-shirt",
    price: 599,
    src: "/featured/4.jpg",
  },
  {
    title: "Printed T-shirt",
    price: 599,
    src: "/featured/5.jpg",
  },
  {
    title: "Printed T-shirt",
    price: 599,
    src: "/featured/6.jpg",
  },
];

const FeaturedProducts = () => {
  return (
    <div className="pb-20">
      <p className="text-3xl font-extrabold">Featured Products</p>

      <div className="pt-10">
        <div className="flex w-full py-5 overflow-x-auto gap-x-5">
          {FeaturedProductsConatnts.map((product, index) => {
            return (
              <>
                <div className="bg-muted md:h-[30rem] h-[22rem] rounded-md overflow-hidden flex flex-col md:w-[28rem] w-[18rem]  shrink-0">
                  <div className="overflow-hidden bg-red-400 " key={index}>
                    <img
                      src={product.src}
                      alt={product.title}
                      className="object-contain w-full"
                    />
                  </div>
                  <div className="flex items-center justify-between px-5 py-3">
                    <div className="flex flex-col ">
                      <p>{product.title}</p>
                      <span className="flex items-center gap-2">
                        <IndianRupee className="size-4" />
                        <p>{product.price}</p>
                      </span>
                    </div>
                    <Button
                      variant={"outline"}
                      size={"icon"}
                      onClick={() => {
                        alert("Add to cart clicked");
                      }}
                    >
                      <ShoppingCart />
                    </Button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
