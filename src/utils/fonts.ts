import localFont from "next/font/local";

const iviSans = localFont({
  src: [
    {
      path: "../assets/fonts/iviSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/iviSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/iviSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--iviSans",
});
const iviIcons = localFont({
  src: "../assets/fonts/ivi-icons.woff",
  variable: "--ivi-icons",
});
const iconFont = localFont({
  src: "../assets/fonts/iconfont.woff",
  variable: "--iconfont",
});

export { iviSans, iviIcons, iconFont };
