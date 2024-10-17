

import Component from "./components/monos1/page";
import Columnas from "./components/monos2/page";
import Heromonos from "./components/monos3/page";
import Monos4 from "./components/monos4/page";
import Monos5 from "./components/monos5/page";
import Monos6 from "./components/monos6/page";
import Monos7 from "./components/monos7/page";
import Monos8 from "./components/monos8/page";

import ContactForm from "./components/contact/page";

export default function Home() {
  return (
    <main>
      <Component></Component>
      <Columnas></Columnas>
      <Heromonos></Heromonos>
      <Monos4></Monos4>
      <Monos5 />
      <Monos6></Monos6>
      <Monos7></Monos7>
      <Monos8 />
      <ContactForm></ContactForm>
    </main>
  );
}
