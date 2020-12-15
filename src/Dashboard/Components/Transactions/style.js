import styled from "styled-components";

const Title = styled.h3``;

const TransactionContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
  padding: 0.3rem;

  &:hover {
    cursor: pointer;
    border-radius: 1rem;
    background-color: lightgray;
  }
`;

const TransactionIcon = styled.i`
  margin-right: 1rem;
`;

const TransactionContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const TransactionData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TransactionOrder = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 0.8rem;
`;

const TransactionDate = styled.p`
  margin: 0;
  color: gray;
  font-size: 0.7rem;
`;

const GoToIcon = styled.i``;

export {
  Title,
  TransactionContainer,
  TransactionIcon,
  TransactionContent,
  TransactionData,
  TransactionOrder,
  TransactionDate,
  GoToIcon,
};
