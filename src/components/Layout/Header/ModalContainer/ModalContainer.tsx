import { FC } from "react";
import AuthModal from "/src/components/ModalWindows/AuthModal/AuthModal";
import {
  setShowAuthModal,
  setShowSearchModal,
} from "/src/store/slices/modalsSlice";
import SearchModal from "/src/components/ModalWindows/SearchModal/SearchModal";
import { useAppDispatch, useAppSelector } from "/src/hooks/redux";
import { createPortal } from "react-dom";

const ModalContainer: FC = () => {
  const showModal = useAppSelector((state) => state.showModal);
  const dispatch = useAppDispatch();

  return (
    <>
      {showModal.showAuthModal &&
        createPortal(
          <AuthModal closeCallback={() => dispatch(setShowAuthModal(false))} />, document.body
        )}
      {showModal.showSearchModal &&
        createPortal(
          <SearchModal
            closeCallback={() => dispatch(setShowSearchModal(false))}
          />, document.body
        )}
    </>
  );
};

export default ModalContainer;
