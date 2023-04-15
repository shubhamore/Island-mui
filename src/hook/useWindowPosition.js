import { useLayoutEffect, useState } from 'react';

export default function useWindowPosition(id) {
    const [animation, setAnimation] = useState(false);
    useLayoutEffect(() => {
        function updatePosition() {
            const offetSetHeight = window.document.getElementById(id).offsetHeight;
            // console.log("windowpageYOffset "+window.pageYOffset+" offetSetHeight="+offetSetHeight);
            if (window.pageYOffset > offetSetHeight * 0.6) {
                // console.log("running");
                setAnimation(true);
            }
        }
        window.addEventListener('scroll', updatePosition);
        updatePosition();
        return () => window.removeEventListener('scroll', updatePosition);
    }, [id]);
    return animation;
}