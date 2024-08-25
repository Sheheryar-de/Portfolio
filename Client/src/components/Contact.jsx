import Wrapper from "./UI/Wrapper";
import axios from "axios";
import { useState } from "react";
import Dialog from "./Dialog";
import SuccessToaster from "./SuccessToaster";
import ErrorToaster from "./ErrorToaster";

function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [icon, setIcon] = useState(null);
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://portfolio-backend-zeta-cyan.vercel.app/send-email",
        formData
      );
      setMessage("Your message has been sent successfully!");
      setIcon(<SuccessToaster />);
      setIsOpen(true);
      console.log("🚀 ~ handleSubmit ~ response:", response);
    } catch (error) {
      setMessage("There was an error sending your message. Please try again.");
      setIcon(<ErrorToaster />);
      setIsOpen(true);
      console.error(error);
    }
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Wrapper
      id="contact"
      className="contact bg-less-dark"
      data-aos="zoom-in-up"
      data-aos-delay="100"
      data-aos-duration="1500"
      data-aos-once="true"
    >
      <Wrapper className="wrapper contact__wrapper bottom-border">
        <Wrapper className="contact__text">
          <h2 className="contact__headline header-xl">Contact</h2>
          <p className="contact__description">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I&apos;ll get back to you as soon as possible.
          </p>
        </Wrapper>
        <form action="" className="contact__form" onSubmit={handleSubmit}>
          <Wrapper className="contact__control">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </Wrapper>
          <Wrapper className="contact__control">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </Wrapper>
          <Wrapper className="contact__control">
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="3"
              placeholder="Message"
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            ></textarea>
          </Wrapper>
          <Wrapper className="contact__control align-right">
            <button type="submit">Send Message</button>
          </Wrapper>
        </form>
      </Wrapper>
      <Dialog
        isOpen={isOpen}
        onClose={handleClose}
        message={message}
        icon={icon}
      />
    </Wrapper>
  );
}

export default Contact;
