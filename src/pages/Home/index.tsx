import {
  useContext,
  useState,
} from 'react';

import AuthContext from '../../context/authContext';

import useWindowDimensions from '../../hooks/useWindowDimensions';

import { getAlbums } from "../../libs/album";

import AlbumCard from '../../components/Cards/Album';
import ArtistCard from "../../components/Cards/Artist";
import Screen from "../../components/Screen";

import { ArtistState } from '../../interfaces/artistData';

import getHeight from '../../utils/getHeight';

import styles from './style.module.css';

const artistDataInitialState: ArtistState = {
  albums: [],
  artist: {
    href: '',
    id: '',
    images: [],
    name: '',
  }
}

const Home = () => {
  const {
    userData
  } = useContext(AuthContext);
  const [artistData, setArtistData] = useState(artistDataInitialState);
  const {
    width,
  } = useWindowDimensions();

  const getArtistData = async (artist: string) => {
    try {
      if (artist.trim().length > 0 && artist !== '') {
        const response = await getAlbums(artist, userData.token);

        if (response) {
          setArtistData(response);
        }
      } else {
        setArtistData(artistDataInitialState);
      }

    } catch (error) {
      console.log('error', error);
    }
  }

  return (
    <Screen
      safe={getHeight(artistData.albums.length, width)}
      getArtistData={getArtistData}
    >
      <div className={styles.container}>
        {artistData.artist.name !== '' &&
          <ArtistCard
            href={artistData.artist.href}
            image={artistData.artist.images.length > 0 ? artistData.artist.images[0].url : ''}
            name={artistData.artist.name}
          />
        }{
          artistData && artistData.albums.length > 0 && artistData.albums.map((album) => (
            <AlbumCard
              artists={album.artists}
              external_urls={album.external_urls}
              image={album.images[0].url}
              name={album.name}
              release_date={album.release_date}
              key={album.id}
            />
          ))
        }
      </div>
    </Screen>
  )
}

export default Home;
