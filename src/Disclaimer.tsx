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
    padding: "0 1.6rem",
    maxWidth: "80rem",
    margin: "0 auto",
    paddingTop: "4rem",
    color: "#bdbdbd",
    wordBreak: "break-word",
  },
  container: {
    border: "2px solid #bdbdbd",
    padding: "1.6rem",
  },
  smaller: {
    fontSize: "2rem",
  },
  small: {
    fontSize: "1.5rem",
  },
  tiny: {
    fontSize: "1rem",
  },
  smallest: {
    fontSize: "0.5rem",
  },
});

type Props = {
  style?: StyleXStyles<any>;
};

export default function Tokenomics({ style }: Props) {
  return (
    <div {...stylex.props(styles.default, style)}>
      <div {...stylex.props(styles.container)}>
        <p>
          <u>Disclaimer</u>
          <p>
            {" "}
            {/* what the FUCK is this? <p> cannot appear as a descendant of <p> */}
            Please read this disclaimer carefully.
          </p>
          <p {...stylex.props(styles.smaller, style)}>
            By even considering the purchase of this ERC20 token, you
            acknowledge and agree that you are willfully ignoring common sense
            and reason. Furthermore, the following risks are not exhaustive and
            there may be other risks that we have not foreseen or identified:
            <ul>
              <li {...stylex.props(styles.small, style)}>
                Risk of Spontaneous Combustion: There is a non-zero chance
                (approximately
                0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001%
                chance) that the ERC20 token you are about to purchase will
                spontaneously combust, leaving you with nothing but a pile of
                digital ash and a profound sense of regret.
              </li>
              <li {...stylex.props(styles.tiny, style)}>
                Possibility of Alien Abduction: The purchase of this ERC20 token
                may attract the attention of extraterrestrial beings who, upon
                discovering your questionable investment decision, will promptly
                abduct you for further study. Nobody can be held responsible for
                any probing that may occur as a result of your poor judgment.
              </li>
              <li {...stylex.props(styles.smallest, style)}>
                Inadvertent Time Travel: It has been theorized that purchasing
                Mingus may create a quantum entanglement with the fabric of
                spacetime, causing you to inadvertently travel through time.
                While this could be a fantastic adventure, it is also fraught
                with peril and may result in paradoxes that could unravel the
                very fabric of existence.
              </li>
            </ul>
          </p>
        </p>
      </div>
    </div>
  );
}
