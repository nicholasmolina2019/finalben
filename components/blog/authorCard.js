import Image from "next/image";
import { PortableText } from "@lib/sanity";
import GetImage from "@utils/getImage";
import Link from "next/link";

export default function AuthorCard({ author }) {
  const imageProps = author?.image ? GetImage(author.image) : null;
  return (
    <div className="px-8 py-8 mt-3 text-gray-500 rounded-2xl bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
      <div className="flex flex-wrap items-start sm:space-x-6 sm:flex-nowrap">
        <div className="relative flex-shrink-0 w-24 h-24 mt-1 ">
          {imageProps && (
            <Link href={`/author/${author.slug.current}`}>
              <a>
                <Image
                  src={imageProps.src}
                  loader={imageProps.loader}
                  blurDataURL={imageProps.blurDataURL}
                  objectFit="cover"
                  alt={author.name}
                  placeholder="blur"
                  layout="fill"
                  className="rounded-full"
                />
              </a>
            </Link>
          )}
        </div>
        <div>
          <div className="mb-3">
            <h4 className="text-lg font-medium text-gray-800 dark:text-gray-300">
             {author.name}
            </h4>
          </div>
          <div>
            {author.bio && <PortableText value={author.bio} />}
          </div>
          <div className="mt-3">
            <Link href={`/author/${author.slug.current}`}>
              <a className="py-2 text-sm text-blue-600 rounded-full dark:text-blue-500 bg-brand-secondary/20 ">
                View Profile
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
