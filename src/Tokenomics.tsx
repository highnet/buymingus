import stylex from "@stylexjs/stylex";
import { StyleXStyles } from "@stylexjs/stylex/lib/StyleXTypes";
import List from "trmd3components/List";
import ListItem from "trmd3components/ListItem";

const styles = stylex.create({
  default: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2.4rem",
    marginTop: "4rem",
    backgroundColor: "#0091FF",
    clipPath: "polygon(0 1%,100% 0,100% 100%,0 95%);",
    paddingTop: "4rem",
    paddingBottom: "4rem",
    color: "white"
  },
  title: {
    marginBottom: "2rem",
    fontSize: "4.2rem",
  },
});

type Props = {
  style?: StyleXStyles<any>;
}

export default function Tokenomics({ style }: Props) {
  return <div {...stylex.props(styles.default, style)}>
    <u {...stylex.props(styles.title, style)}>Tokenomics</u>
    <List>
      <ListItem
        className="list-item-dark-theme"
        size="2-line"
        leadingElement="icon"
        iconName="paid"
        title="Total Supply"
      >
        100 million tokens
      </ListItem>
      <ListItem
        className="list-item-dark-theme"
        size="2-line"
        leadingElement="icon"
        iconName="local_fire_department"
        title="Initial Liquidity Pool"
      >
        Burned
      </ListItem>
      <ListItem
        className="list-item-dark-theme"
        size="2-line"
        leadingElement="icon"
        iconName="developer_board"
        title="Initial Supply Burn"
      >
        ~11mm MINGUS
      </ListItem>
      <ListItem
        className="list-item-dark-theme"
        size="2-line"
        leadingElement="icon"
        iconName="diversity_3"
        title="No team distribution"
      >
        Not even a little bit
      </ListItem>
      <ListItem
        className="list-item-dark-theme"
        size="2-line"
        leadingElement="icon"
        iconName="block"
        title="No distributions at all."
      >
        No presale, no airdrop
      </ListItem>
    </List>
  </div>;
}