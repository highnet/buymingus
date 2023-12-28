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
    padding: "3.2rem",
  },
});

type Props = {
  style?: StyleXStyles<any>;
};

export default function Header({ style }: Props) {
  return <div {...stylex.props(styles.defaultHeader, style)}>
    <Button>Lorem Ipsum</Button>
  </div>;
}