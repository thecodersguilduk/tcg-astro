// src/utils/serializers.js
import { urlFor } from "../utils/imageHelper"; // Sanity image URL builder

// Function to format Calendly date
const formatCalendlyDate = (date) => {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return new Date(date).toLocaleDateString('en-US', options);
};

// Define your custom serializers
export const serializers = {
  types: {
    code: ({ node }) => (
      <pre className={node.language}>
        <code>{node.code}</code>
      </pre>
    ),

    calendlyEmbed: ({ node }) => {
      const formattedDate = formatCalendlyDate(new Date());
      return (
        <div
          className="calendly-inline-widget"
          data-url={`${node.calendlyLink}?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=2574a9&month=${formattedDate}`}
          style={{ minWidth: "320px", height: "800px" }}
        >
          <script
            src="https://assets.calendly.com/assets/external/widget.js"
            type="text/javascript"
            async
          />
        </div>
      );
    },

    imageSection: ({ node }) => (
      <div className="flex flex-col">
        <img src={urlFor(node.asset).url()} alt="Image" />
        {node.license && (
          <p className="text-gray-500 text-xs">
            Image displayed under {node.license} from{" "}
            <a href={node.licenseUrl} target="_blank">
              {node.licenseSite}
            </a>
          </p>
        )}
      </div>
    ),

    youtubeEmbed: ({ node }) => (
      <iframe
        src={node.src}
        width={node.width || "100%"}
        height={node.height || "500px"}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    ),

    applyBtn: ({ node }) => {
      const classes =
        node.style === "float-right"
          ? "mt-auto block float-right py-2 px-4 bg-blue-200 text-md font-bold font-heading rounded text-white"
          : "mt-auto inline-block py-2 px-4 bg-blue-200 text-md font-bold font-heading rounded text-white";
      return (
        <a
          href={node.btnLink || "https://skills-bootcamp-ux.tcg.camp"}
          className={classes}
          style={{ color: "white" }}
        >
          {node.btnText}{" "}
          <i
            className="align-middle ml-2 text-white fas fa-angle-right text-md leading-md"
            aria-hidden="true"
          ></i>
        </a>
      );
    },

    break: ({ node }) => node.style === "break" && <hr style={{ borderColor: "#2574a9" }} />,

    callModal: ({ node }) => (
      <a
        href="#"
        data-modal="book-a-call-calendly"
        className="bookacall-c-btn inline-block py-2 px-6 font-bold bg-blue-200 text-white rounded font-heading hover:bg-blue-100"
        style={{ color: "white" }}
      >
        {node.title}
      </a>
    ),

    newsletter: ({ node }) => (
      <section className="relative md:py-20 pt-14 pb-8 newsletter section-rounded-t z-10 not-on-print">
        <div className="inner">
          <div className="md:flex flex-col">
            <div className="w-full">
              <h2 className="text-white md:mb-0">{node.title}</h2>
            </div>
            <div className="w-full">
              <form action="https://formspree.io/mvovolen" method="POST">
                <div className="rounded md:flex">
                  <input
                    type="email"
                    className="p-4 w-full text-md leading-sm h-14 text-black mb-4 md:mb-0"
                    placeholder="Enter your email"
                    name="_replyto"
                    aria-label="Email Address"
                  />
                  <button
                    className="block py-4 px-5 bg-blue-200 whitespace-no-wrap text-white font-heading font-bold text-lg leading-md w-full md:w-auto"
                    type="submit"
                  >
                    Sign me up
                  </button>
                </div>
                <span className="block text-sm leading-xs text-white mt-2">
                  We care about the protection of your data. Read our
                  <a
                    className="font-bold text-white"
                    href="https://codersguild.org.uk/pdf/tcg_privacy_policy.pdf"
                  >
                    {" "}
                    privacy policy
                  </a>
                </span>
              </form>
            </div>
          </div>
        </div>
      </section>
    ),
  },
};

// Export the serializers
export default serializers;
