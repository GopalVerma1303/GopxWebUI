import AvatarStack from "@/components/ui/avatar-stack";

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
      <AvatarStack avatars={avatars} />
    </div>
  );
};

export default GopxUserStack;
