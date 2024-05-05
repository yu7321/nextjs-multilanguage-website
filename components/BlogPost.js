import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import Image from "next/image";

const BlogPost = ({ blok }) => {
  // Convert protocol-relative URL to absolute URL
  const imageUrl = blok.image.startsWith("//") ? `https:${blok.image}` : blok.image;

  return (
    <div {...storyblokEditable(blok)}>
      <div className="bg-white-half w-full">
        <div className="max-w-3xl mx-auto text-center pt-20 flex flex-col items-center">
          <h1 className="text-5xl font-bold font-serif text-primary tracking-wide">
            {blok.title}
          </h1>
          <p className="text-gray-500 text-lg max-w-lg">{blok.intro}</p>
          <div className="w-full bg-gray-300 my-16 relative">
            <Image
              src={imageUrl}
              alt={blok.title}
              layout="responsive"
              width={800} // Specify the width of the image
              height={600} // Specify the height of the image
            />
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto text-center pt-20 flex flex-col items-center">
        <div className="leading-relaxed text-xl text-left text-gray-800 drop-cap">
          {render(blok.long_text)}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
