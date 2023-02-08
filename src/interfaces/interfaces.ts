export interface AuthUserState {
    token: string;
    user: User;
}

interface User {
    display_name: string;
    external_urls: ExternalUrls;
    images: Image[];
}

interface ExternalUrls {
    spotify: string;
}

interface Image {
    height: null;
    url: string;
    width: null;
}