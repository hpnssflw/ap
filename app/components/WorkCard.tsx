import Image from "next/image";

interface WorkCardProps {
  title: string;
  description: string;
  tags?: string[];
  url?: string;
  image: string;
}

export default function WorkCard({
  title,
  description,
  tags,
  url,
  image,
}: WorkCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-[4px]   bg-black backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:shadow-lg hover:shadow-white/10">
      <div className="relative h-36 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      <div className="p-1.5">
        <h4 className=" mb-2 text-center ">
          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline transition-colors text-center mx-auto w-fit"
            >
              {title}
            </a>
          ) : (
            title
          )}
        </h4>
        {/* <p className="mb-4 ">
          {description}
        </p> */}

        {/* {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        )} */}
      </div>
    </div>
  );
}
