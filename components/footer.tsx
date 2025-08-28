import { APP_NAME } from "@/lib/constants";

const Footer = () => {
  const currentYear = new Date().getUTCFullYear();

  return (
    <footer className="border-t">
      <p className="flex-center italic font-extralight">
        {currentYear} {APP_NAME} All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
