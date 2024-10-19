const brands = [
  {
    src: "/brands/1.jpg",
    alt: "brand1",
  },
  {
    src: "/brands/2.jpg",
    alt: "brand2",
  },
  {
    src: "/brands/3.jpg",
    alt: "brand3",
  },
  {
    src: "/brands/4.jpg",
    alt: "brand4",
  },
];

const BrandsStrip = () => {
  return (
    <div className="py-5">
      <p className="text-3xl font-extrabold">Brands</p>
      <div className="pt-10 pb-20">
        <div className="flex flex-wrap items-center justify-center gap-x-36 gap-y-3 ">
          {brands.map((brand, index) => (
            <img
              key={index}
              src={brand.src}
              alt={brand.alt}
              className="object-contain size-20 bg-blend-color-burn"
            />
          ))}
          {brands.map((brand, index) => (
            <img
              key={index}
              src={brand.src}
              alt={brand.alt}
              className="object-contain size-20 bg-blend-color-burn max-md:hidden "
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandsStrip;
