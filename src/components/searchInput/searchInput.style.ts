import styled from "styled-components";
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxPopover,
} from "@reach/combobox";

export const WrapperSearchStyled = styled.div`
  position: absolute;
  top: 3rem;
  left: 50%;
  transform: translateX(-50%);
  max-width: 350px;
  z-index: 10;

  @media (min-width: 768px) {
    max-width: 600px;
  }
`;

export const ComboboxStyled = styled(Combobox)`
  svg {
    position: absolute;
    top: 8px;
    left: 14px;
    color: #585858;
    font-size: 1.4em;
    @media (min-width: 768px) {
      top: 9px;
      left: 14px;
      font-size: 1.8em;
      
    }
  }
`;

export const InputSearchStyled = styled(ComboboxInput)`
  color: #585858;
  width: 224px;
  height: 32px;
  border: 1px solid transparent;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  font-size: 1em;
  padding-left: 50px;
  padding-right: 10px;

  &:focus-visible {
    outline: none;
  }

  @media (min-width: 768px) {
    padding-left: 60px;
    width: 500px;
    height: 40px;
    font-size: 1.2em;
    
  }
`;

export const SelectorStyled = styled(ComboboxPopover)`
  width: 285px !important;
  left: 50% !important;
  top: 81px !important;
  border: 1px solid transparent;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  transform: translateX(-50%);
  background-color: white;
  border-top: 1px solid #f7f7f7;

  li[data-reach-combobox-option] {
    border-bottom: 1px solid #f7f7f7;
    padding: 10px 11px;
    font-size: 0.9em;
    list-style: none;
    &:hover {
      cursor: pointer;
      background-color: #f3f3f3;
    }
  }

  @media (min-width: 768px) {
    width: 570px !important;
    top: 89px !important;
    left: 50% !important;
    transform: translateX(-50%);
  }
`;

export const SuggestionsStyled = styled(ComboboxOption)`
  span[data-suggested-value] {
    color: black;
    font-weight: 400;
  }
  span[data-user-value] {
    color: black;
    font-weight: 700;
  }
`;
