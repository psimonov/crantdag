import styled, { css } from 'styled-components';

interface IProps {
  vertical?: boolean;
}

const FlexStyled = styled.div<IProps>`
  display: flex;

  ${({ vertical }) => {
    if (vertical) {
      return css`
        flex-direction: column;
        width: 100%;
      `;
    }

    return css`
      height: 100%;
    `;
  }}
`;

export default FlexStyled;
