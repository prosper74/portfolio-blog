import {
  CallIcon,
  GithubIcon,
  SendMailIcon,
  TwitterAltIcon,
} from '../common/svgIcons';

export function Contact() {
  return (
    <>
      <section
        id="contact"
        className="sm:container mx-auto px-4 md:px-10 lg:px-20 py-16 break-words"
      >
        <div>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-1">
              Get in touch
            </h2>
            <p className="text-xl md:text-2xl">
              You can contact me through these channels or follow me on socials
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-center my-12">
            <div className="flex items-center gap-2">
              <CallIcon width="40" height="40" fill="#9932cc" />
              <div>
                <h3 className="font-mono font-semibold text-xl md:text-2xl">
                  Call or Whatsapp
                </h3>
                <a href="tel:2348034285512" className="text-lg md:text-xl">
                  234 8034285512
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <SendMailIcon width="40" height="40" fill="#9932cc" />
              <div>
                <h3 className="font-mono font-semibold text-xl md:text-2xl">
                  Email
                </h3>
                <a
                  href="mailto:atu.prosper@gmail.com"
                  className="text-lg md:text-xl"
                >
                  atu.prosper@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <TwitterAltIcon width="40" height="40" fill="#9932cc" />
              <div>
                <h3 className="font-mono font-semibold text-xl md:text-2xl">
                  Twitter
                </h3>
                <a
                  href="https://twitter.com/prosperjohnson"
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg md:text-xl"
                >
                  @prosperjohnson
                </a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <GithubIcon width="40" height="40" fill="#9932cc" />
              <div>
                <h3 className="font-mono font-semibold text-xl md:text-2xl">
                  Github
                </h3>
                <a
                  href="https://github.com/prosper74"
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg md:text-xl"
                >
                  prosper-atu
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
