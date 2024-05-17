import { Carousel } from '@material-tailwind/react';

interface CarouselDefaultProps {
  url: string[];
}

export function CarouselDefault({ url }: CarouselDefaultProps) {
  return (
    <Carousel
      className="h-[244px]"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      {url.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={'carousel image'}
          className="object-cover w-full h-full"
        />
      ))}
    </Carousel>
  );
}
