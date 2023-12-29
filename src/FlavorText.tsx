import { colors } from "@stylexjs/open-props/lib/colors.stylex";
import stylex from "@stylexjs/stylex";
import { StyleXStyles } from "@stylexjs/stylex/lib/StyleXTypes";

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
    color: "white"
  },
  title: {
    marginBottom: "2rem",
  },
});

type Props = {
  style?: StyleXStyles<any>;
};

export default function FlavorText({ style }: Props) {
  return <div {...stylex.props(styles.default, style)}>
    <ul>
      Reclaiming the liquidity from cat tokens.
    </ul>
  </div>;
}