import StackedAvatars from "./StackedAvatars";
import { FaStar } from "react-icons/fa";

const GopxUserStack: React.FC = () => {
  const avatars = [
    {
      src: "/assets/avatars/1.jpeg",
      alt: "Avatar 1",
    },
    {
      src: "/assets/avatars/2.jpeg",
      alt: "Avatar 2",
    },
    {
      src: "/assets/avatars/3.jpeg",
      alt: "Avatar 3",
    },
    {
      src: "/assets/avatars/4.jpeg",
      alt: "Avatar 4",
    },
    {
      src: "/assets/avatars/5.jpeg",
      alt: "Avatar 5",
    },
    {
      src: "/assets/avatars/6.jpeg",
      alt: "Avatar 6",
    },
  ];

  return (
    <div className="my-6 relative  flex-col">
      <StackedAvatars avatars={avatars} />
      <div className="absolute -bottom-1 left-[250px] transform -translate-x-1/2 w-1/2 text-center">
        <div className="flex justify-center mb-0">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className="text-yellow-400 mx-1" />
          ))}
        </div>
        <span className="inline-block transform dark:text-white/50 text-black/50 text-lg font-caveat font-bold ">
          1k+ fingers tapped!
        </span>
      </div>
    </div>
  );
};

export default GopxUserStack;
