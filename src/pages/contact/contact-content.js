import EmailLink from "../../commons/email";
import WhatsAppChatLink from "../../commons/whatsapp";
import InstagramChat from "../../commons/instagram-link";
import { ContactDesc, ContactForm, LinkDesc, LinkDiv, LinkedinLink } from "./style";
import PageTitle from "../../components/page-title";
import { PageContainer } from "../../utils/styled-component";

function ContactContent() {
  return (
    <PageContainer>
      <PageTitle title={'For more information!'}/>
      <ContactDesc>
        <p>
        Thank you for visiting my portfolio. If you have any questions about my work, or are interested in collaborating on a project,
        or simply want to say hello, please feel free to contact me. I'm always eager to connect with new people and explore new 
        opportunities.
        </p>
      </ContactDesc>
      <ContactForm>
        <div>
          <LinkDesc>Send me an email</LinkDesc>
          <LinkDiv>
            <EmailLink />
          </LinkDiv>
        </div>
        <div>
          <LinkDesc>Chat on whatsapp</LinkDesc>
          <LinkDiv>
            <WhatsAppChatLink phoneNumber="+16507058467" message="hello USA" />
          </LinkDiv>
        </div>
        <div>
          <LinkDesc>Connect on Linkedin</LinkDesc>
          <LinkDiv>
            <LinkedinLink
              to="https://www.linkedin.com/in/shikhachandel/"
              target="_blank"
            >
              linkedin/shikhachandel
            </LinkedinLink>
          </LinkDiv>
        </div>
        <div>
          <LinkDesc>DM me on Instagram</LinkDesc>
          <LinkDiv>
            <InstagramChat username="rain_pixie" />
          </LinkDiv>
        </div>
      </ContactForm>
    </PageContainer>
  );
}

export default ContactContent;
