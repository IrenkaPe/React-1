import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../../redux/cardsRedux';
import clsx from 'clsx';

const Card = ({ id, title, isFavorite }) => {
  const dispatch = useDispatch();

  const handleToggleCardFavorite = () => {
    dispatch(toggleCardFavorite(id));
  };
  const handleRemoveCard =() => 
    dispatch(removeCard(id))

  return (
    <li className={styles.card}>
      <span className={styles.title}>{title}</span>
      <button
        type="button"
        onClick={handleToggleCardFavorite}
        className={clsx(styles.favoriteBtn, {
          [styles.isFavorite]: isFavorite
        })}
      >
        <i className="fa fa-star-o"></i>
      </button>
      <button
        type="button"
        onClick={handleRemoveCard}
        className= {styles.removeBtn}
      >
        <i className="fa fa-trash"></i>
      </button>
    </li>
  );
};

export default Card;