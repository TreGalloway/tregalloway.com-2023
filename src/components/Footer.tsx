import CustomLink from '@/components/CustomLink';
import SocialIcon from '@/components/SocialIcon';
import { footerConfigs } from '@/configs/footerConfigs';

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center mt-16">
        <div className="flex mb-3 space-x-4">
          <SocialIcon
            kind="mail"
            href={`mailto:${footerConfigs.socialLinks.email}`}
          />
          <SocialIcon
            kind="linkedin"
            href={footerConfigs.socialLinks.linkedin}
          />
          <SocialIcon kind="twitter" href={footerConfigs.socialLinks.twitter} />
          <SocialIcon kind="youtube" href={footerConfigs.socialLinks.youtube} />
        </div>
        <div className="flex mb-8 space-x-2 text-sm text-gray-500 transition-colors dark:text-gray-400">
          <div>{`Copyright © 2015 - ${new Date().getFullYear()}`}</div>
          <CustomLink href="/">{footerConfigs.credit}</CustomLink>
        </div>
      </div>
    </footer>
  );
}
