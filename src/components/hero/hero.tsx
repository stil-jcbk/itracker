import "./hero.css";

function Hero() {
  return (
    <div className="hero">
      <img
        className="background-image"
        src="https://www.orange.pl/medias/sys_master/root/images/h43/h2a/11835098267678/4.png"
        alt=""
      />
      <div className="text">
        <h1>iTracker</h1>
        <h2 className="description">
          Najlepsze miejsce do śledzenia cen produktów firmy Apple
        </h2>
      </div>
    </div>
  );
}

export default Hero;
