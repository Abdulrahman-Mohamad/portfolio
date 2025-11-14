import { useEffect, useState } from "react";
import { navLinks } from "../constants";
import gsap from "gsap";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled)
                setScrolled(true)
            else
                setScrolled(false)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleScrollTo = (id) => {
        const target = document.getElementById(id);
        if (target) {
            gsap.to(window, { duration: 1, scrollTo: target });
        }
    };
    return <>
        <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
            <div className="inner">
                <a className="logo cursor-pointer" onClick={() => handleScrollTo("hero")}>
                    AbdelRahman
                </a>
                <nav className="desktop">
                    <ul>
                        {navLinks.map(({ link, name }) => (
                            <li key={name} className="group cursor-pointer">
                                <a onClick={()=>handleScrollTo(link)}>
                                    <span>{name}</span>
                                    <span className="underline" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <a href="#contact" className="contact-btn group">
                    <div className="inner">
                        <span>Contact Me</span>
                    </div>
                </a>
            </div>
        </header>
    </>
}
