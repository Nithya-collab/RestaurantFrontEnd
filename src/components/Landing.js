import React, { useState, useEffect } from "react";
import HeroSection from "./HeroSection";
import SpecialtiesSection from "./SpecialtiesSection";
import ContactFormSection from "./ContactFormSection";
import PopularDishesSection from "./PopularDishes";
import Navbar from "./Navbar";
import Testimonials from "./Testimonial";
import Gallery from "./Gallery";
import Reserve from "./ReserveSec";
import ViewMenuTable from "./ViewMenuTable";
import ReservationFormSection from "./ReservationForm";
import { useLocation } from 'react-router-dom';
import { useRef } from "react";
import MessageBox from "./Messagebox";
const LandingPage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [shouldRenderMenu, setShouldRenderMenu] = useState(false);
  const [showReservation, setShowReservation] = useState(false);
  const [shouldRenderReservation, setShouldRenderReservation] = useState(false);
  const reservationRef = useRef(null);
  const viewMenuRef = useRef(null);
  const homeRef = useRef(null);
  const specialitiesRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);
  const location = useLocation();
  const [showMessageBox, setShowMessageBox] = useState(false);
  const [status, setStatus] = useState("");
  const [progress, setProgress] = useState(100);


  useEffect(() => {
    if (location.pathname === '/gallery') {
      galleryRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
    else if (location.pathname === '/contact') {
      contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (location.pathname === '/about') {
      specialitiesRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (location.pathname === '/' || location.pathname === '/home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  function handleShowMenu() {
    if (!showMenu) {
      setShouldRenderMenu(true); // mount first
      setTimeout(() => {
        setShowMenu(true)
        viewMenuRef.current?.scrollIntoView({ behavior: "smooth" })
      }, 10); // trigger animation
    } else {
      setShowMenu(false); // start hide animation
      setTimeout(() => setShouldRenderMenu(false), 500); // unmount after animation duration
    }
  }

  function handleToggleReservation() {
    if (!showReservation) {
      setShouldRenderReservation(true);
      setTimeout(() => {
        setShowReservation(true);
        reservationRef.current?.scrollIntoView({ behavior: "smooth" }); // 👈 smooth scroll
      }, 10);
    } else {
      setShowReservation(false);
      setTimeout(() => setShouldRenderReservation(false), 500);
    }
  }

  useEffect(() => {
    if (progress > 0 && showMessageBox) {
      const interval = setInterval(() => {
        setProgress((prev) => prev - 2);
      }, 100);
      return () => clearInterval(interval);
    }
  }, [progress, showMessageBox]);

  const scrollToSection = (path) => {
    if (path === '/about') {
      specialitiesRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (path === '/gallery') {
      galleryRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (path === '/contact') {
      contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (path === '/menu') {
      handleShowMenu();  // keep your animation & scroll logic
    } else if (path === '/reservation') {
      handleToggleReservation(); // keep your animation & scroll logic
    } else if (path === '/' || path === '/home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div id="webcrumbs">
      <div className="fixed top-0 left-0 w-full z-10">
        <Navbar scrollToSection={scrollToSection} />
      </div>
      <div>
        {showMessageBox && (
          <MessageBox
            message={status}
            progress={progress}
            color="green"
            onHide={() => setShowMessageBox(false)}
          />
        )}
      </div>
      <HeroSection
        ref={homeRef}
        title="Savor the Essence of Italy"
        subtitle="Discover handcrafted pastas, wood-fired pizzas, and authentic dishes made to transport you to sunny, vibrant Italy."
        buttonText="Book a Table"
        ViewButton="View Menu"
        handleShowMenu={handleShowMenu}
        handleToggleReservation={handleToggleReservation}
        imageSrc="https://cdn.usegalileo.ai/sdxl10/425b6507-ae14-4830-9365-30b2e61c1d5c.png"
        altText="Italian restaurant front"
        className="pt-16"
      />
      <div ref={specialitiesRef}>
        <SpecialtiesSection handleShowMenu={handleShowMenu} />
      </div>
      {shouldRenderMenu && (
        <div
          ref={viewMenuRef}
          className={`transition-all duration-500 ease-in-out transform ${showMenu ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
        >
          <ViewMenuTable />
        </div>
      )}

      <PopularDishesSection />
      <Testimonials title={"What Our Guests Say"} />

      <div ref={reservationRef}>
        <Reserve title={"Reserve Your Table"} subtitle={"Book your table now and indulge in a memorable dining experience!"} placeholder={"Enter Details Here..."} handleToggleReservation={handleToggleReservation} />
      </div>

      {shouldRenderReservation && (
        <div
          ref={reservationRef}
          className={`transition-all duration-500 ease-in-out transform ${showReservation ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
        >
          <ReservationFormSection
            showMessageBox={showMessageBox}
            setShowMessageBox={setShowMessageBox}
            setStatus={setStatus}
            setProgress={setProgress}
          />
        </div>
      )}

      <div ref={galleryRef}>
        <Gallery title="Our Gallery" />
      </div>

      <div ref={contactRef} className="flex justify-center items-center w-full">
        <ContactFormSection
          showMessageBox={showMessageBox}
          setShowMessageBox={setShowMessageBox}
          setStatus={setStatus}
          setProgress={setProgress}
        />
      </div>
    </div>
  );
};


export default LandingPage;

