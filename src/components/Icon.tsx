import { FaGithub, FaLinkedin, FaFacebook, FaCode } from "react-icons/fa";
import { SiCodeforces, SiCodechef } from "react-icons/si";
import type { IconType } from "react-icons";

const map: Record<string, IconType> = {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  SiCodeforces,
  SiCodechef,
};

export default function SocialIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = map[name] ?? FaCode;
  return <Icon className={className} aria-hidden="true" />;
}
