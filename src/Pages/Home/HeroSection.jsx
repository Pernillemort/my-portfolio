import { Link } from "react-scroll";

export default function HeroSection() {
    return (
        <section id="herosection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hello, my name is Pernille Mortensen!</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">UX</span>{" "}
                        <br />
                        Designer
                    </h1>
                    <p className="hero--section--description">
                        I recently graduated with a Bachelor's degree in Medialogy from Aalborg University Copenhagen. 
                        <br /> Through this program, I have acquired a comprehensive understanding of both technical and user-centered aspects of digital media. I have gained foundational skills in coding as well as insights into human interaction with digital platforms, enabling me to design platforms that optimize user experience. I am eager to come out and use what I have been taught but also learn new tools to develop the best possible solutions for clients.
                    </p>

                    <Link
                        to="Contact"
                        smooth={true}
                        duration={500}
                        offset={-70}
                        className="btn btn-primary"
                    >
                        Get in Touch
                    </Link>
                </div>
            </div>
            <div className="hero--section--img">
                <img src="./img/hero.png" alt="Hero Section" />
            </div>
        </section>
    );
}
