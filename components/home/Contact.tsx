import { CallIcon, SendMailIcon, TwitterAltIcon } from '../common/svgIcons';

export function Contact() {
  return (
    <>
      <section
        id="contact"
        className="sm:container mx-auto px-2 md:px-10 lg:px-20 py-16 break-words"
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center my-12">
            <div className="flex items-center gap-2">
              <CallIcon width="40" height="40" fill="#9932cc" />
              <div>
                <h3 className="font-mono font-semibold text-xl md:text-2xl">
                  Call or Whatsapp
                </h3>
                <p className="text-lg md:text-xl">234 8034285512</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <SendMailIcon width="40" height="40" fill="#9932cc" />
              <div>
                <h3 className="font-mono font-semibold text-xl md:text-2xl">
                  Email
                </h3>
                <p className="text-lg md:text-xl">atu.prosper@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <TwitterAltIcon width="40" height="40" fill="#9932cc" />
              <div>
                <h3 className="font-mono font-semibold text-xl md:text-2xl">
                  Twitter
                </h3>
                <p className="text-lg md:text-xl">234 8034285512</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
