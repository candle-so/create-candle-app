import { StarHalfIcon, StarIcon } from "lucide-react";
import { Availability } from "./_availability";
import { currencify } from "@/lib/currencify";
import { IProduct } from "schema-interface";
import { Portfolio } from "./_portfolio";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { formatDate } from "@/lib/time";
import { SimilarProducts } from "./_similar_products";

const reviews = {
  stats: {
    rating: 4.5,
    count: 786,
    tally: [647, 114, 22, 3, 0],
  },
  comments: [
    {
      user: {
        name: "Jane Cooper",
        image: "/images/avatar-1.png",
      },
      stars: 5,
      message: "Hard worker, easy to work with, great communication, and the best of both worlds.",
      created: "2022-01-01",
    },
  ],
};

export const Product = ({ product }: { product: IProduct }) => {
  const setRatingStars = (rating: number) => {
    const stars = [];
    const wholeStars = Math.floor(reviews.stats.rating);
    for (let i = 0; i < wholeStars; i++) {
      stars.push(<StarIcon key={i} size={20} className="text-cndl-primary-600" />);
    }
    if (rating % 1 > 0) stars.push(<StarHalfIcon key={wholeStars} size={20} className="text-cndl-primary-600" />);

    return stars;
  };

  return (
    <div className="pb-16 bg-white">
      <div className="container max-w-7xl pt-8 pb-16">
        <div className="flex items-center font-bold space-x-2 capitalize">
          <div className="text-cndl-neutral-700">services</div>
          <div className="text-cndl-neutral-700">/</div>
          <div className="text-cndl-dark">{product.category}</div>
        </div>
        <div className="flex space-x-16">
          <div className="flex-1 ">
            <h1 className="font-pacifico text-3xl py-4">{product.name}</h1>
            <p className="text-cndl-dark">{product.description}</p>
            <div className="pt-4 pb-8 flex space-x-2 border-b border-cndl-neutral-100">
              {reviews.stats.rating && <div className="flex items-center space-x-1">{setRatingStars(reviews.stats.rating)}</div>}
              <div className="text-cndl-primary-800 flex bg-cndl-primary-50 rounded-full text-xs space-x-1 px-2 py-1 font-bold">
                <StarIcon size={16} className="text-cndl-accent-500" />
                <span>{reviews.stats.rating}</span>
              </div>
            </div>
            <div className="pt-6 pb-8 space-y-4">
              <div className="">Choose a subscription package:</div>
              <div className="flex items-center space-x-2">
                <div className="text-2xl font-bold space-x-2 px-4 py-1 rounded-full bg-cndl-primary-50 ring-2 ring-offset-2 ring-cndl-primary-100">
                  <span>{currencify(product.price / 100)}</span>
                  {product.cycle ? <span className="text-cndl-primary-600 text-sm font-bold">{product.cycle}</span> : ""}
                </div>
              </div>
            </div>

            <div className="py-4 space-y-2">
              <h3 className="text-xl font-pacifico">Teams</h3>
              <div>
                <p>
                  Hire me pre-assembled as part of these <span className="font-pacifico">Teams</span>.
                </p>
                <p className="text-cndl-neutral-600 text-sm italic">
                  <span className="capitalize">{product.user?.name || product.user?.username}</span> is not currently part of any Teams.
                </p>
              </div>
            </div>
          </div>
          <Availability />
        </div>
      </div>
      <div className="bg-gradient-to-b from-cndl-primary-50 to-white pt-16 pb-16 space-y-4 min-h-80">
        <Portfolio />
      </div>
      <div className="bg-white">
        <div className="container max-w-7xl space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-pacifico">Reviews</h3>
          </div>
          <div className="flex space-x-8">
            <div className="w-2/5 rounded-xl p-4 bg-cndl-light">
              <div className="flex items-center space-x-3">
                <div className="flex items-start space-x-2">
                  <div className="text-5xl font-pacifico leading-3 pt-1">{reviews.stats.rating}</div>
                  <div className="text-xs leading-tight">
                    Out of <br />5 stars
                  </div>
                </div>
                <div className="flex items-center space-x-1">{setRatingStars(reviews.stats.rating)}</div>
              </div>
              <div className="py-4 space-y-2">
                {reviews.stats.tally.map((tally, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="text-sm font-bold">{5 - index}</div>
                    <div className="w-full h-2 bg-cndl-primary-50 rounded-full">
                      <div className="bg-cndl-primary-200 h-2 rounded-full" style={{ width: `${(tally / reviews.stats.count) * 100}%` }}></div>
                    </div>
                    <div className="text-sm">{tally}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-3/5 rounded-xl p-4 bg-cndl-light">
              {reviews.comments.map((comment, index) => (
                <div key={index} className="flex space-x-6 items-start">
                  <div className="pt-1">
                    <Avatar className="w-10 h-10 ring-4 ring-offset-2 ring-cndl-primary-50">
                      <AvatarImage src={comment.user.image} alt={comment.user.name} />
                      <AvatarFallback className="bg-cndl-primary-200 text-cndl-primary-700 font-bold">
                        {comment.user.name
                          .split(" ")
                          .map((s: any) => s[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="">
                      <h4 className="text-lg font-bold">{comment.user.name}</h4>
                      <div className="text-xs text-cndl-neutral-800">{formatDate({ dateString: comment.created }).relativeTimeLong}</div>
                    </div>
                    <p className="max-w-lg pr-8 text-sm">{comment.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container max-w-7xl space-y-8 pt-24">
        <h3 className="text-2xl font-pacifico">Similar Builders</h3>
        <SimilarProducts />
      </div>
    </div>
  );
};
