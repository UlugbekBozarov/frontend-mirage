import React, { useEffect } from 'react'
import Company from '../component/Company'
import DesignThinks from '../component/DesignThinks'
import Header from '../component/Header'
import OurTeamwork from '../component/OurTeamwork'
import Services from '../component/Services'
import BottomFooter from '../component/shared/BottomFooter'
import Footer from '../component/shared/Footer'
import Navbar from '../component/shared/Navbar'
import Subscrible from '../component/Subscrible'
import Testimonial from '../component/Testimonial'

const LandingPage = () => {

    const onScroll = (e) => {
        if (e.target.documentElement.scrollTop > 50) {
            document.getElementsByTagName("nav")[0].classList.add("f_top");
        } else {
            document.getElementsByTagName("nav")[0].classList.remove("f_top");
        }
    }
    
    useEffect(() => {
        window.addEventListener('scroll', onScroll);
    },[]);

    return (
        <div style={{paddingTop: "100px"}}>
            <Navbar />
            <Header />
            <Services />
            <DesignThinks />
            <OurTeamwork />
            <Testimonial />
            <Company />
            <Subscrible />
            <Footer />
            <BottomFooter />

            <div className="bg_top">
                <svg width="798" height="791" viewBox="0 0 798 791" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M469.19 155.934C234.789 138.179 72.7296 -21.42 21 -99L903 -98.4002V676C869.925 669.762 804.534 620.214 775.973 596.221C729.836 557.831 684.193 431 697.48 353.883C714 258 678.705 212.52 657.334 194.324C623.78 154.015 528.5 157.5 469.19 155.934Z" fill="#FCF2F6" fillOpacity="0.61" />
                    <path d="M545.48 192.728C319.416 128.273 192.7 -60.6138 157.6 -147L1021.52 30.6704L866.04 789.302C834.891 776.55 780.78 714.883 757.617 685.643C720.127 638.772 699.98 519 729.378 432.481C762.5 335 739.368 290.226 722.085 268.111C697.307 221.885 610.5 211.267 545.48 192.728Z" stroke="#FEDDE8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
    )
}

export default LandingPage
