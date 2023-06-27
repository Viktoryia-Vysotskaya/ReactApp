import styles from './NotFound.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const NotFound = props => {
    return (
        <section className={styles.notFound}>
            <PageTitle>404 not found</PageTitle>
            <p className={styles.subtitle}>
                The requested page could not be located. <br />
                Please make sure you have entered the correct URL or return to the homepage.
            </p>
        </section>
    );
};

export default NotFound;