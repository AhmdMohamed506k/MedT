import React, { useEffect, useRef } from 'react';
import { LifeLine } from 'react-loading-indicators';

export default function MainLoader() {

    const Layer1Ref = useRef(null);
    const LoaderRef = useRef(null);
    const Layer2Ref = useRef(null);

    useEffect(() => {
        AddAnimations();
    }, []);

    function AddAnimations() {

        // Step 1: hide loader after delay
        setTimeout(() => {
            if (LoaderRef.current) {
                LoaderRef.current.style.opacity = "0";

                LoaderRef.current.style.transition = "opacity 0.5s ease";
            }
        }, 800);

        // Step 2: animate layers
        setTimeout(() => {
            if (Layer1Ref.current && Layer2Ref.current) {
                Layer1Ref.current.style.transform = "translateY(-100%)";
                Layer2Ref.current.style.transform = "translateY(100%)";

                Layer1Ref.current.style.transition = "transform 0.8s ease";
                Layer2Ref.current.style.transition = "transform 0.8s ease";
            }
        }, 1200);

        // (optional) Step 3: remove from DOM later if needed
        setTimeout(() => {
            if (Layer1Ref.current && Layer2Ref.current && LoaderRef.current) {
                LoaderRef.current.style.display = "none";
                Layer2Ref.current.style.display = "none";
                Layer1Ref.current.style.display = "none";
            }
        }, 1850);

    }

    return (
        <section>
            {/* Top Layer */}
            <div
                ref={Layer1Ref}
                className='fixed top-0 left-0 w-full h-[50%] bg-white z-50'
            />

            {/* Loader */}
            <div
                ref={LoaderRef}
                className='fixed inset-0 flex justify-center items-center z-[60]'
            >
                <LifeLine color="#0770eb" size="small" />
            </div>

            {/* Bottom Layer */}
            <div
                ref={Layer2Ref}
                className='fixed bottom-0 left-0 w-full h-[50%] bg-white z-50'
            />
        </section>
    );
}