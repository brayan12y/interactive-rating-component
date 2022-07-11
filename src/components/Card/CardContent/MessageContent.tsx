import { Message } from "../../icons/icons";

interface Props {
  rating: number;
}

const MessageContent = ({ rating }: Props) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="my-6">{Message}</div>
      <span className="text-sm text-orange bg-dark-blue rounded-2xl px-4 py-1">You selected {rating} out of 5</span>
      <span className="text-xl text-white mt-3">Thank you!</span>
      <p className="text-sm text-gray text-center mx-2 my-1">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};

export default MessageContent;
