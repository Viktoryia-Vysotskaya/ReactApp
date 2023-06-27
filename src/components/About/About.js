import styles from './About.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const About = () => {
    return (
        <section className={styles.about}>
            <PageTitle>About</PageTitle>
            <p className={styles.subtitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                In aliquam imperdiet leo, at ultrices ante tempus quis.<br/>
                Vestibulum lacus lectus, maximus ut velit vitae, ultrices tristique nibh.
            </p>
        </section>
    );
};

export default About;