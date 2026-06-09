import Image from "next/image";
import { ArticleProps } from "@/types";
import Link from "next/link";

export default function ArticleCard({
  title,
  date,
  author,
  cover_image,
  slug,
}: ArticleProps) {
  return (
    <article className="group">
      <Link
        href={`/articles/${slug}`}
        className="p-3 rounded-3xl bg-white grid grid-cols-1 md:grid-cols-12 gap-3"
      >
        <div className="p-6 pr-16 rounded-2xl col-span-7 flex flex-col justify-between group-hover:bg-lemon-green">
          <header>
            <time dateTime={date} className="text-sm mb-5 block">
              {date}
            </time>
            <h3 className="text-3xl font-bold leading-[1.3] font-bricolage-grotesque">
              {title}
            </h3>
          </header>
          <div className="flex items-center">
            <Image
              src={author?.avatar?.permalink || "/placeholder.jpg"}
              alt="Author name"
              width={800}
              height={600}
              className="rounded-full w-10 h-10 object-cover mr-4"
            />
            <div>
              <p className="font-semibold">{author?.name}</p>
              <p className="text-sm text-muted-foreground">
                {author?.position?.label}
              </p>
            </div>
          </div>
        </div>
        <Image
          src={cover_image?.permalink || "/placeholder.jpg"}
          alt="Soursop Tree"
          width={800}
          height={600}
          className="rounded-2xl aspect-6/7 w-full object-cover col-span-5"
        />
      </Link>
    </article>
  );
}
