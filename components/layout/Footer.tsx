import { GithubAltIcon, LinkedinAltIcon } from '../common/svgIcons';

export function Footer() {
  return (
    <footer>
      <header className="md:fixed md:bottom-0 md:inset-x-0 w-full font-medium bg-primary max-md:mb-8">
        <div className="flex justify-between items-center gap-5 sm:container mx-auto px-2 md:px-10 lg:px-20 py-3">
          <div>
            <p className="font-mono">
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
              <GithubAltIcon width="25" height="25" fill="rgb(253, 245, 255)" />
            </a>
            <a
              href="https://github.com/prosper74"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinAltIcon
                width="25"
                height="25"
                fill="rgb(253, 245, 255)"
              />
            </a>
          </div>
        </div>
      </header>
    </footer>
  );
}
