import { FC, ReactElement } from "react";
import { IPayload } from "../../interfaces";
import { InfoSectionStyled, InfoTitleStyled } from "./infoBox.style";

const InfoBox: FC<IPayload> = ({ marker }): ReactElement => {
  const {
    displayName,
    country,
    area_level_1,
    area_level_2,
    area_level_3,
    area_level_4,
    postal_code,
    street_number,
    route,
    locality
  } = marker;
  return (
    <>
      <InfoTitleStyled>{displayName}</InfoTitleStyled>
      <hr />
      <InfoSectionStyled>País: {country}</InfoSectionStyled>
      {area_level_1 && <InfoSectionStyled>Región: {area_level_1}</InfoSectionStyled>}
      {area_level_2 && <InfoSectionStyled>Provincia: {area_level_2}</InfoSectionStyled>}
      {area_level_3 && <InfoSectionStyled>Área 3: {area_level_3}</InfoSectionStyled>}
      {area_level_4 && <InfoSectionStyled>Área 4: {area_level_4}</InfoSectionStyled>}
      {locality && <InfoSectionStyled>Localidad: {locality}</InfoSectionStyled>}
      {postal_code && <InfoSectionStyled>Código postal: {postal_code}</InfoSectionStyled>}
      {route && <InfoSectionStyled>Ubicación: {route}</InfoSectionStyled>}
      {street_number && <InfoSectionStyled>Número: {street_number}</InfoSectionStyled>}
    </>
  );
};
export default InfoBox;
