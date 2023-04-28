import {FC} from 'react';
import styles from './SearchCloseButton.module.sass';

interface SearchCloseButtonProps {
  clickCallback: () => void
}

const SearchCloseButton: FC<SearchCloseButtonProps> = ({clickCallback}) => {
  return (
    <button
        onClick={clickCallback}
        className={styles.close}
      >
        Закрыть окно
      </button>
  )
}

export default SearchCloseButton;
