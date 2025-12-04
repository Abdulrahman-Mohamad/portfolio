import LogoSection from './sections/LogoSection'
import Navbar from './components/Navbar'
import FeatureCards from './sections/FeatureCards'
import Hero from './sections/Hero'
import ExperienceSection from './sections/ExperienceSection'
import TechStack from './sections/TechStack'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import MyProject from './sections/MyProject'


export default function App() {
    return <>
        <Navbar />
        <Hero />
        <MyProject />
        <LogoSection />
        <FeatureCards />
        <ExperienceSection />
        <TechStack />
        <Testimonials />
        <Contact />
        <Footer />
    </>
}
