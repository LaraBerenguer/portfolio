import { animateScroll } from "react-scroll";

const Footer = () => {
    const scrollToTop = () => {
        animateScroll.scrollToTop();
    };

    return (
        <footer className="flex justify-between items-center text-sm px-4 py-6 z-10">
            <p>Made with 💜 by Lara Berenguer</p>
            <button onClick={scrollToTop} className="rounded-full border-1 border-light text-light px-4 py-2 hover:text-primary hover:border-primary transition-all">↑</button>
        </footer>
    );
};

export default Footer;