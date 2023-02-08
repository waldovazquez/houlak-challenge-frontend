import NavBar from '../Navbar';

type ScreenProps = {
    children: JSX.Element | JSX.Element[];
    getArtistData: (artist: string) => Promise<void>;
    safe: boolean;
}

function Screen({
    children,
    getArtistData,
    safe,
}: ScreenProps) {
    return (
        <div style={{
            backgroundColor: '#121212',
        }}
        >
            <NavBar getArtistData={getArtistData} />
            <div style={{
                height: safe ? '100vh' : 'auto',
                margin: 'auto',
                maxWidth: '1280px',
            }}
            >
                {children}
            </div>
        </div>
    );
}

export default Screen;