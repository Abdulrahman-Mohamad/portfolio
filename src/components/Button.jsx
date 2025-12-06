
export default function Button({ text, className}) {
    return <>
        <a
        href="/files/cv.pdf"
        download
            className={`${className ?? ''} cta-wrapper`}>
            <div className="cta-button group">
                <div className="bg-circle" />
                <p className="text me-5 md:me-0">{text}</p>
                <div className="arrow-wrapper">
                    <img src="/images/arrow-down.svg" loading="lazy" alt="arrow" />
                </div>
            </div>
        </a >
    </>
}
