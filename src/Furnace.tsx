import stylex from "@stylexjs/stylex";
import { StyleXStyles } from "@stylexjs/stylex/lib/StyleXTypes";
import { Link } from "@tanstack/react-router";
import Button from "./Button";
import Icon from "trmd3components/Icon";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Address,
  erc20ABI,
  useAccount,
  useContractRead,
  useContractWrite,
  useWalletClient,
} from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { TokenList } from "@uniswap/token-lists";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import * as z from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "./components/ui/form";
import * as incineratorABI from "./abis/Incinerator.json";
import { getContract } from "viem";

enum ContextState {
  Incinerate = "incinerate",
  About = "about",
}

const styles = stylex.create({
  defaultBefore: {
    content: '""',
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: -1,
    margin: "-0.35rem",
    borderRadius: "inherit",
    background: "linear-gradient(to right, #FF9900, violet)",
  },
  default: {
    display: "flex",
    flexDirection: "column",
    width: "90vw",
    height: "auto",
    background:
      "linear-gradient(251deg, rgba(56,121,171,1) 0%, rgba(0,145,255,1) 100%)",
    paddingTop: "3rem",
    color: "white",
    position: "relative",
    border: ".5rem solid transparent",
    backgroundClip: "padding-box",
    boxShadow: "3px 3px 20px 10px violet, -3px -3px 20px 10px #FF9900",
    "@media (min-width: 601px)": {
      width: "601px",
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
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  },
  contextMenuWrapper: {
    paddingRight: "1rem",
    paddingLeft: "1rem",
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
    transition: "height 0.5s ease-in-out",
    overflow: "hidden",
    padding: "0 1.6rem 0 1.6rem",
    fontSize: "1.6rem",
  },
  settingsVisible: {
    height: "6.4rem",
  },
  incinerate: {
    padding: "1.6rem",
    fontSize: "1.4rem",
    display: "flex",
    flexDirection: "column",
  },
  about: {
    padding: "1.6rem",
    fontSize: "1.4rem",
  },
  unauthorized: {
    fontSize: "2rem",
  },
  inputWithPill: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "0.8rem",
  },
  swapIcon: {
    position: "relative",
    margin: "-1.5rem auto",
    display: "flex",
    alignSelf: "center",
    justifyContent: "center",
    transform: "scale(1.3)",
    pointerEvents: "none",
    backgroundColor: "#0090FE",
    borderRadius: "25%",
    overflow: "visible",
    boxSize: "content-box",
    width: "3rem",
    height: "3rem",
    border: ".3rem solid #1C81CF",
  },
  inputField: {
    border: "none",
    width: "100%",
    fontSize: "3.6rem",
    height: "6.4rem",
    lineHeight: "6.4rem",
    backgroundColor: "transparent",
    opacity: "1",
    color: "white",
    "::placeholder": {
      color: "rgba(255, 255, 255, 0.5)",
    },
  },
  inputFieldDisabled: {
    pointerEvents: "none",
  },
  select: {
    border: "none",
    width: "14rem",
    fontSize: "2rem",
    height: "4.1rem",
    lineHeight: "4.1rem",
    backgroundColor: "rgba(1, 1, 1, 0.1)",
    borderRadius: "1.6rem",
    display: "flex",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "rgba(1, 1, 1, 0.02)",
    borderRadius: "1.6rem",
    padding: ".8rem",
    gap: ".2rem",
    boxSizing: "border-box",
  },
  subForm: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#0090FE",
    borderRadius: "1.6rem",
    padding: "2.5rem",
    border: "1px solid transparent",
  },
  subFormFocused: {
    backgroundColor: "#0B8AEA",
    border: "1px solid rgba(1, 1, 1, 0.1)",
  },
  subFormHidden: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#0090FE",
    borderRadius: "1.6rem",
    padding: "0rem",
    border: "1px solid transparent",
    height: "0rem",
    overflow: "hidden",
    transition: "all .6s ease-out",
    opacity: "0",
  },
  subFormVisible: {
    height: "16rem",
    padding: "2.5rem",
    opacity: "1",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#0090FE",
    borderRadius: "1.6rem",
    border: "1px solid transparent",
    transition: "all .6s ease-out", // Add this line
  },
  inputLabel: {
    fontSize: "1.9rem",
    padding: "0 0 0.8rem 0",
  },
  tokenLogo: {
    width: "3.2rem",
    height: "3.2rem",
    borderRadius: "50%",
    background: "linear-gradient(to right, #FF9900, violet)",
  },
  submitButton: {
    transition: "all 0.25s ease-in",
    height: "0rem",
    padding: "0",
    opacity: "0",
    overflow: "hidden",
  },
  submitButtonVisible: {
    height: "7.2rem",
    padding: "2.4rem 0 2.4rem 0",
    opacity: "1",
    overflow: "visible",
  },
});

