import { FaSitemap } from "react-icons/fa6";

export function SiteMapIcon() {
  return (
    <>
      <a
        style={{ padding: "0.5rem" }}
        href="/sitemap-0.xml"
        aria-label="sitemap"
        rel="nofollow noreferrer"
      >
        <FaSitemap className="w-[25px] h-[25px] transition-colors duration-500 hover:fill-[#0077ff] focus:fill-[#0077ff]" />
      </a>
    </>
  );
}
