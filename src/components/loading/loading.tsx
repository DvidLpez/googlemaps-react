import { FC, ReactElement } from "react";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { RotateStyled, WrapperLoadingStyled } from "./loading.style";
import { TextStyled } from "../common/common.style";

const Loading: FC = (): ReactElement => {
  return (
    <WrapperLoadingStyled>
      <RotateStyled>
        <FontAwesomeIcon icon={faSpinner} />
      </RotateStyled>
      <TextStyled>Cargando mapa...</TextStyled>
    </WrapperLoadingStyled>
  );
};
export default Loading;
