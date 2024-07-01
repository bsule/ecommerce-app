// components/LoginCheck.js
import { useEffect } from 'react';
import useRefreshToken from '../hooks/useRefreshToken';

const useLoginCheck = () => {
    const refresh = useRefreshToken();

    useEffect(() => {
        const checkLogin = async () => {
            await refresh();
        };

        checkLogin();
    }, [refresh]);
};

export default useLoginCheck;
