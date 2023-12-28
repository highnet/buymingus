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
    maxWidth: "80rem",
    margin: "0 auto",
    paddingTop: "4rem",
    color: "#bdbdbd",
    wordBreak: "break-word",
  },
});

type Props = {
  style?: StyleXStyles<any>;
};

export default function Tokenomics({ style }: Props) {
  return <div {...stylex.props(styles.default, style)}>
    <p>
      <u>Disclaimer</u>
      <p>
        Please read this disclaimer carefully.
      </p>

      <p>
      By even considering the purchase of this ERC20 token, you acknowledge and agree that you are willfully ignoring common sense and reason. Furthermore, the following risks are not exhaustive and there may be other risks that we have not foreseen or identified:
        <ul>
          <li>Risk of Spontaneous Combustion: There is a non-zero chance (approximately 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001% chance) that the ERC20 token you are about to purchase will spontaneously combust, leaving you with nothing but a pile of digital ash and a profound sense of regret.</li>
          <li>Possibility of Alien Abduction: The purchase of this ERC20 token may attract the attention of extraterrestrial beings who, upon discovering your questionable investment decision, will promptly abduct you for further study. Nobody can be held responsible for any probing that may occur as a result of your poor judgment.</li>
          <li>Inadvertent Time Travel: It has been theorized that purchasing Mingus may create a quantum entanglement with the fabric of spacetime, causing you to inadvertently travel through time. While this could be a fantastic adventure, it is also fraught with peril and may result in paradoxes that could unravel the very fabric of existence.</li>
        </ul>
      </p>

      <p>TLDR Buy at your own risk or even better, don't buy at all.</p>
    </p>
  </div>;
}