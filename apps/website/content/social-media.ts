// socialMediaLinks.ts

export type SocialProfile = {
  username: string;
  link: string;
};

const SOCIAL_MEDIA_LINKS: Record<string, SocialProfile> = {
  website: {
    username: "gopx.dev",
    link: "https://gopx.dev",
  },
  github: {
    username: "gopx.dev",
    link: "https://github.com/GopalVerma1303/gopx.dev",
  },
  github_docsRepositoryBase: {
    username: "gopx.dev",
    link: "https://github.com/GopalVerma1303/gopx.dev/tree/main",
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

export default SOCIAL_MEDIA_LINKS;
