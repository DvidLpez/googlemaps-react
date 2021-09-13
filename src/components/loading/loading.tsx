import { FC, ReactElement } from "react";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { RotateStyled, WrapperLoadingStyled } from "./loading.style";
import { TextStyled } from "../common/common.style";

const Loading: FC <{text:string}>= ({text}): ReactElement => {
  return (
    <WrapperLoadingStyled>
      <RotateStyled>
        <FontAwesomeIcon data-testid="loading-icon-test" icon={faSpinner} />
      </RotateStyled>
      <TextStyled>{text}</TextStyled>
    </WrapperLoadingStyled>
  );
};
export default Loading;
