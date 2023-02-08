import {
    Navigate,
    Outlet
} from 'react-router-dom';

import { getLocalStorage } from '../../utils/storage';

type ProtectedRouteProps = {
    redirectTo: string;
}

export const ProtectedRoute = ({
    redirectTo = '/'
}: ProtectedRouteProps) => {
    const authToken = getLocalStorage('x-access-token');

    if (!authToken) {
        return <Navigate to={redirectTo} />
    }

    return <Outlet />;
}
