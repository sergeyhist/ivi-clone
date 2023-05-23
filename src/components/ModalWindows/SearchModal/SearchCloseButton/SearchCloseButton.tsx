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
        data-testid="close-search-btn"
      >
      </button>
  )
}

export default SearchCloseButton;
