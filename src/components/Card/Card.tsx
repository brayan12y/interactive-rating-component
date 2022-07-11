import { useState } from "react";
import MessageContent from "./CardContent/MessageContent";
import RaitingContent from "./CardContent/RaitingContent";

const Card = () => {
  const [rating, setRating] = useState(0);
  const [sendDataRating, setSendDataRating] = useState(false);

  return (
    <div className="bg-gradient-to-b from-dark-blue to-blue-end-gradient p-5 rounded-3xl max-w-[320px]">
      {!sendDataRating ? (
        <RaitingContent
          rating={rating}
          setRating={setRating}
          setSendDataRating={setSendDataRating}
        />
      ) : (
        <MessageContent rating={rating} />
      )}
    </div>
  );
};
export default Card;
