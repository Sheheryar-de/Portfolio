import Wrapper from "./UI/Wrapper";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

function Contact() {
  const whatsappNumber = "923248422169";

  const whatsappMessage = encodeURIComponent(
    "Hi Sheheryar, I would like to discuss a project with you.",
  );

  return (
    <Wrapper id="contact" className="contact bg-less-dark">
      <Wrapper className="wrapper contact__wrapper bottom-border">
        {/* Content */}
        <Wrapper className="contact__text">
          <p className="contact__eyebrow">GET IN TOUCH</p>

          <h2 className="contact__headline header-xl">
            Let&apos;s work together.
          </h2>

          <p className="contact__description">
            Have a project in mind or want to discuss an idea? Feel free to
            reach out to me through WhatsApp or email. I&apos;d love to hear
            from you.
          </p>
        </Wrapper>

        {/* Contact Options */}
        <Wrapper className="contact__options">
          {/* WhatsApp */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact__option"
          >
            <span className="contact__icon">
              <FaWhatsapp />
            </span>

            <span className="contact__content">
              <span className="contact__label">Message me on</span>
              <span className="contact__title">WhatsApp</span>
            </span>

            <span className="contact__arrow">↗</span>
          </a>

          {/* Email */}
          <a href="mailto:sheheryar701@gmail.com" className="contact__option">
            <span className="contact__icon">
              <FaEnvelope />
            </span>

            <span className="contact__content">
              <span className="contact__label">Send me an</span>
              <span className="contact__title">Email</span>
            </span>

            <span className="contact__arrow">↗</span>
          </a>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
}

export default Contact;
