import axios from 'axios';

import SpotifyLogo from '../../assets/Spotify_Logo_RGB_Green.png';

import styles from './style.module.css';

const Landing = () => {
  const redirectUrl = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/login');
      if (response && response.data) {
        window.location.href = response.data.url;
      }
    } catch (error) {
      console.log('error', error);
    }
  }

  return (
    <div className={styles.container__landing}>
      <img
        className={styles.container__landing__logo}
        src={SpotifyLogo}
      />
      <button
        onClick={() => redirectUrl()}
        className={styles.container__landing__connect}
      >
        Connect Spotify
      </button>
    </div>
  )
}

export default Landing;
