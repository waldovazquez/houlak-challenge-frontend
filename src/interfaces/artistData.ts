export interface ArtistState {
    albums: Album[];
    artist: ArtistStateArtist;
}

interface Album {
    artists:       ArtistElement[];
    external_urls: string;
    id:            string;
    images:        Image[];
    name:          string;
    popularity:    number;
    release_date:  Date;
}

interface ArtistElement {
    external_urls: ExternalUrls;
    href:          string;
    id:            string;
    name:          string;
    type:          Type;
    uri:           string;
}

interface ExternalUrls {
    spotify: string;
}

enum Type {
    Artist = "artist",
}

interface Image {
    height: number;
    url:    string;
    width:  number;
}

interface ArtistStateArtist {
    href:   string;
    id:     string;
    images: Image[];
    name:   string;
}
