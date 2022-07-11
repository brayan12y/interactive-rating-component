import { Logo } from "../../icons/icons";
import RatingItem from "../../RatingItem";

const ARRAY_RATING = [1, 2, 3, 4, 5] as const;

interface Props {
  rating: number;
  setRating: Function;
  setSendDataRating: Function;
}

const RaitingContent = ({ setSendDataRating, rating, setRating }: Props) => {
  const handleSumbint = () => {
    if (rating > 0) {
      setSendDataRating(true);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center mt-4 mb-3 w-10 h-10 rounded-full bg-light-grey">
        {Logo}
      </div>

      <h2 className="font-normal mt-2 text-xl text-white">How did we do?</h2>
      <p className="font-normal text-xs mt-1 mb-5 text-gray">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="flex">
        {ARRAY_RATING.map((number) => (
          <RatingItem
            key={`${number}-rating`}
            setRating={setRating}
            numberRating={number}
            rating={rating}
          />
        ))}
      </div>
      <input
        className="bg-orange text-sm hover:bg-white hover:text-orange transition-all text-white py-2 mt-5 mb-2 rounded-3xl w-[100%]"
        type="submit"
        value="SUBMIT"
        onClick={handleSumbint}
      />
    </div>
  );
};

export default RaitingContent;
