import { FC } from "react";
import createAppPortal from "/src/utils/createAppPortal";
import AuthModal from "/src/components/ModalWindows/AuthModal/AuthModal";
import {
  setShowAuthModal,
  setShowSearchModal,
} from "/src/store/slices/modalsSlice";
import SearchModal from "/src/components/ModalWindows/SearchModal/SearchModal";
import { useAppDispatch, useAppSelector } from "/src/hooks/redux";

const ModalContainer: FC = () => {
  const showModal = useAppSelector((state) => state.showModal);
  const dispatch = useAppDispatch();

  return (
    <>
      {showModal.showAuthModal &&
        createAppPortal(
          <AuthModal closeCallback={() => dispatch(setShowAuthModal(false))} />
        )}
      {showModal.showSearchModal &&
        createAppPortal(
          <SearchModal
            closeCallback={() => dispatch(setShowSearchModal(false))}
          />
        )}
    </>
  );
};

export default ModalContainer;
