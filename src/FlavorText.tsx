import { colors } from "@stylexjs/open-props/lib/colors.stylex";
import stylex from "@stylexjs/stylex";
import { StyleXStyles } from "@stylexjs/stylex/lib/StyleXTypes";
import { useMediaQuery } from 'react-responsive';
import Carousel from "trmd3components/Carousel";

const styles = stylex.create({
  default: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2.4rem",
    marginTop: "4rem",
    backgroundColor: colors.choco8,
    clipPath: "polygon(0 1%,100% 0,100% 95%,0 100%);",
    paddingTop: "4rem",
    paddingBottom: "4rem",
    color: "white",
    textAlign: "center",
  },
  title: {
    marginBottom: "2rem",
  },
});

type Props = {
  style?: StyleXStyles<any>;
};

export default function FlavorText({ style }: Props) {
  const isMobile = useMediaQuery({ maxDeviceWidth: 601 });

  return <div {...stylex.props(styles.default, style)}>
    <p>Reclaiming the liquidity from cat tokens.</p>
    <Carousel
      width={isMobile ? 25 : 80}
      images={[
        {
          imageSource: "/src/assets/cat0.jpg",
          label: "Buy Mingus",
          supportingText: "https://mingus.co/"
        },
        { imageSource: "/src/assets/cat1.jpg" },
        { imageSource: "/src/assets/cat2.jpg" },
        { imageSource: "/src/assets/cat3.jpg" },
        { imageSource: "/src/assets/cat4.jpg" },
        { imageSource: "/src/assets/cat5.jpg" },
        { imageSource: "/src/assets/cat6.jpg" },
        { imageSource: "/src/assets/cat7.jpg" },
      ]}
    />
  </div>;
}