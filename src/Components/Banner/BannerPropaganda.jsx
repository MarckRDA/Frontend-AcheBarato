import Styled from "styled-components";
import "./BannerStyles.css"


const BannerStyled = Styled.p`
    color: white;
    background: black;
    margin-bottom: 0px;
    height: 5rem;
    width: 100rem;
    display: flex;
    margin-left: -14.40rem;
   
`;

const BannerPropaganda = () => {
  return (
    <div className="w-100 mb-0">
      <BannerStyled>Banner</BannerStyled>
    </div>
  );
};

export default BannerPropaganda;