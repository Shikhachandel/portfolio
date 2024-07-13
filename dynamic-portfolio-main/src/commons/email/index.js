import React from "react";
import { EmailLinkText } from "./style";

function EmailLink() {
  const email = "example@example.com";

  function handleEmailClick() {
    window.location.href = `mailto:${email}`;
  }

  return (
    <EmailLinkText onClick={handleEmailClick}>
      chandelshikha4@gmail.com
    </EmailLinkText>
  );
}

export default EmailLink;
