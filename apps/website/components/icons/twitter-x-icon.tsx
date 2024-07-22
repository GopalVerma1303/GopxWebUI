import { BsTwitterX } from "react-icons/bs";

export function TwitterXIcon() {
  return (
    <>
      <a
        style={{ padding: "0.5rem" }}
        target="_blank"
        href="https://twitter.com/bettercallgopal"
        aria-label="CodeDeployingSquad twitter"
        rel="nofollow noreferrer"
      >
        <BsTwitterX className="w-[20px] h-[20px] transition-colors duration-500 hover:fill-[#0077ff] focus:fill-[#0077ff]" />
      </a>
      {/* <a
          href="https://github.com/sponsors/codedeployingsquad"
          target="_blank"
          className="hidden sm:block"
        >
          <iframe
            src="https://github.com/sponsors/aidenybai/button"
            title="Sponsor CodeDeployingSquad"
            height="32"
            width="114"
            className="rounded-md border-0 dark:invert invert-0"
          ></iframe>
        </a> */}
    </>
  );
}
