// components/SearchCard.tsx
import { FeatureCard } from "./FeatureCard";

export function SearchCard() {
  return (
    <FeatureCard
      large
      id="search-card"
      href="/docs/docs-theme/theme-configuration#search"
    >
      <div className="z-10">
        <h3>
          Full-text search, <br />
          zero-config needed
        </h3>
        <p>
          Nextra indexes your content automatically at build-time and performs
          incredibly fast full-text search via{" "}
          <a
            href="https://github.com/nextapps-de/flexsearch"
            target="_blank"
            rel="noopener noreferrer"
          >
            FlexSearch
          </a>
          .
        </p>
      </div>
      <div className="absolute w-full h-full inset-0 hidden sm:block bg-gradient-to-r from-white via-white to-transparent dark:from-gray-900 dark:via-gray-900 z-[1]" />
      <video autoPlay loop muted playsInline className="dark:hidden block">
        <source src="/assets/search.mp4" type="video/mp4" />
      </video>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="dark:block hidden -translate-x-4"
      >
        <source src="/assets/search-dark.mp4" type="video/mp4" />
      </video>
    </FeatureCard>
  );
}
