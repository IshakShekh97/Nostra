import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NewsLetter = () => {
  return (
    <div className="py-20">
      <div className="flex flex-col items-center justify-center max-w-[800px]  mx-auto">
        <h2 className="text-4xl font-bold text-center text-primary">
          Subscribe to our newsletter to get updates to our latest collections
        </h2>
        <p className="mt-2 text-center text-muted-foreground">
          Get <span className="font-sans"> 20% </span>on you first order just by
          subscribing to our newsletter
        </p>
        <div className="flex justify-center gap-2 mt-6 mb-3 max-sm:flex-col">
          <Input
            required
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 border border-gray-300 max-w-96 rounded-l-md focus:outline-none"
          />
          <Button>Subscribe</Button>
        </div>
        <div className="flex flex-col items-center justify-center max-sm:text-center text-muted-foreground">
          <span>You will be able to unsubscribe at any time</span>
          <span>
            Read our Privacy Policy{" "}
            <span className="font-bold underline text-foreground">here</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
