import { useState, useEffect } from 'react';
import stylex from "@stylexjs/stylex";
import { StyleXStyles } from "@stylexjs/stylex/lib/StyleXTypes";

const styles = stylex.create({
  defaultLazyImage: {
    width: "100%",
    height: "100%",
  },
});

type Props = {
  src: string[];
  onClick?: () => void;
  style?: StyleXStyles<{
    width?: string,
    height?: string,
    transform?: string,
    padding?: string,
    margin?: string,
    transition?: string,
    position?: string,
    borderRadius?: string,
    cursor?: string,
  }>;
  interval?: number;
};

export default function LazyImage({ src, onClick, style, interval = 3000 }: Props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % src.length);
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [src, interval]);

  return <img loading="lazy" src={src[currentImageIndex]} onClick={onClick} {...stylex.props(styles.defaultLazyImage, style)} />;
}