
import astronaut from "../assets/astronaut.jpg";

function Hero() {
  return (
    <section className="hero" aria-label="Hero Section">
      <div className="bg-circle"></div>

      <img
        src={astronaut}
        alt="Astronaut floating in space"
        className="astronaut"
        loading="lazy"
      />
    </section>
  );
}

export default Hero;