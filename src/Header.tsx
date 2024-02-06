import stylex from "@stylexjs/stylex";
import { StyleXStyles } from "@stylexjs/stylex/lib/StyleXTypes";
import Button from "./Button";

const styles = stylex.create({
  defaultHeader: {
    display: "flex",
    alignItems: "flex-end",
    flexDirection: "column",
    justifyContent: "center",
    width: "100%",
    height: "10rem",
    backgroundColor: "black",
    clipPath: "polygon(0 1%, 100% 0, 100% 90%, 0% 100%)",
    padding: "1.2rem",
    "@media (min-width: 601px)": {
      padding: "3.2rem",
    },
  },
  headerChild: {
    display: 'flex',
    flexDirection: 'column',
    "@media (min-width: 601px)": {
      flexDirection: "row",
    },
  },
  headerButton: {
    marginLeft: "2rem",
  },
});

type Props = {
  style?: StyleXStyles<any>;
};

const openCamelotMingus = () => {
  const url =
    "https://app.camelot.exchange/?token2=0xA8F77a162f0d8fC775A2aaE9Ea855f293e5C9772";
  window.open(url, "_blank")?.focus();
};

const openCamelotM404 = () => {
  const url =
    "https://app.camelot.exchange/?token2=0xA8F77a162f0d8fC775A2aaE9Ea855f293e5C9772";
  window.open(url, "_blank")?.focus();
};

export default function Header({ style }: Props) {
  return (
    <div {...stylex.props(styles.defaultHeader, style)}>
      <div {...stylex.props(styles.headerChild, style)}>
        <Button onClick={openCamelotM404} style={styles.headerButton}>Buy $M404</Button>
        <Button onClick={openCamelotMingus} style={styles.headerButton}>Buy $mingus</Button>
      </div>
    </div>
  );
}
