import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";

const Teaser = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)} className="bg-white-half">
      <div className="pb-6 pt-16 container mx-auto">
        <h2 className="text-6xl font-bold font-serif text-primary mb-4">
          {blok.headline}
        </h2>
        {/* Container with explicit height and overflow handling */}
        <div className="relative w-full" style={{ height: '300px', overflow: 'hidden' }}>
          <Image
            src={blok.image.filename}
            alt={blok.image.alt}
            layout="fill" // Fill the container
            objectFit="cover" // Cover the container, cropping as needed
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Teaser;
