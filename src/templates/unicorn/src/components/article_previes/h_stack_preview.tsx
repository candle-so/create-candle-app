import Image from "next/image";
import Link from "next/link";

export const HStackPreview = ({ article }: { article: any }) => {
  return (
    <div className="flex space-x-6" key={article.url}>
      <div className="w-1/2">
        <div className="h-full overflow-hidden w-full relative">
          <Image className="w-full rounded-xs overflow-hidden" layout="fill" objectFit="cover" objectPosition={article?.imagePosition || "center"} src={article.image} alt={article.title} />
        </div>
      </div>
      <div className="w-1/2">
        <div className="text-xs text-cndl-primary-500 flex space-x-2 pb-4">
          <span>{article.author.name}</span>
          <span>•</span>
          <span>{article.date}</span>
        </div>
        <Link href={`/blog/${article.slug}`}>
          <div className="font-bold">{article.title}</div>
        </Link>
        <div className="">{article.excerpt}</div>
        <div className="py-2 space-x-2">
          {article.tags.map((tag: string, index: number) => (
            <span key={index} className="text-xs text-cndl-accent-500 bg-cndl-accent-50 rounded-xl px-3 py-1.5">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
