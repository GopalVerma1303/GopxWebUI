import React from "react";
import { FiMail, FiPhone, FiGlobe, FiGithub } from "react-icons/fi";

interface ProfileCardProps {
  name: string;
  role: string;
  company: string;
  image: string;
  email: string;
  phone: string;
  website: string;
  github: string;
}

const ProfileCard = ({
  name,
  role,
  company,
  image,
  email,
  phone,
  website,
  github,
}: ProfileCardProps) => {
  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="relative group">
        <div className="relative z-10 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-all duration-500 group-hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-br from-[#5271FF]/30 to-[#5271FF]/10 dark:from-[#5271FF]/20 dark:to-[#5271FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative p-4">
            <div className="relative w-12 h-12 mx-auto mb-4">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover rounded-full border-4 border-[#5271FF] shadow-md transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 rounded-full bg-[#5271FF] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            </div>
            <h2 className="text-xl font-bold text-center text-gray-800 dark:text-white mb-1">
              {name}
            </h2>
            <p className="text-center text-[#5271FF] font-medium mb-2">
              {role}
            </p>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-4">
              {company}
            </p>
            <div className="space-y-2">
              <ContactItem icon={<FiMail />} text={email} />
              <ContactItem icon={<FiPhone />} text={phone} />
              <ContactItem icon={<FiGlobe />} text={website} />
              <ContactItem icon={<FiGithub />} text={github} />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-[#5271FF]/20 dark:bg-[#5271FF]/10 rounded-lg blur-xl transform transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:scale-110" />
      </div>
    </div>
  );
};

function ContactItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center space-x-2 group">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#5271FF]/10 dark:bg-[#5271FF]/20 flex items-center justify-center text-[#5271FF] group-hover:bg-[#5271FF] group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <span className="text-gray-600 dark:text-gray-300 group-hover:text-[#5271FF] transition-colors duration-300">
        {text}
      </span>
    </div>
  );
}

export default ProfileCard;
