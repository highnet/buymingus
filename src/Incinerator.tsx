import stylex from "@stylexjs/stylex";
import { StyleXStyles } from "@stylexjs/stylex/lib/StyleXTypes";
import Furnace from "./Furnace";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from "wagmi";

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
    marginTop: "1.6rem"
  },
  container: {

    width: "fit-content",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1.8rem",
    "@media (min-width: 601px)": {
      alignItems: "flex-end",
    },
  },

});

type Props = {
  style?: StyleXStyles<any>;
};

export default function Incinerator({ style }: Props) {
  const account = useAccount();

  return (
    <div {...stylex.props(styles.default, style)}>
      <div {...stylex.props(styles.container)}>
        {account.status === "connected" && <ConnectButton />}
        <Furnace />
      </div>
    </div>
  );
}
