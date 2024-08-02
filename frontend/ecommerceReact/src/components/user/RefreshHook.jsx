import { useEffect } from 'react';
import useRefreshToken from './RefreshToken';

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
