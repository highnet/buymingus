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
          imageSource: "cat0.jpg",
          label: "Buy Mingus",
          supportingText: "https://mingus.co/"
        },
        { imageSource: "cat1.jpg" },
        { imageSource: "cat2.jpg" },
        { imageSource: "cat3.jpg" },
        { imageSource: "cat4.jpg" },
        { imageSource: "cat5.jpg" },
        { imageSource: "cat6.jpg" },
        { imageSource: "cat7.jpg" },
      ]}
    />
  </div>;
}