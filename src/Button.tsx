import stylex from "@stylexjs/stylex";
import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from "react";
import { StyleXStyles } from "@stylexjs/stylex/lib/StyleXTypes";
import { colors } from '@stylexjs/open-props/lib/colors.stylex'

const styles = stylex.create({
  defaultButton: {
    display: "flex",
    jusstifyContent: "center",
    alignItems: "center",
    gap: "1.6rem",
    border: `0.1rem solid ${colors.teal4}`,
    borderRadius: "0.8rem",
    background: `linear-gradient(to right, ${colors.yellow5} 50%, ${colors.teal4} 50%)`,
    backgroundSize: '200%',
    backgroundPosition: 'right bottom',
    color: colors.teal0,
    padding: "0.8rem 1.6rem",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
    fontSize: "3.2rem",
    width: 'fit-content',
    ":hover": {
      backgroundPosition: 'left bottom',
      scale: 1.3
    }
  },

});

type Props = {
  children?: ReactNode;
  style?: StyleXStyles<any>;
  onClick?: () => void;
};

export default function Button({ children, style, onClick }: Props) {
  const buttonRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const randomRotation = Math.floor(Math.random() * 4) - 2;
    if (buttonRef.current) {
      buttonRef.current.style.transform = `rotate(${randomRotation}deg)`;
    }
  }, []);

  return <div ref={buttonRef} {...stylex.props(styles.defaultButton, style)} onClick={onClick}>{children}</div>;
}