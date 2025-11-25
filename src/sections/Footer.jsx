import { socialImgs } from "../constants";

export default function Footer() {
    return <>
        <footer className="footer">
            <div className="footer-container">
                <div className="flex flex-col justify-center items-center md:items-start">
                    <a href="/">Visit my blog</a>
                </div>
                <div className="socials">
                    {socialImgs.map((img) => (
                        <a href={img.url} className="icon" target="_blank" key={img.url}>
                            <img src={img.imgPath} alt={img.name} />
                        </a>
                    ))}
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-center md:text-end">
                        © {new Date().getFullYear()} AbdelRahman Mohamad. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    </>
}