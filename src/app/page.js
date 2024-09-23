
import Nav from "./components/Navbar/Navbar";
import ImageGrid from "./imagenes";
import News from "./components/News/News";
import Musiccomponent from "./components/Music/Music";
import Hero from "./components/Hero/Hero";
import CardBlur from "./components/Cards/CardBlur/Cardblur";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Nav className="mb-8" />
      <Hero className="mb-12" />
      <ImageGrid className="mb-12" />
      <News className="mb-12" />
      <Musiccomponent className="mb-12" />
      <CardBlur></CardBlur>
    </main>
  );
}
