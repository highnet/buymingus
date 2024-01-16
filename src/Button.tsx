import stylex from "@stylexjs/stylex";
import { ReactNode, useLayoutEffect, useRef, useState } from "react";
import { StyleXStyles } from "@stylexjs/stylex/lib/StyleXTypes";

const styles = stylex.create({
  defaultButton: {
    display: "flex",
    jusstifyContent: "center",
    alignItems: "center",
    gap: "1.6rem",
    border: `0.1rem solid #FF9900`,
    borderRadius: "0.8rem",
    background: `linear-gradient(to right, #FF9900 50%, #0091FF 50%)`,
    backgroundSize: '200%',
    backgroundPosition: 'right bottom',
    color: "white",
    padding: "0.8rem 1.6rem",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
    fontSize: "2.2rem",
    width: 'fit-content',
    ":hover": {
      backgroundPosition: 'left bottom',
      scale: 1.3
    },
    "@media (min-width: 601px)": {
      fontSize: "3.2rem",
    },
  },

  largeButton: {
    fontSize: "3.2rem",
    padding: "1.6rem 3.2rem",
    "@media (min-width: 601px)": {
      fontSize: "7.2rem",
    },
  },
  hover: {
    backgroundPosition: 'left bottom',
    scale: 1.3
  }

});

type Props = {
  children?: ReactNode;
  style?: StyleXStyles<any>;
  onClick?: () => void;
  large?: boolean;
  toggleable?: boolean;
  type?: "button" | "submit" | "reset";
};

export default function Button({ children, style, onClick, large, toggleable, type }: Props) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isToggled, setIsToggled] = useState(false); // Add a new state for toggling

  useLayoutEffect(() => {
    const randomRotation = Math.floor(Math.random() * 4) - 2;
    if (buttonRef.current) {
      buttonRef.current.style.transform = `rotate(${randomRotation}deg)`;
    }
  }, []);

  const handleClick = () => {
    if (toggleable) {
      setIsToggled(!isToggled); // Toggle the state when the button is clicked
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      type={type} // Use the type prop here
      ref={buttonRef}
      {...stylex.props(styles.defaultButton, large ? styles.largeButton : null, (isToggled ? styles.hover : null), style)}
      onClick={handleClick}>
      {children}
    </button>
  );
}