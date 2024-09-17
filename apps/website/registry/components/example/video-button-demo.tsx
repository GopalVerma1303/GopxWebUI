import VideoButton from "@/components/ui/video-button";

export default function VideoButtonDemo() {
  return (
    <VideoButton videoSrc="/assets/components/buttons/videos/party.mp4">
      <span className="text-xl font-semibold">Join the club!</span>
    </VideoButton>
  );
}
