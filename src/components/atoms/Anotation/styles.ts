import styled, { css } from "styled-components";

type Props = {
  $wasDeleted: boolean;
};

export const Container = styled.div<Props>`
  margin-bottom: 8px;

  ${({ $wasDeleted }) =>
    $wasDeleted &&
    css`
      margin-bottom: 0px;
    `}

  .swiper {
    height: 100%;
    max-height: 105px;
    border-radius: 10px;

    ${({ $wasDeleted }) =>
      $wasDeleted &&
      css`
        transition: all ease 0.5s;
        transform: translate(-1000px);
        max-height: 0px;
      `}

    .delete {
      background-color: transparent;
      outline: 1px #3c3c3c solid;
      border-radius: 10px;
    }
  }
`;

export const AnotationContainer = styled.div`
  background-color: var(--ground);
  border-radius: 16px;
  max-height: 100px;
  padding: 16px;
  width: 100%;
`;

export const AnotationHeader = styled.div`
  width: 100%;

  .title {
    font-size: var(--medium);
    color: var(--secundary);
  }
`;

export const AnotationInfo = styled.div`
  width: 100%;

  .info {
    font-size: var(--small);
    color: var(--bright);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;
