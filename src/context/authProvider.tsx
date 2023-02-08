import {
    useEffect,
    useState,
} from 'react';

import {
    useNavigate,
} from 'react-router-dom';

import AuthContext from './authContext';

import {
    getLocalStorage,
    removeLocalStorage,
    setLocalStorage,
} from '../utils/storage';

import {
    getUserDataByToken,
} from '../libs/user';

import { AuthUserState } from '../interfaces/interfaces';

type AuthProviderProps = {
    children: JSX.Element | JSX.Element[]
}

const userDataInitialState: AuthUserState = {
    user: {
        display_name: '',
        external_urls: {
            spotify: ''
        },
        images: []
    },
    token: '',
}

function AuthProvider({ children }: AuthProviderProps) {
    const [userData, setUserData] = useState(userDataInitialState);
    const navigate = useNavigate();

    const hash = window.location.hash;

    if (hash) {
        const token = hash.split('&')[0].split('=')[1];

        window.location.hash = '';
        setLocalStorage('x-access-token', token);

        validateToken(token);
    }

    async function validateToken(authToken: string) {
        try {
            const responseData = await getUserDataByToken(authToken);

            if (responseData) {
                setUserData({
                    user: responseData,
                    token: authToken,
                })
            }

            return null;
        } catch (e) {
            removeLocalStorage('x-access-token');
            return navigate('/');
        }
    }

    useEffect(() => {
        const authToken = getLocalStorage('x-access-token');
        if (authToken) {
            validateToken(authToken);
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{
                userData,
                setUserData,
                logout: () => {
                    removeLocalStorage('x-access-token');
                    setUserData(userDataInitialState);

                    return navigate('/');
                },
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
