import Sucursal from "@/components/branch-offices/Sucursal";
import DiscoverCombo from "@/components/dicover-combo/DiscoverCombo";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import HeroSection from "@/components/hero-section/HeroSection";
import Menu from "@/components/menu/Menu";

export default function Home() {
  return (
    <>
      <Header />

      <HeroSection />

      <Menu />

      <DiscoverCombo />

      <Sucursal />

      <Footer />
    </>
  );
}
