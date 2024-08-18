import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <NavBar/>
      <section>
        Hero
      </section>
      <section className="padding">
        PopularProducts
      </section>
      <section className="padding">
        SuperQuality
      </section>
      <section className="padding-x py-10">
        Services
      </section>
      <section className="padding">
        SpecialOffers
      </section>
      <section className="padding bg-blue-100">
        CustomerReviews
      </section>
      <section className="padding-x py-16 sm:py-32 w-full">
        Subscribe
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        Footer
      </section>
    </main>
  );
}
