import { ButtonContainer, ButtonContent } from "./style.js";

function Button({ content, to }) {
  return (
    <ButtonContainer>
      <ButtonContent to={to}>
        {content}
      </ButtonContent>
    </ButtonContainer>
  );
}

export default Button;
