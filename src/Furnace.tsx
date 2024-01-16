import stylex from "@stylexjs/stylex";
import { StyleXStyles } from "@stylexjs/stylex/lib/StyleXTypes";
import { Link } from "@tanstack/react-router";
import Button from "./Button";
import Icon from "trmd3components/Icon";
import { colors } from "@stylexjs/open-props/lib/colors.stylex";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input"
import { useAccount } from 'wagmi'
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Address } from "viem";
import { TokenList } from '@uniswap/token-lists'
import { Separator } from "@/components/ui/separator"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

enum ContextState {
  Incinerate = 'incinerate',
  About = 'about',
}

const styles = stylex.create({
  default: {
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    height: "100vh",
    border: ".1rem solid black",
    backgroundColor: colors.brown10,
    paddingTop: "3rem",
    color: "white",
    "@media (min-width: 601px)": {
      width: "50vw",
      height: "80vh",
      paddingTop: "0",
      borderRadius: "1.6rem",
    },
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    padding: "1.6rem",
  },
  contextMenu: {
    display: "flex",
    padding: "0 1.6rem 0 1.6rem",
    gap: "1.6rem",
  },
  contextMenuWrapper: {
    paddingRight: "1rem",
    paddingLeft: "1rem"
  },
  contextHeader: {
    fontSize: "2rem",
    padding: "0.8rem 0 0.8rem 0",
    ":hover": {
      textDecoration: "underline",
    },
  },
  contextSwitcher: {
    backgroundColor: "transparent",
    border: "none",
    color: "inherit",
  },
  inactiveContext: {
    opacity: "0.5",
  },
  settings: {
    height: "0rem",
    transition: 'height 0.5s ease-in-out',
    overflow: 'hidden',
    padding: '0 1.6rem 0 1.6rem',
    fontSize: '1.6rem',
  },
  settingsVisible: {
    height: "6.4rem",
  },
  incinerate: {
    padding: '1.6rem',
    fontSize: '1.4rem',
    display: 'flex',
    flexDirection: 'column',
  },
  about: {
    padding: '1.6rem',
    fontSize: '1.4rem',
  },
  unauthorized: {
    fontSize: '2rem',
  },
  inputWithPill: {
    display: 'flex',
    flexDirection: 'row',
    gap: '0.8rem',
  },
  swapIcon: {
    transform: 'scale(1.8)',
    pointerEvents: 'none',
    padding: '2rem 0 1rem 0',
  },
  incinerateButton: {
    display: 'flex',
    justifyContent: 'center',
    padding: '2.4rem 0 0 0',
  }
});

function Settings({ visible }: { visible: boolean }) {
  return <div
    {...stylex.props(styles.settings, visible && styles.settingsVisible)}
  >
    Settings
  </div>;
}

function Unauthorized() {
  return <div
    {...stylex.props(styles.unauthorized)}
  >
    <ConnectButton />
  </div>;
}

function generateMyTokenList() {
  return {
    name: "Mingus Bridge Token List",
    timestamp: "2024-01-16T11:52:32.625Z",
    version: {
      major: 1,
      minor: 0,
      patch: 0,
    },
    tokens: [{
      chainId: 137,
      address: '0x9e20461bc2c4c980f62f1B279D71734207a6A356',
      name: 'OmniCat',
      symbol: 'OMNI',
      decimals: 18,
      logoURI: 'https://assets.coingecko.com/coins/images/33917/standard/2023-12-21_21.39.10.jpg?1703321588',
    }],
  };
}

function Incinerate() {
  const catIncineratorContractAddress = '0x825F84F87Ed4fE096Ea4cb5EBa84F9Ed39D83ada' as Address;
  const account = useAccount();

  console.log(catIncineratorContractAddress, account.status);

  // generate your token list however you like.
  const tokenList: TokenList = generateMyTokenList();

  // use a tool like `ajv` to validate your generated token list
  // validateMyTokenList(myList, schema);

  // print the resulting JSON to stdout
  console.log(JSON.stringify(tokenList));

  return <div
    {...stylex.props(styles.incinerate)}
  >
    Amount
    <div {...stylex.props(styles.inputWithPill)}>
      <Input />
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={tokenList.tokens[0].name} />
        </SelectTrigger>
        <SelectContent>
          {tokenList.tokens.map((token, index) => (
            <SelectItem key={index} value={token.address}>
              {token.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
    <div {...stylex.props(styles.swapIcon)}>
      <Icon >swap_vertical_circle</Icon>
    </div>
    You Get
    <div {...stylex.props(styles.inputWithPill)}>
      <Input />
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Mingus" />
        </SelectTrigger>
      </Select>
    </div>
    <div {...stylex.props(styles.incinerateButton)}>
      <Button>
        Incinerate
      </Button>
    </div>

  </div>;
}

function About() {
  return <div
    {...stylex.props(styles.about)}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius dictum nibh, quis fringilla nunc finibus in. Praesent vitae hendrerit massa. Integer semper leo ac eleifend porta. Vivamus ultrices tellus nec varius blandit. Praesent sagittis metus vitae dolor finibus egestas. Vestibulum efficitur egestas velit. Sed facilisis felis vitae urna finibus aliquet.
    Proin consequat eu diam eget pellentesque. Nunc sed libero urna. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut cursus consectetur leo. Suspendisse ultrices accumsan tempus. Quisque vel erat mollis, euismod sem eu, gravida quam. Nulla nec felis sagittis velit fringilla dictum congue eget ex. Quisque eget fermentum lacus.</div>;
}

type Props = {
  style?: StyleXStyles<any>;
};

export default function Furnace({ style }: Props) {

  const [contextState, setContextState] = useState<ContextState>(ContextState.About);
  const [showSettings, setShowSettings] = useState(false);
  const account = useAccount();

  useEffect(() => {
    if (account.status === 'connected') {
      setContextState(ContextState.Incinerate);
    }
  }, [account.status]);

  let contextDisplay;
  switch (contextState) {

    case 'incinerate':
      contextDisplay = <Incinerate />;
      break;
    case 'about':
      contextDisplay = <About />;
      break;
    default:
      contextDisplay = null;
  }

  return (
    <div {...stylex.props(styles.default, style)}>
      <div {...stylex.props(styles.header)}>
        <Link
          {...stylex.props(styles.link)}
          to="/">
          <Button>
            <Icon>
              arrow_back
            </Icon>
          </Button>
        </Link>
        {account.status !== 'connected' && <Unauthorized />}
        <Link
          {...stylex.props(styles.link)}
        >
          <Button toggleable onClick={() => setShowSettings(!showSettings)}>
            <Icon>
              settings
            </Icon>
          </Button>
        </Link>
      </div>
      <Settings visible={showSettings} />
      <div {...stylex.props(styles.contextMenuWrapper)} >
        <Separator />
        <div {...stylex.props(styles.contextMenu)}>
          <button
            {...stylex.props(styles.contextSwitcher, contextState !== ContextState.Incinerate && styles.inactiveContext)}
            onClick={() => setContextState(ContextState.Incinerate)}
          >
            <p {...stylex.props(styles.contextHeader)}>
              Furnace
            </p>
          </button>
          <button
            {...stylex.props(styles.contextSwitcher, contextState !== ContextState.About && styles.inactiveContext)}
            onClick={() => setContextState(ContextState.About)}
          >
            <p {...stylex.props(styles.contextHeader)}>
              About
            </p>
          </button>
        </div>
        <Separator />
      </div>

      <div>
        {contextDisplay}
      </div>
    </div >
  );
}
