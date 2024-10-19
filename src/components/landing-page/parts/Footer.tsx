import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const shopLinks = [
  {
    name: "All Collections",
    href: "#",
    idx: 0,
  },
  {
    name: "Winter Collection",
    href: "#",
    idx: 1,
  },
  {
    name: "Discounts",
    href: "#",
    idx: 2,
  },
];

const PaymentMethods = [
  {
    name: "Credit Card / Credit card",
    href: "/",
    idx: 0,
  },
  {
    name: "UPI",
    href: "/",
    idx: 1,
  },
  {
    name: "Paypal",
    href: "/",
    idx: 2,
  },
];

const CompanyLinks = [
  {
    name: "About Us",
    href: "/",
    idx: 0,
  },
  {
    name: "Contact",
    href: "/",
    idx: 1,
  },
  {
    name: "Affiliates",
    href: "/",
    idx: 2,
  },
];

const SupportLinks = [
  {
    name: "FAQs",
    href: "/",
    idx: 0,
  },
  {
    name: "Cookie Policy",
    href: "/",
    idx: 1,
  },
  {
    name: "Terms of Use",
    href: "/",
    idx: 2,
  },
];

const Footer = ({ className }: { className?: string }) => {
  return (
    <div className="pt-5 bg-muted">
      <div className={cn(" w-full pb-10", className)}>
        {/* Desktop Nav */}
        <div className="items-center hidden mx-auto font-bold lg:flex justify-evenly md:max-w-screen-2xl">
          <div className="">
            <div className="flex flex-col gap-1 max-w-[20rem] mt-10 text-xl">
              <p>
                Buy High Quality Products from the best brands in the world.
              </p>
            </div>
          </div>
          <div className="">
            <h1 className="pt-8 pb-4 text-2xl font-extrabold">Shop </h1>
            <div className="flex flex-col gap-1">
              {shopLinks.map((link) => (
                <a
                  href={link.href}
                  className="hover:underline underline-offset-2 text-muted-foreground w-fit"
                  key={link.idx}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="">
            <h1 className="pt-8 pb-4 text-2xl font-extrabold">Company</h1>
            <div className="flex flex-col gap-1">
              {CompanyLinks.map((link) => (
                <a
                  href={link.href}
                  className="hover:underline underline-offset-2 text-muted-foreground w-fit"
                  key={link.idx}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="">
            <h1 className="pt-8 pb-4 text-2xl font-extrabold">Support</h1>
            <div className="flex flex-col gap-1">
              {SupportLinks.map((link) => (
                <a
                  href={link.href}
                  className="hover:underline underline-offset-2 text-muted-foreground w-fit"
                  key={link.idx}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="">
            <h1 className="pt-8 pb-4 text-2xl font-extrabold">
              Payment Methods{" "}
            </h1>
            <div className="flex flex-col gap-1">
              {PaymentMethods.map((link) => (
                <a
                  href={link.href}
                  className="hover:underline underline-offset-2 text-muted-foreground w-fit"
                  key={link.idx}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="flex flex-col justify-center px-3 pb-10 lg:hidden">
          <div className="">
            <div className="flex flex-col gap-1 px-5 mt-20 font-bold text-center text-muted-foreground">
              <p className="text-lg sm:text-3xl md:text-4xl">
                Buy High Quality Products from the best brands in the world.
              </p>
            </div>
          </div>
          <Accordion
            className="px-3 mt-2 rounded-md bg-secondary "
            type="single"
            collapsible
          >
            <AccordionItem value="item-2">
              <AccordionTrigger>Shop</AccordionTrigger>
              {shopLinks.map((link) => (
                <AccordionContent
                  className="px-4 py-2 mb-3 rounded-md bg-background "
                  key={link.idx}
                >
                  <a
                    href={link.href}
                    className="hover:underline underline-offset-2 w-fit"
                  >
                    {link.name}
                  </a>
                </AccordionContent>
              ))}
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Company</AccordionTrigger>
              {CompanyLinks.map((link) => (
                <AccordionContent
                  className="px-4 py-2 mb-3 rounded-md bg-background "
                  key={link.idx}
                >
                  <a
                    href={link.href}
                    className="hover:underline underline-offset-2 w-fit"
                  >
                    {link.name}
                  </a>
                </AccordionContent>
              ))}
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Support</AccordionTrigger>
              {SupportLinks.map((link) => (
                <AccordionContent
                  className="px-4 py-2 mb-3 rounded-md bg-background "
                  key={link.idx}
                >
                  <a
                    href={link.href}
                    className="hover:underline underline-offset-2 w-fit"
                  >
                    {link.name}
                  </a>
                </AccordionContent>
              ))}
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Paymenty methods</AccordionTrigger>
              {PaymentMethods.map((link) => (
                <AccordionContent
                  className="px-4 py-2 mb-3 rounded-md bg-background "
                  key={link.idx}
                >
                  <a
                    href={link.href}
                    className="hover:underline underline-offset-2 w-fit"
                  >
                    {link.name}
                  </a>
                </AccordionContent>
              ))}
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <Separator className="mx-auto max-w-screen-2xl bg-primary" />
      <div className="py-5 text-center text-muted-foreground">
        CopyRight &copy;
        {new Date().getFullYear()} Nostra. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
