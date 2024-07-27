// socialMediaLinks.ts

export type SocialProfile = {
  username: string;
  link: string;
};

export const FOLLOW_US_LINKS: Record<string, SocialProfile> = {
  github: {
    username: "gopx.dev",
    link: "https://github.com/GopalVerma1303/webui.gopx",
  },
  discord: {
    username: "codedeployingsquad",
    link: "https://discord.gg/uR7DpxtaKw",
  },
  twitter: {
    username: "bettercallgopal",
    link: "https://twitter.com/bettercallgopal",
  },
  instagram: {
    username: "bettercallgopal",
    link: "https://www.instagram.com/bettercallgopal/",
  },
  facebook: {
    username: "Gopal Verma",
    link: "https://www.facebook.com/profile.php?id=100067485754453",
  },
};

export const SOCIAL_MEDIA_LINKS: Record<string, SocialProfile> = {
  website: {
    username: "webui.gopx.dev",
    link: "https://webui.gopx.dev",
  },
  github: {
    username: "webui.gopx",
    link: "https://github.com/GopalVerma1303/webui.gopx",
  },
  github_docsRepositoryBase: {
    username: "webui.gopx",
    link: "https://github.com/GopalVerma1303/webui.gopx/tree/main/apps/website",
  },
  discord: {
    username: "codedeployingsquad",
    link: "https://discord.gg/uR7DpxtaKw",
  },
  twitter: {
    username: "bettercallgopal",
    link: "https://twitter.com/bettercallgopal",
  },
  youtube: {
    username: "@codedeployingsquad537",
    link: "https://www.youtube.com/channel/UCgfABFAZox1a26_iyyUuYeg",
  },
  instagram: {
    username: "bettercallgopal",
    link: "https://www.instagram.com/bettercallgopal/",
  },
  facebook: {
    username: "Gopal Verma",
    link: "https://www.facebook.com/profile.php?id=100067485754453",
  },
  reddit: {
    username: "Gopal__Verma",
    link: "https://www.reddit.com/user/Gopal__Verma/",
  },
  linkedin: {
    username: "Gopal Verma",
    link: "https://www.linkedin.com/in/vermagopal/",
  },
};