function Settings({ visible }: { visible: boolean }) {
  return (
    <div {...stylex.props(styles.settings, visible && styles.settingsVisible)}>
      Settings
    </div>
  );
}

function Unauthorized() {
  return (
    <div {...stylex.props(styles.unauthorized)}>
      <ConnectButton />
    </div>
  );
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
    tokens: [
      {
        chainId: 42161, // arbitrum
        address: "0xA8F77a162f0d8fC775A2aaE9Ea855f293e5C9772",
        name: "mingus",
        symbol: "mingus",
        decimals: 18,
        logoURI:
          "https://assets.coingecko.com/coins/images/33917/standard/2023-12-21_21.39.10.jpg?1703321588",
      },
      {
        chainId: 137, // polygon
        address: "0x9e20461bc2c4c980f62f1B279D71734207a6A356",
        name: "OmniCat",
        symbol: "OMNI",
        decimals: 18,
        logoURI:
          "https://assets.coingecko.com/coins/images/33917/standard/2023-12-21_21.39.10.jpg?1703321588",
      },
    ],
  };
}

const formSchema = z.object({
  inputAmount: z.string().min(1, {
    message: "amount must be at least 1 characters.",
  }),
  inputToken: z.string(),
  outputAmount: z.string().min(1, {
    message: "outputAmount must be at least 1 characters.",
  }),
  outputToken: z.string(),
});

