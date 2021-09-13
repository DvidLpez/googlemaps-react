import { FC, ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBomb } from "@fortawesome/free-solid-svg-icons";

import { WrapperErrorStyled } from "./error.style";
import { TextStyled } from "../common/common.style";

const Error: FC<{text:string}> = ({text}): ReactElement => {
  return (
    <WrapperErrorStyled>
      <FontAwesomeIcon data-testid="error-icon-test" icon={faBomb} className="icon_error" />
      <TextStyled>{text}</TextStyled>
    </WrapperErrorStyled>
  );
};
export default Error;
