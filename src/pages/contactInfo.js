import { useState } from "react";

const ContactInfo = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("loganjanderson.dev@gmail.com");

    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 2000);
  };

  return (
    <div className="contact-wrapper">
      <h2>Reach out via:</h2>
      <div className="info">
        <p className="phone">• 801-8304989</p>
        <p onClick={handleCopy}>• Email</p>
        <a
          href="https://www.linkedin.com/in/loganjohnanderson/"
          target="_blank"
        >
          • LinkedIn
        </a>
      </div>
      {showSuccessMessage && (
        <div className="success-message">
          <h1>Email address copied to your clipboard!</h1>
        </div>
      )}
    </div>
  );
};

export default ContactInfo;
