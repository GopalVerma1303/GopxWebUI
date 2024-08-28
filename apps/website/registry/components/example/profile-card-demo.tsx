import React from "react";
import ProfileCard from "@/components/ui/profile-card";

const ProfileCardDemo: React.FC = () => {
  return (
    <ProfileCard
      name="Gopal Verma"
      role="Software Developer"
      company="GOPX WEBUI"
      image="/me.jpg"
      email="business.gopalverma@gmail.com"
      phone="+1 (555) 123-4567"
      website="www.gopx.dev"
      github="GopalVerma1303"
    />
  );
};

export default ProfileCardDemo;
