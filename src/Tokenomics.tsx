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

  },

});

type Props = {
  style?: StyleXStyles<any>;
};

export default function Tokenomics({ style }: Props) {
  return <div {...stylex.props(styles.default, style)}>
    <u>Tokenomics</u>
    <ul>
      <li>Lorem</li>
      <li>ipsum</li>
      <li>dolor</li>
      <li>sit</li>
      <li>amet</li>
    </ul>
  </div>;
}