import {
    useContext,
    useState,
} from 'react';

import {
    BiSearch
} from 'react-icons/bi';

import {
    MdArrowDropDown,
    MdArrowDropUp
} from 'react-icons/md';

import AuthContext from '../../context/authContext';

import { NavbarProps } from '../../interfaces/navbar';

import SpotifyIcon from '../../assets/Spotify_Icon_RGB_Green.png'

import styles from './style.module.css';

const Navbar = ({
    getArtistData,
}: NavbarProps) => {
    const {
        userData,
        logout
    } = useContext(AuthContext);
    const [artist, setArtist] = useState('');
    const [activeMenu, setActiveMenu] = useState(false);

    return (
        <div className={styles.container__navbar}>
            <div className={styles.container__navbar__input}>
                <input
                    className={styles.container__navbar__input__input}
                    onChange={(e) => setArtist(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            getArtistData(artist)
                        }
                    }}
                    placeholder="What artist are you looking for?"
                    value={artist}
                />
                <div className={styles.container__navbar__input__search}>
                    <BiSearch
                        size={26}
                        onClick={() => getArtistData(artist)}
                    />
                </div>
            </div>
            <div>
                <button
                    className={styles.container__navbar__menu}
                    onClick={() => setActiveMenu(!activeMenu)}
                >
                    <img
                        className={styles.container__navbar__menu__avatar}
                        src={userData.user && userData.user.images.length > 0 ? userData.user.images[0].url : SpotifyIcon}
                    />
                    <div className={styles.container__navbar__menu__name}>
                        <p className={styles.container__navbar__menu__name__user}>{userData.user && userData.user.display_name}</p>
                        {
                            activeMenu === false ?
                                <div>
                                    <MdArrowDropDown size={24} color="#FFFFFF" />
                                </div> :
                                <div>
                                    <MdArrowDropUp size={24} color="#FFFFFF" />
                                </div>
                        }
                    </div>
                </button>
                {activeMenu && (
                    <div className={styles.container__navbar__logout}>
                        <button
                            className={styles.container__navbar__logout__button}
                            onClick={() => logout()}
                        >
                            Log out
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar;
