'use client';


import * as React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';


interface ProductImage {
  src: string;
  alt: string;
  title?: string;
}


const productImages: ProductImage[] = [
  {
    src: '/images/products/handbag_photo.jpg',
    alt: 'Luxury Handbag Advertisement',
    title: 'Fashion',
  },
  {
    src: '/images/products/nike_shoes_photo.jpg',
    alt: 'Nike Shoes Product Ad',
    title: 'Footwear',
  },
  {
    src: '/images/products/pepsi_photo_01.jpg',
    alt: 'Pepsi Beverage Campaign',
    title: 'Beverage',
  },
  {
    src: '/images/products/shoes_product_02.jpg',
    alt: 'Premium Shoes Showcase',
    title: 'Lifestyle',
  },
];


export function ProductCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );


  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{
        align: 'start',
        loop: true,
      }}
    >
      <CarouselContent>
        {productImages.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-0.5 sm:p-1">
              <Card className="border-0 bg-transparent shadow-none">
                <CardContent className="flex aspect-video items-center justify-center p-0 relative overflow-hidden rounded-xl sm:rounded-2xl">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  />
                  {image.title && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 sm:p-4">
                      <span className="text-white font-bold text-sm sm:text-base lg:text-lg">
                        {image.title}
                      </span>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-1 sm:left-2 w-8 h-8 sm:w-10 sm:h-10" />
      <CarouselNext className="right-1 sm:right-2 w-8 h-8 sm:w-10 sm:h-10" />
    </Carousel>
  );
}
