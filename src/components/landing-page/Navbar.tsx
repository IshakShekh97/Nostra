import { ChevronDown, Menu, Search, ShoppingCart, User2 } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { Input } from "../ui/input";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { ThemeSwitcher } from "../theme-components/ThemeSwitcher";

const NavLinks = [
  {
    name: "Most Wanted",
    href: "/wanted",
  },
  {
    name: "New Arrival",
    href: "/new-arrival",
  },
  {
    name: "Brands",
    href: "/brands",
  },
];

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

const Navbar = () => {
  return (
    <header className="sticky top-0 left-0 z-50 flex items-center justify-between max-w-screen-[1600px] px-3 py-3 mx-auto sm:px-10 md:px-14 lg:px-20 bg-background/50 backdrop-blur-lg ">
      <h1 className="text-4xl font-black">Nostra</h1>

      {/* Desktop Nav */}
      <div className="flex items-center justify-center gap-2 max-lg:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant={"outline"}>
              Shop <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {shopLinks.map((link, idx) => (
              <DropdownMenuItem key={idx}>{link.name}</DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        {NavLinks.map((link, idx) => (
          <Button key={idx} variant={"ghost"}>
            {link.name}
          </Button>
        ))}
      </div>
      <div className="flex items-center justify-center gap-2 max-lg:hidden">
        <div className="relative">
          <Search className="absolute top-2.5 left-2 size-5" />
          <Input placeholder="Search" className="pl-10" />
        </div>
        <Button variant={"ghost"} size={"icon"}>
          <ShoppingCart className="size-5" />
        </Button>
        <Button variant={"ghost"} size={"icon"}>
          <User2 className="size-5" />
        </Button>
      </div>

      <div className="relative lg:hidden max-sm:hidden">
        <Search className="absolute top-2.5 left-2 size-5" />
        <Input placeholder="Search" className="pl-10" />
      </div>

      {/* Mobile Nav */}
      <div className="flex items-center justify-center gap-2 lg:hidden">
        <Button variant={"secondary"} size={"icon"}>
          <ShoppingCart className="size-5" />
        </Button>
        <Sheet>
          <SheetTrigger className="lg:hidden">
            <Button variant={"secondary"} size={"icon"}>
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col items-center justify-between h-full pt-20">
              <div className="flex flex-col items-start w-full gap-3 ">
                <DropdownMenu>
                  <DropdownMenuTrigger className="w-full">
                    <Button variant={"outline"} className="w-full">
                      Shop <ChevronDown />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center">
                    {shopLinks.map((link, idx) => (
                      <DropdownMenuItem key={idx}>{link.name}</DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                {NavLinks.map((link, idx) => (
                  <Button
                    key={idx}
                    variant={"ghost"}
                    className="w-full border "
                  >
                    {link.name}
                  </Button>
                ))}
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center justify-center">
                  <Button variant={"ghost"} size={"icon"}>
                    <User2 className="size-5" />
                  </Button>
                  <p>User Name</p>
                </div>
                <ThemeSwitcher />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
