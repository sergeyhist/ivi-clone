import {FC, Fragment} from "react";
import createAppPortal from "/src/utils/createAppPortal";
import AuthModal from "/src/components/ModalWindows/AuthModal/AuthModal";
import { setShowModal } from "/src/store/slices/modalsSlice";
import SearchModal from "/src/components/ModalWindows/SearchModal/SearchModal";
import { useAppDispatch, useAppSelector } from "/src/hooks/redux";

const ModalContainer: FC = () => {
  const showModal = useAppSelector((state) => state.showModal);
  const dispatch = useAppDispatch();

  return (
    <Fragment>
      {showModal.showAuthModal &&
        createAppPortal(
          <AuthModal
            closeCallback={() =>
              dispatch(setShowModal({ ...showModal, showAuthModal: false }))
            }
          />
        )}
      {showModal.showSearchModal &&
        createAppPortal(
          <SearchModal
            closeCallback={() =>
              dispatch(setShowModal({ ...showModal, showSearchModal: false }))
            }
          />
        )}
    </Fragment>
  );
};

export default ModalContainer;
