import React, { useEffect, useState } from 'react';
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
    const [backToTop, setBackToTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                setBackToTop(true)
            }else{
                setBackToTop(false)
            }
        })
    }, [])

    const scroll2Top = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

  return (
    <div>
        {
            backToTop && (
            <button style={{
                position: "fixed",
                bottom: "50px",
                right: "10px",
                height: "50px",
                width: "50px",
                fontSize: "25px",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: "10000",
                // backgroundColor: "#0F172A",
                color: "#e56510"
            }} onClick={scroll2Top}>
                <FaArrowUp />
            </button>)
        }
        
    </div>
  )
}

export default BackToTop