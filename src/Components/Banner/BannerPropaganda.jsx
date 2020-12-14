import Styled from "styled-components";

const BannerStyled = Styled.p`
    background: black;
    margin-bottom: 0px;
    height: 50px
   
`;

const BannerPropaganda = () => {
  return (
    <div className="w-100 mb-0">
      <BannerStyled>Banner</BannerStyled>
    </div>
  );
};

export default BannerPropaganda;