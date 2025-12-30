'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import Autoplay from 'embla-carousel-autoplay';

import { Button } from '@/components/ui/button';
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

const Hero = () => {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const carouselLength = useMemo(() => api?.scrollSnapList().length, [api]);

  useEffect(() => {
    if (!api) {
      return;
    }

    const updateCurrent = () => setCurrent(api.selectedScrollSnap());
    updateCurrent();

    api.on('select', updateCurrent);

    return () => {
      api.off('select', updateCurrent);
    };
  }, [api]);

  return (
    <section className="h-screen p-8 pt-[70px]">
      <div className="grid h-full grid-cols-[1fr_auto] place-items-center gap-4">
        <div className="space-y-4">
          <h1 className="text-5xl leading-normal font-bold">
            Explore Innovative{' '}
            <span className="text-primary-500 relative">
              Healthcare{' '}
              <span
                className="absolute -bottom-2 left-0 inline-block w-full"
                aria-hidden="true"
              >
                <svg
                  width="235"
                  height="14"
                  viewBox="0 0 235 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full"
                >
                  <path
                    d="M0.183594 13C91.5781 -4.06716 142.792 -1.89606 234.184 13"
                    stroke="#208E90"
                    strokeWidth="2"
                  />
                </svg>
              </span>
            </span>{' '}
            Solutions that Truly Resonate with Everyone.
          </h1>
          <p className="text-black-300">
            We connect you with dedicated medical experts, mental health
            professionals, and supportive community services, delivering
            whole-person care for every stage of life and every walk of life.
          </p>
          <Button asChild className="bg-primary-500 text-white">
            <Link href="/sign-up">Let&apos;s get started</Link>
          </Button>
        </div>
        <div className="relative max-w-[667px]">
          <Carousel
            setApi={setApi}
            opts={{ loop: true }}
            plugins={[plugin.current]}
          >
            <CarouselContent>
              {Array.from({ length: 3 }).map((_, idx) => {
                const imageSrc = `/doctors/hero-${idx + 1}.webp`;

                return (
                  <CarouselItem key={imageSrc}>
                    <Image
                      src={imageSrc}
                      width={667}
                      height={643}
                      alt=""
                      aria-hidden="true"
                      loading="eager"
                    />
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>

          {/* Carousel pagination */}
          <div
            className="absolute bottom-4 left-4 z-10 flex items-center gap-2"
            aria-hidden="true"
          >
            {Array.from({ length: carouselLength ?? 0 }).map((_, idx) => (
              <div
                key={idx}
                className={cn(
                  'h-2.5 w-20 rounded-full bg-[#a0a0a0]/50',
                  current === idx && 'bg-primary-500',
                )}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };
