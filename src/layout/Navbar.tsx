import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    useEffect(() => {
        const scrollFunction = () => setIsScrolled(window.scrollY > 80);
        window.addEventListener("scroll", scrollFunction);
        return () => window.removeEventListener("scroll", scrollFunction);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full ${isScrolled ? "bg-base/80" : "bg-transparent"} backdrop-blur-md z-50 flex items-center justify-between px-8 py-4 shadow-md`}>
            <div className="text-light text-xl font-bold cursor-pointer">
                <span>Lara Berenguer</span>
            </div>
            <div className="flex gap-6">
                {["home", "projects", "experience", "skills"].map(
                    (section, index) => (
                        <Link
                            key={index}
                            to={section}
                            smooth={true}
                            duration={500}
                            offset={-80}
                            spy={true}
                            activeClass="underline"
                            className="cursor-pointer text-light hover:text-primary transition-colors"
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </Link>
                    )
                )}
            </div>
            <div className="flex gap-4 text-light">
                <a href="mailto:laraberenguer@outlook.com" className="hover:text-primary">mail</a>
                <a href="https://linkedin.com/in/lara-berenguer" target="_blank" className="hover:text-primary">in</a>
                <a href="https://github.com/LaraBerenguer" target="_blank" className="hover:text-primary">git</a>
            </div>
        </nav>
    );
}

export default Navbar;