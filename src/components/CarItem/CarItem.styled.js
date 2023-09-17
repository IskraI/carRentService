import styled from '@emotion/styled';

export const Item = styled.div`
  width: 274px;
  height: 426px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CarImgWrap = styled.div`
  position: relative;
  width: 100%;
`;

export const CarImg = styled.img`
  display: block;
  width: 100%;
  max-width: 100%;
  width: 274px;
  height: 268px;
  border-radius: 14px;
  object-fit: cover;
`;

export const InfoWrapper = styled.div`
  width: 100%;
  align-items: center;
`;
export const SecondaryCarInfo = styled.ul`
  display: flex;
  flex-wrap: wrap;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;

  gap: 4px;
  &:last-child {
    margin-top: 4px;
  }
`;

export const SecondaryCarAbout = styled.li`
  color: rgba(18, 20, 23, 0.5);
  padding-right: 4px;

  &:not(:last-child) {
    border-right: 1px solid rgba(18, 20, 23, 0.2);
  }
`;
export const MainInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 14px;
  font-weight: 500;
  line-height: 24px;
`;

export const CarInfo = styled.ul`
  display: flex;
  width: 100%;
  gap: 5px;
`;

export const CarText = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #121417;
  font-size: 16px;
  line-height: 24px;
`;

export const ModelBlue = styled.div`
  color: #3470ff;
  font-size: 16px;
`;

export const SecondaryInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  color: rgba(18, 20, 23, 0.5);
  margin-top: 8px;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  gap: 4px;
`;

export const SecondaryCarText = styled.div`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  border-right: 1px solid rgba(18, 20, 23, 0.2);
  padding-right: 4px;
`;

export const LearnMoreBtn = styled.button`
  width: 274px;
  padding: 12px 0;
  color: #fff;
  font-family: 'Manrope';
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  border-radius: 12px;
  background: #3470ff;
  border: none;
  outline: none;
  margin-top: 18px;
  box-shadow: 0px 3.43693px 3.43693px 0px rgba(0, 0, 0, 0.25);

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background: #0b44cd;
  }
`;

export const IconBtn = styled.button`
  position: absolute;
  margin: 0;
  top: 14px;
  right: 14px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: rgb(255 255 255 / 80%);
`;
