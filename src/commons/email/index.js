import React from "react";
import { EmailLinkText } from "./style";

function EmailLink() {
  const email = "svchandel@aggies.ncat.edu";

  function handleEmailClick() {
    window.location.href = `mailto:${email}`;
  }

  return (
    <EmailLinkText onClick={handleEmailClick}>
      {email}
    </EmailLinkText>
  );
}

export default EmailLink;
