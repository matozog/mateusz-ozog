import { useEffect, useMemo, useState } from 'react';

interface IResizeInfo {
    isMDBreakpoint: boolean;
    isSMBreakpoint: boolean;
}

const useResizeHook = (): IResizeInfo => {
    const [width, setWidth] = useState<number>(window.innerWidth);

    const isMDBreakpoint = useMemo(() => width <= 768, [width]);
    const isSMBreakpoint = useMemo(() => width <= 640, [width]);

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
        isMDBreakpoint,
        isSMBreakpoint,
    };
};

export default useResizeHook;
