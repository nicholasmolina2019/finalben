import SearchInput from "@components/ui/search";
import GetImage from "@utils/getImage";
import Image from "next/image";
import Link from "next/link";
import Label from "@components/ui/label";
import DateTime from "@components/ui/time";

export default function Sidebar(props) {
  return (
    <div className="mt-5 font-sans">
      <Searchbar />

      {props.related && (
        <RelatedPosts
          related={props.related}
          pathPrefix={props.pathPrefix}
        />
      )}
      {props.categories && (
        <Categories categories={props.categories} />
      )}
    </div>
  );
}

function Searchbar() {
  return (
    <div>
      <h3 className="text-2xl font-bold dark:text-white">
        Search Posts
      </h3>
      <form action="/search" method="GET" className="mt-4">
        <SearchInput placeholder="Search" />
      </form>
    </div>
  );
}

function RelatedPosts({ related, pathPrefix }) {
  return (
    <div className="mt-10">
      <h3 className="text-2xl font-bold dark:text-white">Related</h3>
      <div className="grid gap-6 mt-6">
        {related.slice(0, 3).map((item, index) => {
          const imageProps = item?.image
            ? GetImage(item?.image)
            : null;
          return (
            <Link
              key={index}
              href={`/post/${pathPrefix ? `${pathPrefix}/` : ""}${
                item.slug.current
              }`}>
              <a>
                <div className="flex gap-5">
                  <div className="relative w-24 h-20 overflow-hidden rounded-md shrink-0">
                    <Image
                      src={imageProps.src}
                      loader={imageProps.loader}
                      blurDataURL={imageProps.blurDataURL}
                      alt={item.title || "Thumbnail"}
                      placeholder="blur"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      <DateTime date={item.date} />
                    </p>
                  </div>
                </div>
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function Categories({ categories }) {
  // console.log(categories);
  return (
    <div className="mt-10">
      <h3 className="text-2xl font-bold dark:text-white">
        Categories
      </h3>
      <ul className="grid mt-4">
        {categories.map((item, index) => (
          <li key={item._id}>
            <Link href={`/category/${item.slug.current}`}>
              <a className="flex items-center justify-between py-2">
                <h4 className="text-gray-800 dark:text-gray-400">
                  {item.title}
                </h4>
                <Label pill={true} color={item.color}>
                  {item.count}
                </Label>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
