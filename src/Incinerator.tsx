import stylex from "@stylexjs/stylex";
import { StyleXStyles } from "@stylexjs/stylex/lib/StyleXTypes";
import Furnace from "./Furnace";

const styles = stylex.create({
  default: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    border: ".1rem solid white",
  }
});

type Props = {
  style?: StyleXStyles<any>;
};

export default function Incinerator({ style }: Props) {
  return (

    <div {...stylex.props(styles.default, style)}>
      <Furnace />
    </div>
  );
}
