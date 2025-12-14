import BigBox from "../BigBox";
import { GradientText } from "../dashboard/GradientText";
import { AppTypographyBold } from "../../Use-everywhere/AppTypography ";
import aboutImg from "../../../assets/img/about-us.png";
import ValusBox from "./ValuesBox";
import { ContentRow, Image, ImageWrapper, PageWrapper, TextWrapper } from "./StyledAbout";

const AboutUs = () => {
  return (
    <PageWrapper>
      <BigBox padding="20px 25px 70px 55px" mb="" >
        <ContentRow>
          <TextWrapper>
            <GradientText
              sx={{ lineHeight: "77px", paddingTop: "13px" }}
              fontSizeLg={48}
              fontSizeXs={32}
            >
              We are here to make your transaction much easier
            </GradientText>

            <AppTypographyBold
              size={18}
              sx={{ lineHeight: "42px", marginTop: "26px" }}
            >
              At pmusdt.com, we believe that everyone should have the freedom to
              earn, hold, spend, share and give their money - no matter who you
              are or where you come from.
            </AppTypographyBold>
          </TextWrapper>

          <ImageWrapper>
            <Image src={aboutImg} alt="About us" />
          </ImageWrapper>
        </ContentRow>
      </BigBox>
   <ValusBox/>
    </PageWrapper>
  );
};

export default AboutUs;
