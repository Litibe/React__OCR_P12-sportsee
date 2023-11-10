import { useState, useEffect } from "react";

export default function ModalWidthMin() {
    const [showModal, setShowModal] = useState(false);
    const [screenSize, getDimension] = useState({
        dynamicWidth: window.innerWidth,
        dynamicHeight: window.innerHeight,
    });
    const detectDimension = () => {
        getDimension({
            dynamicWidth: window.innerWidth,
            dynamicHeight: window.innerHeight,
        });
        if ((window.innerWidth < 1024 || window.innerHeight < 780) === true) {
            setShowModal(true);
        } else {
            setShowModal(false);
        }
    };
    useEffect(() => {
        window.addEventListener("load", detectDimension);
        return () => {
            window.removeEventListener("load", detectDimension);
        };
    }, []);
    useEffect(() => {
        window.addEventListener("resize", detectDimension);
        return () => {
            window.removeEventListener("resize", detectDimension);
        };
    }, [screenSize]);
    return (
        <>
            {showModal === true && (
                <>
                    <div className="modal_body"></div>
                    <div className="modal_card">
                        <div className="modal_text">
                            Merci de disposer d'un écran disposant d'une
                            résolution d'au moins 1024 par 780 pixels.
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
