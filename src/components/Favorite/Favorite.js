import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const Favorite = () => {
    return (
        <section className={styles.favorite}>
            <PageTitle>Favorite</PageTitle>
            <p className={styles.subtitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                In aliquam imperdiet leo, at ultrices ante tempus quis.<br/>
                Vestibulum lacus lectus, maximus ut velit vitae, ultrices tristique nibh.
            </p>
        </section>
    );
};

export default Favorite;