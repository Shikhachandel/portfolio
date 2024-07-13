import Header from "../../commons/header";
import Footer from "../../commons/footer";
import ContactContent from "./contact-content";
import { ContactPage } from "./style";

function Contact() {
  return (
    <ContactPage>
      <Header />
      <ContactContent />
      <Footer />
    </ContactPage>
  );
}

export default Contact;
