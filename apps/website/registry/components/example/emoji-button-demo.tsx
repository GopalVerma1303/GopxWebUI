import BubbleButton from "@/components/ui/emoji-button";
import { HeartIcon } from "lucide-react";

export default function BubbleButtonDemo() {
  return (
    <div className="flex md:flex-row flex-col items-center gap-16 md:py-8">
      <BubbleButton
        icon={<HeartIcon className="w-3 h-3 fill-current" />}
        emergingInterval={80}
        color={"#FC342C"}
      >
        <div className="flex items-center gap-2 w-full h-full">
          <div className="group-hover:animate-[heartbeat_0.8s_ease-in-out_infinite] transition duration-300">
            <HeartIcon className="w-5 h-5 fill-current" />
          </div>
          <span>Sponsor</span>
        </div>
      </BubbleButton>
    </div>
  );
}
