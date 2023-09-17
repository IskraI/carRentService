import styled from '@emotion/styled';

export const SectionCatalog = styled.div`
  /* display: flex;
  flex-direction: column;
  gap: 4px; */
  height: 100vh;
`;

export const LoadMoreBtn = styled.button`
  width: 274px;
  padding: 12px 0;
  color: #3470ff;
  font-family: "Manrope";
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
 text-decoration: underline;
  border: none;
  cursor: pointer;
 margin: auto
  box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);
  margin-top: 28px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #0B44CD;
  }
`;
