import { FC, ReactNode, useEffect } from "react";
import Head from "next/head";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useDispatch } from "react-redux";
import { setWindowSize } from "/src/store/slices/windowSizeSlice";
import {useAppSelector} from "/src/hooks/redux";
import MobileMenu from "/src/components/MobileMenu/MobileMenu";

interface LayoutProps {
  title: string;
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ title, children }) => {
  const windowSizeWidth = useAppSelector(state => state.windowSize.width);
  const dispatch = useDispatch();

  useEffect(() => {
    const resizeHandler = ():void => {
      dispatch(
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      );
    };

    resizeHandler();
    window.addEventListener("resize", resizeHandler);

    return () => window.removeEventListener("resize", resizeHandler);
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main className="container">{children}</main>
      {windowSizeWidth < 1160 && <MobileMenu/>}
      <Footer />
    </>
  );
};

export default Layout;
