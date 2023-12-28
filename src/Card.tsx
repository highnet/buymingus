import stylex from "@stylexjs/stylex";
import { ReactNode } from "react";
import { StyleXStyles } from "@stylexjs/stylex/lib/StyleXTypes";
import { colors } from '@stylexjs/open-props/lib/colors.stylex'

const styles = stylex.create({
  defaultCard: {
    display: "flex",
    backgroundColor: "black",
    borderRadius: "0.8rem",
    color: colors.teal0,
    padding: "0.8rem 1.6rem",
    fontSize: "4.8rem",
    alignItems: "center",
    justifyContent: "center",
    gap: "1.6rem",
  },
});

type Props = {
  children?: ReactNode;
  style?: StyleXStyles<any>;
};

export default function Card({ children, style }: Props) {
  return <div {...stylex.props(styles.defaultCard, style)}>{children}</div>;
}