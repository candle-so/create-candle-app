import Link from "next/link";
import { Logo } from "./logo";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-cndl-dark text-cndl-light py-10 text-xs md:text-sm">
      <div className="container space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Logo />
            <div className="flex items-center space-x-2">
              <Link href="/docs" className="">
                Documentation
              </Link>
              <Link href="/blog" className="">
                Blog
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Link href="https://linkedin.com/company/candle-so">
              <LinkedinIcon size={16} />
            </Link>
            <Link href="https://github.com/candle-so">
              <GithubIcon size={16} />
            </Link>
            <Link href="mailto:team@candle.so">
              <MailIcon size={16} />
            </Link>
          </div>
        </div>
        <div className="md:flex items-center justify-between space-y-2 pt-4 md:pt-0 md:space-y-0">
          <div className="md:flex items-center space-x-2">
            <Link href="/terms" className="">
              Terms & Conditions
            </Link>
            <span>|</span>
            <Link href="/privacy" className="">
              Privacy
            </Link>
          </div>
          <div className="">
            <p>Copyright © 2024 Candle. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
