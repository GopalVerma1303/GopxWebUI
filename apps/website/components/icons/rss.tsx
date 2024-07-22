export function RssIcon() {
  return (
    <>
      <a
        style={{ padding: "0.5rem" }}
        href="/rss.xml"
        aria-label="rss"
        rel="nofollow noreferrer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="feather feather-rss"
        >
          <path d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248-1.796 0-3.252-1.454-3.252-3.248 0-1.795 1.456-3.25 3.252-3.25 1.795 0 3.251 1.455 3.251 3.25zm-6.503-12.572v4.811c6.05.062 10.96 4.966 11.022 11.009h4.817c-.062-8.71-7.118-15.758-15.839-15.82zm0-3.368c10.58.046 19.152 8.594 19.183 19.188h4.817c-.03-13.231-10.755-23.954-24-24v4.812z" />
        </svg>
        <style jsx>
          {`
            svg {
              transition: fill 0.5s ease;
            }

            svg:hover,
            svg:focus {
              fill: #0077ff;
            }
          `}
        </style>
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
