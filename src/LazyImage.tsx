import stylex from "@stylexjs/stylex";
import { StyleXStyles } from "@stylexjs/stylex/lib/StyleXTypes";

const styles = stylex.create({
  defaultLazyImage: {
    width: "100%",
    height: "100%",
  },
});

type Props = {
  src: string;
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
};

export default function LazyImage({ src, onClick, style }: Props) {
  return <img loading="lazy" src={src} onClick={onClick} {...stylex.props(styles.defaultLazyImage, style)} />;
}