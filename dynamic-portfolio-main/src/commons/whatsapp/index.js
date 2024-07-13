import React from "react";
import { Link } from "react-router-dom";

function WhatsAppChatLink({ phoneNumber, message }) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  const style = { textDecoration: "none", color: "var(--pallet-4)" };

  return (
    <Link
      style={style}
      to={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      +1-(650)705 8467
      +91-(797)736 5366
    </Link>
  );
}

export default WhatsAppChatLink;
