import cn from "classnames";

interface Props {
  setRating: Function;
  numberRating: number;
  rating: number;
}

const RatingItem = ({ setRating, numberRating, rating }: Props) => {
  console.log("numberRating === rating", numberRating === rating);
  return (
    <div
      className={cn(
        {
          "!bg-orange !text-white": numberRating === rating
        },
        "flex items-center justify-center w-10 h-10 rounded-full ml-2 mr-2 first:ml-0 last:mr-0 bg-shadow-blue transition-all hover:bg-medium-grey text-gray cursor-pointer hover:text-white",
      )}
      role={"presentation"}
      onClick={() => setRating(numberRating)}
    >
      {numberRating}
    </div>
  );
};

export default RatingItem;
