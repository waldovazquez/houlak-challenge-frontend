import {
  createContext,
  Dispatch,
  SetStateAction,
} from 'react';

import { AuthUserState } from '../interfaces/interfaces';

export type AuthContextProps = {
  logout: () => void;
  setUserData: Dispatch<SetStateAction<AuthUserState>>
  userData: AuthUserState;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export default AuthContext;
