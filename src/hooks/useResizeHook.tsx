import { useEffect, useMemo, useState } from 'react';

interface IResizeInfo {
    isMobile: boolean;
}

const useResizeHook = (): IResizeInfo => {
    const [width, setWidth] = useState<number>(window.innerWidth);

    const isMobile = useMemo(() => width <= 768, [width]);

    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, []);

    return {
        isMobile,
    };
};

export default useResizeHook;
