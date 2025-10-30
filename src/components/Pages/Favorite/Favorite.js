import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../../redux/store';
import Card from '../../UI/Card/Card';
import PageTitle from '../../UI/PageTitle/PageTitle';
import styles from './Favorite.module.scss';

const Favorite = () => {
  const favoriteCards = useSelector(getFavoriteCards);

  if (favoriteCards.length === 0) {
    return (
      <>
        <PageTitle>Favorite</PageTitle>
        <p>No favorite cards yet.</p>
      </>
    );
  }

  return (
    <>
      <PageTitle>Favorite</PageTitle>
      <ul className={styles.cards}>
        {favoriteCards.map(card => (
          <Card key={card.id} {...card} />
        ))}
      </ul>
    </>
  );
};

export default Favorite;