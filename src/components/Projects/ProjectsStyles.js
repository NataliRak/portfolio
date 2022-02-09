import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  height: 20rem;
  object-fit: cover;
  overflow: hidden;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, minmax(400px, 1fr));
  padding-top: 3rem;
  padding-bottom: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    padding: 2rem 0.3rem
    padding-bottom: 0;
    }
  }
`;
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  max-height: 70rem;

  background-color: #662d91ca;
  z-index: 10;
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    width: 320px;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 0.7em;
  color: #9cc9e3;
  font-size: 1.5rem;
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-top: 0.4rem;
  }
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: 0.5rem 0;
  margin-top: 0.8rem;
  font-size: ${(props) => (props.title ? "2rem" : "1.5srem")};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 5px auto;
  border: 0;
  background: var(--secondary-color);
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: "Droid Serif", serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: center;
  margin-top: 1.5rem;
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 1rem 0;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 1.2rem 0;
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 0.5rem 0 1.2rem 0;
  }
`;

export const ExternalLinks = styled.a`
  color: #d4c0c0;
  font-size: 1.3rem;
  padding: 1rem 1.5rem;
  background: var(--primary-color);
  border-radius: 15px;
  transition: 0.5s;
  width: 10rem;

  &:hover {
    background: #8860e6b0;
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    width: 7rem;
    font-size: 1rem;
    padding: 0.8rem 1rem;
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 1.5rem;
`;
export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1.2rem;
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    font-size: 0.8rem;
  }
`;
