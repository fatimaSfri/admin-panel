import { AppTypographyBold } from "../../Use-everywhere/AppTypography ";
import { ContentBox, ContentOuter, VerticalLine, Wrapper } from "./StyledAbout";

const ValusBox = () => {
  const boxes = [1, 2, 3];

  return (
    <Wrapper>
      <VerticalLine />
      {boxes.map((_, index) => (
        <ContentOuter key={index}>
          <ContentBox>
            <AppTypographyBold
              color="white"
              size={32}
              sx={{ lineHeight: "96px" }}
            >
              Our values
            </AppTypographyBold>

            <AppTypographyBold
              size={18}
              sx={{ lineHeight: "42px", maxWidth: "657px" }}
            >
              pmusdt.com Core Values guide our behavior, decisions, and action,
              enabling unified collaboration across our diverse, international
              teams.
            </AppTypographyBold>
          </ContentBox>
        </ContentOuter>
      ))}
    </Wrapper>
  );
};

export default ValusBox;
