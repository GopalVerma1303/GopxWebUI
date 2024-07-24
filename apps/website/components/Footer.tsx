// Footer.tsx

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FOOTER_CONTENT } from "@/content/footer";
import {
  FaGlobe,
  FaGithub,
  FaDiscord,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaRedditAlien,
  FaLinkedinIn,
} from "react-icons/fa";

const SocialIcon: React.FC<{ name: string; url: string }> = ({ name, url }) => {
  const getIcon = () => {
    switch (name.toLowerCase()) {
      case "website":
        return <FaGlobe />;
      case "github":
        return <FaGithub />;
      case "discord":
        return <FaDiscord />;
      case "twitter":
        return <FaTwitter />;
      case "youtube":
        return <FaYoutube />;
      case "instagram":
        return <FaInstagram />;
      case "facebook":
        return <FaFacebookF />;
      case "reddit":
        return <FaRedditAlien />;
      case "linkedin":
        return <FaLinkedinIn />;
      default:
        return null;
    }
  };

  return (
    <Link
      href={url}
      className="text-white/50 hover:text-black/90 dark:hover:text-white/90"
      aria-label={name}
    >
      {getIcon()}
    </Link>
  );
};

const FooterLogo: React.FC = () => (
  <div className="mb-24 flex md:mb-0">
    <div className="flex items-center">
      <div className="relative group">
        <div className="relative flex gap-2 items-center mb-5">
          <Image
            src={FOOTER_CONTENT.logo.darkImage}
            width={50}
            height={50}
            alt={FOOTER_CONTENT.logo.alt}
            className="hidden dark:block rounded-lg shadow-lg dark:shadow-gray-700/50"
          />
          <Image
            src={FOOTER_CONTENT.logo.lightImage}
            width={50}
            height={50}
            alt={FOOTER_CONTENT.logo.alt}
            className="dark:hidden shadow-lg rounded-lg shadow-gray-300/50"
          />
          <p className="font-bold">{FOOTER_CONTENT.logo.title}</p>
        </div>
        <div className="flex flex-col gap-1 text-sm">
          <div>
            A product by{" "}
            <Link href={FOOTER_CONTENT.company.url} className="text-[#5271FF]">
              {FOOTER_CONTENT.company.name}
            </Link>
          </div>
          <div>
            Building in public by{" "}
            <Link href={FOOTER_CONTENT.creator.url} className="text-[#5271FF]">
              {FOOTER_CONTENT.creator.name}
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const FooterSection: React.FC<{
  title: string;
  links: { name: string; url: string }[];
}> = ({ title, links }) => (
  <div>
    <h2 className="mb-6 text-sm font-semibold text-black uppercase dark:text-white">
      {title}
    </h2>
    <ul className="text-black/50 dark:text-white/50 font-medium">
      {links.map((link, index) => (
        <li key={index} className={index !== links.length - 1 ? "mb-4" : ""}>
          <a href={link.url} className="hover:underline">
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F3F4F6] dark:bg-[#171717]">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <FooterLogo />
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
            {FOOTER_CONTENT.sections.map((section, index) => (
              <FooterSection
                key={index}
                title={section.title}
                links={section.links}
              />
            ))}
          </div>
        </div>
        <hr className="my-6 border-black/20 sm:mx-auto dark:border-white/20 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-black/50 dark:text-white/50 sm:text-center">
            © {FOOTER_CONTENT.copyright.year}{" "}
            <a
              href={FOOTER_CONTENT.copyright.companyUrl}
              className="hover:underline"
            >
              {FOOTER_CONTENT.copyright.companyName}
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 gap-6">
            {FOOTER_CONTENT.socialLinks.map((link, index) => (
              <SocialIcon key={index} name={link.name} url={link.url} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
