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
    backgroundColor: colors.teal4,
    clipPath: "polygon(0 1%,100% 0,100% 100%,0 95%);",
    paddingTop: "4rem",
    paddingBottom: "4rem",
  },
  title: {
    marginBottom: "2rem",
  },
});

type Props = {
  style?: StyleXStyles<any>;
};

export default function Tokenomics({ style }: Props) {
  return <div {...stylex.props(styles.default, style)}>
    <u {...stylex.props(styles.title, style)}>Tokenomics</u>
    <ul>
      <li>100mm supply</li>
      <li>Initial LP Burned</li>
      <li>Initial Supply Burn by dev ~11mm MINGUS</li>
      <li>No team distribution</li>
      <li>No distributions at all.</li>
    </ul>
  </div>;
}