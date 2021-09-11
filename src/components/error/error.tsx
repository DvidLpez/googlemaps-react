import { FC, ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBomb } from "@fortawesome/free-solid-svg-icons";

import { WrapperErrorStyled } from "./error.style";
import { TextStyled } from "../common/common.style";

const Error: FC = (): ReactElement => {
  return (
    <WrapperErrorStyled>
      <FontAwesomeIcon icon={faBomb} className="icon_error" />
      <TextStyled>Upps!! Ha fallado la conexión...</TextStyled>
    </WrapperErrorStyled>
  );
};
export default Error;
