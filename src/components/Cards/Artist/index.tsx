import { ArtistCardProps } from '../../../interfaces/artist';

import styles from './style.module.css';

const ArtistCard = ({
    href = '',
    image = '',
    name = '',
}: ArtistCardProps) => {
    return (
        <section>
            <div className={styles.card}>
                <img
                    className={styles.card__image}
                    src={image}
                />
                <div className={styles.card__container__data}>
                    <a
                        className={styles.card__container__data__name}
                        href={href}
                    >
                        {name}
                    </a>
                    <div className={styles.card__container__data__artist}>
                        <p>ARTIST</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ArtistCard;
