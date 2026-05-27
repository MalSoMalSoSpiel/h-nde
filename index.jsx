import bild1 from "./bild-1.png";
import bild2 from "./bild-2.png";
import bild3 from "./bild-3.png";
import footer from "./footer.svg";
import header from "./header.svg";
import konfetti from "./konfetti.png";
import logo from "./logo.png";

const galleryImages = [
  {
    src: bild1,
    alt: "Geöffnetes Heft mit Gebärdenkarten",
    className:
      "absolute top-[275px] left-[23px] w-[219px] h-[153px] aspect-[1.43] object-cover",
  },
  {
    src: bild2,
    alt: "Zwei Karten mit Gebärdenmotiven",
    className:
      "absolute top-[275px] left-[247px] w-[131px] h-[115px] aspect-[1.14] object-cover",
  },
  {
    src: bild3,
    alt: "Zwei Kinder mit dem Heft",
    className:
      "absolute top-[395px] left-[247px] w-[131px] h-[87px] aspect-[1.5] object-cover",
  },
];

export const IphonePro = () => {
  return (
    <main className="bg-white w-full min-w-[402px] min-h-[874px] relative overflow-hidden">
      <header className="absolute top-0 left-0 w-[402px] h-[98px]">
        <img
          className="absolute top-0 left-0 w-[402px] h-[98px]"
          alt=""
          src={header}
          aria-hidden="true"
        />
      </header>
      <section
        aria-labelledby="intro-heading"
        className="absolute inset-0 w-full h-full"
      >
        <img
          className="absolute top-[49px] left-4 w-[370px] h-[154px] aspect-[2.4] object-cover"
          alt=""
          src={konfetti}
          aria-hidden="true"
        />
        <img
          className="absolute top-[75px] left-[132px] w-[125px] h-[125px] aspect-[1] object-cover"
          alt="Mit den Händen sprechen Logo"
          src={logo}
        />
        <h1
          id="intro-heading"
          className="absolute top-[228px] left-[23px] w-[355px] [font-family:'Just_Another_Hand-Regular',Helvetica] font-normal text-[#0082b9] text-3xl text-center tracking-[0] leading-[normal]"
        >
          ENTDECKE DIE GEBÄRDENSPRACHE!
        </h1>
        {galleryImages.map((image) => (
          <img
            key={image.src}
            className={image.className}
            alt={image.alt}
            src={image.src}
          />
        ))}

        <h2 className="absolute top-[511px] left-[23px] w-[355px] [font-family:'Just_Another_Hand-Regular',Helvetica] font-normal text-[#0082b9] text-3xl text-center tracking-[0] leading-[normal]">
          SCHÖN, DASS DU DA BIST!
        </h2>
        <p className="absolute top-[552px] left-7 w-[350px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[15px] text-center tracking-[0] leading-[normal]">
          Dieses Projekt ist dein bunter Einstieg in eine Welt, in der man mit
          den Augen „hört" und mit den Händen „spricht". Wenn wir lernen, auf
          unterschiedliche Arten miteinander zu kommunizieren, bauen wir
          Barrieren ab.
          <br />
          <br />
          So einfach funktioniert es: Scanne mit deinem Smartphone die QR-Codes
          direkt neben den Stickern im Heft. Dadurch öffnet sich sofort das
          passende Video. Schau dir die Gebärde genau an und mach sie einfach
          nach. Viel Spaß beim Entdecken!
        </p>
      </section>
      <footer className="absolute top-[773px] left-0 w-[402px] h-[101px]">
        <img
          className="absolute top-[773px] left-0 w-[402px] h-[101px]"
          alt=""
          src={footer}
          aria-hidden="true"
        />
        <p className="absolute top-[831px] left-0 w-[402px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-xs text-center tracking-[0] leading-[normal]">
          LOTTE SCHELLHAMMER © 2026 • IMPRESSUM &amp; RECHTLICHES
        </p>
      </footer>
    </main>
  );
};

export default IphonePro;