function Incinerate() {
  const [subForm0IsFocused, setSubForm0IsFocused] = useState(false);
  const subForm0Ref = useRef<HTMLDivElement>(null);
  const [subForm1IsFocused, setSubForm1IsFocused] = useState(false); // LMAO CAN U MAKE THIS A SCALABLE SYSTEM?
  const subForm1Ref = useRef<HTMLDivElement>(null);
  const [buttonText, setButtonText] = useState("Incinerate");
  const [canSubmit, setCanSubmit] = useState(false);

  const { address: account } = useAccount();
  const walletClient = useWalletClient().data!;
  // generate your token list however you like.
  const tokenList: TokenList = generateMyTokenList();

  const incineratorContractConfig = {
    address: "0xA6f808109B44778732e0814aC401CD9eE45E4a19",
    abi: incineratorABI.abi,
    startBlock: import.meta.env.PROD ? 156835731 : 155879476,
  } as const;

  const incinerationUnderlying = getContract({
    address: tokenList.tokens[1].address as Address,
    abi: erc20ABI,
    walletClient,
  });

  if (!incineratorContractConfig || !incinerationUnderlying) return;

  const { write: depositCat } = useContractWrite({
    ...incineratorContractConfig,
    functionName: "depositCat",
    value: BigInt(0.5 * 10 ** 18), // half a matic ether (bout $0.5 at time of writing)
  });

  const incinerationAllowance = useContractRead({
    ...incinerationUnderlying,
    functionName: "allowance",
    args: [
      account as Address, // owner
      incineratorContractConfig.address, // spender
    ],
  });

  const { write: approvateIncineration } = useContractWrite({
    ...incinerationUnderlying,
    functionName: "approve",
  });

  // use a tool like `ajv` to validate your generated token list
  // validateMyTokenList(myList, schema);

  // print the resulting JSON to stdout
  // console.log(JSON.stringify(tokenList));

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      inputAmount: "",
      inputToken: tokenList.tokens[1].address, // omnicat
      outputAmount: "1337",
      outputToken: tokenList.tokens[0].address, // mingus
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    try {
      if (
        BigInt(incinerationAllowance.data ?? 0) < BigInt(values.inputAmount)
      ) {
        approvateIncineration({
          args: [
            incinerationUnderlying.address, // spender
            BigInt(values.inputAmount) * BigInt(10) ** BigInt(18), // amount
          ],
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }

    const params = {
      // Not all token symbols are supported. The address of the token should be used instead.
      sellToken: values.inputToken, // OmniCat ON POLYGON
      buyToken: "0x750e4C4984a9e0f12978eA6742Bc1c5D248f40ed", // axlUSDC ON POLYGON
      sellAmount: (
        BigInt(values.inputAmount) *
        BigInt(10) ** BigInt(18)
      ).toString(),
    };

    const headers = { "0x-api-key": import.meta.env.VITE_ZEROX_API_KEY };

    try {
      const fetchResponse = await fetch(
        `https://polygon.api.0x.org/swap/v1/quote?${new URLSearchParams(params).toString()}`,
        { headers },
      );
      const response = await fetchResponse.json();
      console.log(response);

      const swapData = response.data;
      console.log("swapData", swapData);

      console.log("address", tokenList.tokens[1].address);

      depositCat({
        args: [
          tokenList.tokens[1].address, // cat address
          "0x750e4C4984a9e0f12978eA6742Bc1c5D248f40ed", // axlUSDC of chain, ie polylgon
          "axlUSDC", // ie polygon
          10000 * 10 ** 18, // 10,000 Omnicat
          "0x960833d7804a7ade9d360501aebd94008b8c4838", // bridgeDestination
          swapData,
        ],
      });
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const handleFormchange = (e: ChangeEvent) => {
    console.log(form.getValues());
    if (e.nativeEvent.currentTarget) {
      const inputAmount = (e.nativeEvent.target as HTMLInputElement).value;
      if (inputAmount === "") {
        setCanSubmit(false);
        return;
      }
    }

    setCanSubmit(true);
  };

  useEffect(() => {
    const [integerPart, fractionalPart] = form
      .getValues()
      .inputAmount.split(".");
    const integerPartBigInt = BigInt(integerPart) * BigInt(10) ** BigInt(18);
    const fractionalPartBigInt = fractionalPart
      ? BigInt(fractionalPart) *
        BigInt(10) ** BigInt(18 - fractionalPart.length)
      : BigInt(0);
    const inputAmountBigInt = integerPartBigInt + fractionalPartBigInt;
    if (inputAmountBigInt > BigInt(incinerationAllowance.data ?? 0)) {
      setButtonText("Approve");
    } else {
      setButtonText("Incinerate");
    }
  }, [form.getValues().inputAmount, incinerationAllowance.data]);

  function renderSwapIcon() {
    if (!account) {
      return <Icon>block</Icon>;
    } else if (subForm0IsFocused || canSubmit) {
      return <Icon>swap_vertical_circle</Icon>;
    } else {
      return <Icon>local_fire_department</Icon>;
    }
  }

  return (
    <div {...stylex.props(styles.incinerate)}>
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          {...stylex.props(styles.form)}
        >
          <div
            ref={subForm0Ref}
            {...stylex.props(
              styles.subForm,
              subForm0IsFocused ? styles.subFormFocused : null,
            )}
            tabIndex={0}
          >
            <div {...stylex.props(styles.inputLabel)}>Amount to Incinerate</div>
            <div {...stylex.props(styles.inputWithPill)}>
              <FormField
                control={form.control}
                name="inputAmount"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="0"
                        {...field}
                        {...stylex.props(styles.inputField)}
                        onChange={(e) => {
                          field.onChange(e);
                          handleFormchange(e);
                        }}
                        onFocus={(e) => {
                          e.stopPropagation();
                          if (subForm0Ref.current) {
                            setSubForm0IsFocused(true);
                          }
                        }}
                        onBlur={() => {
                          setSubForm0IsFocused(false);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="inputToken"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Select onValueChange={field.onChange} {...field}>
                        <SelectTrigger {...stylex.props(styles.select)}>
                          <div {...stylex.props(styles.tokenLogo)} />
                          <SelectValue placeholder={tokenList.tokens[0].name} />
                        </SelectTrigger>
                        <SelectContent>
                          {[tokenList.tokens[1]].map((token, index) => (
                            <SelectItem key={index} value={token.address}>
                              {token.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div {...stylex.props(styles.swapIcon)}>{renderSwapIcon()}</div>
          <div
            ref={subForm1Ref}
            {...stylex.props(
              subForm1IsFocused ? styles.subFormFocused : null,
              canSubmit || subForm0IsFocused
                ? styles.subFormVisible
                : styles.subFormHidden,
            )}
            tabIndex={0}
          >
            <div {...stylex.props(styles.inputLabel)}>You Get</div>
            <div {...stylex.props(styles.inputWithPill)}>
              <FormField
                control={form.control}
                name="outputAmount"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        {...stylex.props(styles.inputField)}
                        onFocus={(e) => {
                          e.stopPropagation();
                          if (subForm1Ref.current) {
                            setSubForm1IsFocused(true);
                          }
                        }}
                        onBlur={() => {
                          setSubForm1IsFocused(false);
                        }}
                        onChange={(e) => {
                          e.preventDefault();
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="outputToken"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Select onValueChange={field.onChange} {...field}>
                        <SelectTrigger {...stylex.props(styles.select)}>
                          <div {...stylex.props(styles.tokenLogo)} />
                          <SelectValue placeholder={tokenList.tokens[0].name} />
                        </SelectTrigger>
                        <SelectContent>
                          {[tokenList.tokens[0]].map((token, index) => (
                            <SelectItem key={index} value={token.address}>
                              {token.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div
            {...stylex.props(
              styles.submitButton,
              canSubmit ? styles.submitButtonVisible : null,
            )}
          >
            <Button type="submit">{buttonText}</Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

function About() {
  return (
    <div {...stylex.props(styles.about)}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius dictum
      nibh, quis fringilla nunc finibus in. Praesent vitae hendrerit massa.
      Integer semper leo ac eleifend porta. Vivamus ultrices tellus nec varius
      blandit. Praesent sagittis metus vitae dolor finibus egestas. Vestibulum
      efficitur egestas velit. Sed facilisis felis vitae urna finibus aliquet.
      Proin consequat eu diam eget pellentesque. Nunc sed libero urna. Class
      aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
      himenaeos. Ut cursus consectetur leo. Suspendisse ultrices accumsan
      tempus. Quisque vel erat mollis, euismod sem eu, gravida quam. Nulla nec
      felis sagittis velit fringilla dictum congue eget ex. Quisque eget
      fermentum lacus.
    </div>
  );
}

type Props = {
  style?: StyleXStyles<any>;
};

export default function Furnace({ style }: Props) {
  const [contextState, setContextState] = useState<ContextState>(
    ContextState.About,
  );
  const [showSettings, setShowSettings] = useState(false);
  const account = useAccount();

  useEffect(() => {
    if (account.status === "connected") {
      setContextState(ContextState.Incinerate);
    }
  }, [account.status]);

  let contextDisplay;
  switch (contextState) {
    case "incinerate":
      contextDisplay = <Incinerate />;
      break;
    case "about":
      contextDisplay = <About />;
      break;
    default:
      contextDisplay = null;
  }

  return (
    <div {...stylex.props(styles.default, style)}>
      <div {...stylex.props(styles.defaultBefore)} />
      <div {...stylex.props(styles.header)}>
        <Link {...stylex.props(styles.link)} to="/">
          <Button>
            <Icon>arrow_back</Icon>
          </Button>
        </Link>
        {account.status !== "connected" && <Unauthorized />}
        <Link {...stylex.props(styles.link)}>
          <Button toggleable onClick={() => setShowSettings(!showSettings)}>
            <Icon>settings</Icon>
          </Button>
        </Link>
      </div>
      <Settings visible={showSettings} />
      <div {...stylex.props(styles.contextMenuWrapper)}>
        <Separator />
        <div {...stylex.props(styles.contextMenu)}>
          <button
            {...stylex.props(
              styles.contextSwitcher,
              contextState !== ContextState.Incinerate &&
                styles.inactiveContext,
            )}
            onClick={() => setContextState(ContextState.Incinerate)}
          >
            <p {...stylex.props(styles.contextHeader)}>Furnace</p>
          </button>
          <button
            {...stylex.props(
              styles.contextSwitcher,
              contextState !== ContextState.About && styles.inactiveContext,
            )}
            onClick={() => setContextState(ContextState.About)}
          >
            <p {...stylex.props(styles.contextHeader)}>About</p>
          </button>
        </div>
        <Separator />
      </div>
      <div>{contextDisplay}</div>
    </div>
  );
}
