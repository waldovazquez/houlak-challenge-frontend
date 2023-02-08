import { AlbumCardProps } from '../../../interfaces/album';

import styles from './style.module.css';

const AlbumCard = ({
    artists = [],
    external_urls = '',
    image = '',
    name = '',
    release_date = new Date(),
}: AlbumCardProps) => {
    return (
        <section>
            <div className={styles.card}>
                <img
                    className={styles.card__image}
                    src={image} 
                />
                <a
                    className={styles.card__name}
                    href={external_urls}
                >
                    {name.length > 20 ? `${name.substring(0, 20)}...` : name}
                </a>
                <div className={styles.card__artists}>
                    <p>
                        {`${new Date(release_date).getFullYear()}`} •
                    </p>
                    {artists.slice(0, 3).map((artist, index) => (
                        <div key={artist.id}>
                            <>
                                {index !== 0 && ','}
                            </>
                            <a
                                className={styles.card__artists__name}
                                href={artist.external_urls.spotify}
                                key={artist.id}
                            >
                                {artist.name}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AlbumCard;
