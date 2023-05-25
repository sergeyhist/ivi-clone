import { useEffect } from "react";
import axios, { AxiosError } from "axios";
import { useAppDispatch } from "/src/hooks/redux";
import { setAuth } from "/src/store/slices/authSlice";
import { setShowAuthModal } from "/src/store/slices/modalsSlice";

export const useAppInterceptors = (): void => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    axios.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        if (error instanceof AxiosError) {
          if (error.response?.status === 401) {
            dispatch(setAuth({ isLogged: false, userEmail: "" }));
            dispatch(setShowAuthModal(true));
          }
        }
        return Promise.reject(error);
      }
    );
  }, [dispatch]);
};