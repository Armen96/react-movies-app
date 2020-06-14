import { useRef } from 'react';

export const useComponentRendersCount = () => {
    const renders = useRef(0);

    console.log('Component renders: ', renders.current++);
}
