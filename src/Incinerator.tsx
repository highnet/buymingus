import stylex from "@stylexjs/stylex";
import { StyleXStyles } from "@stylexjs/stylex/lib/StyleXTypes";
import Furnace from "./Furnace";
import { ConnectButton } from '@rainbow-me/rainbowkit';

const styles = stylex.create({
  default: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    "@media (min-width: 601px)": {
      paddingTop: "0",
      borderRadius: "1.6rem",
    },
    overflow: "hidden",
    marginTop: "1.6rem"
  },
  container: {
    width: "fit-content",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: "1.6rem",
  },

});

type Props = {
  style?: StyleXStyles<any>;
};

export default function Incinerator({ style }: Props) {

  return (
    <div {...stylex.props(styles.default, style)}>
      <div {...stylex.props(styles.container)}>
        <ConnectButton />
        <Furnace />
      </div>
    </div>
  );
}
