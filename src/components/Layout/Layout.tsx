import { FC, ReactNode, useEffect } from "react";
import Head from "next/head";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { useDispatch } from "react-redux";
import { setWindowSize } from "/src/store/slices/windowSizeSlice";
import { useAppSelector } from "/src/hooks/redux";
import { useDebouncedCallback } from "use-debounce";
import MobileMenu from "./MobileMenu/MobileMenu";
import { setSlugs } from "/src/store/slices/slugsSlice";
import { ToastContainer } from "react-toastify";
import { iconFont, iviIcons, iviSans } from "/src/utils/fonts";
import ProgressBar from "/src/UI/ProgressBar/ProgressBar";
import { useCountriesSlugs } from "/src/api/countries";
import { useGenresSlugs } from "/src/api/genres";
import { setAuth, setRole } from "/src/store/slices/authSlice";
import {
  getUserByEmail,
  isUserAuthorized,
  refreshAccessToken,
} from "/src/api/user";
import { useAppInterceptors } from "/src/hooks/useAppInterceptors";
import { removeAuthData, setAuthData } from "/src/utils/localStorage";
import { deleteCookiesByNames } from "/src/utils/cookies";
import AdminButton from "/src/UI/AdminButton/AdminButton";
import { genresListSlugs } from "/src/utils/mocks/genres";
import { countriesListSlugs } from "/src/utils/mocks/countries";

interface LayoutProps {
  title: string;
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ title, children }) => {
  const genresSlugs = useGenresSlugs();
  const countriesSlugs = useCountriesSlugs();

  const windowSizeWidth = useAppSelector((state) => state.windowSize.width);
  const dispatch = useDispatch();

  useAppInterceptors();

  const debouncedResize = useDebouncedCallback(() => {
    dispatch(
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    );
  }, 100);

  useEffect(() => {
    dispatch(setRole(""));
  }, [dispatch]);

  useEffect(() => {
    isUserAuthorized().then((res) => {
      if (res === true) {
        refreshAccessToken().then((res) => {
          setAuthData(res?.email, res?.accessToken);
          getUserByEmail(res?.email || "").then((res) =>
            dispatch(setRole(res?.roles[0]?.value ? res.roles[0].value : ""))
          );
          dispatch(
            setAuth({
              userEmail: localStorage.getItem("email") || "",
              isLogged: true,
            })
          );
        });
      } else if (res === false) {
        removeAuthData();
        deleteCookiesByNames(["accessToken", "refreshToken", "userData"]);
      }
    });
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      setSlugs({
        genresSlugs: genresSlugs.data || genresListSlugs,
        countriesSlugs: countriesSlugs.data || countriesListSlugs,
      })
    );
  }, [countriesSlugs.data, dispatch, genresSlugs.data]);

  useEffect(() => {
    debouncedResize();
    window.addEventListener("resize", debouncedResize);

    return () => window.removeEventListener("resize", debouncedResize);
  }, [dispatch, debouncedResize]);

  return (
    <div
      className={`${iviSans.className} ${iviSans.variable} ${iviIcons.variable} ${iconFont.variable}`}
      data-testid="layout"
    >
      <ToastContainer />
      <ProgressBar value={0} isFixed={true} type="loading" />
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Ivi clone" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <AdminButton />
      <main>{children}</main>
      {windowSizeWidth < 1160 && <MobileMenu />}
      <Footer />
    </div>
  );
};

export default Layout;
