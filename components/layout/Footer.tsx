import { GithubIcon, LinkedinAltIcon } from '../common/svgIcons';

export function Footer() {
  return (
    <footer className="w-full font-medium bg-primary mb-8 md:mb-[-2rem]">
      <div className="flex justify-between items-center gap-5 sm:container mx-auto px-4 md:px-10 lg:px-20 py-3">
        <div>
          <p className="font-mono text-body">
            &copy; {new Date().getFullYear()},
            <span> Learning in Progress...</span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/prosper74"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon width="25" height="25" fill="rgb(253, 245, 255)" />
          </a>
          <a
            href="https://www.linkedin.com/in/prosper-atu/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinAltIcon width="25" height="25" fill="rgb(253, 245, 255)" />
          </a>
        </div>
      </div>
    </footer>
  );
}
