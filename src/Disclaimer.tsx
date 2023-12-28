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
    clipPath: "polygon(0 1%,100% 0,100% 100%,0 95%);",

  },

});

type Props = {
  style?: StyleXStyles<any>;
};

export default function Tokenomics({ style }: Props) {
  return <div {...stylex.props(styles.default, style)}>
    <u>Disclaimer</u>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et commodo massa, non tincidunt diam. Nullam ex nulla, ullamcorper ut elementum at, ullamcorper eget nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas eu malesuada velit
  </div>;
}