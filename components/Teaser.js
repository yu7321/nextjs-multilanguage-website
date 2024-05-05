import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";

const Teaser = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className="bg-white-half">
      <div className="pb-6 pt-16 container mx-auto">
        <h2 className="text-6xl font-bold font-serif text-primary mb-4">
          {blok.headline}
        </h2>
        <div className="relative w-full h-96">
            <Image
            src={blok.image.filename}
            alt={blok.image.alt}
              layout="fill"
              objectFit="cover"
            />
          </div>
      </div>
    </div>
  );
};

export default Teaser;
