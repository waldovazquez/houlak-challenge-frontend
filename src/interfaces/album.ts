export type AlbumCardProps = {
    artists: Artist[];
    external_urls: string;
    image: string;
    name: string;
    release_date: Date;
}

interface Artist {
    external_urls: ExternalUrls;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}

interface ExternalUrls {
    spotify: string;
}
