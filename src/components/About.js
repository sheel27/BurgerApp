import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <h1 style={styles.heading}>Welcome to Burger!!!</h1>

        <p>
          We believe that a great burger is more than just a meal; it's an
          experience. Our story began with a passion for crafting mouth-watering
          burgers that go beyond the ordinary, using the finest ingredients and
          a dash of culinary creativity.
        </p>

        <p>
          What sets us apart is our unwavering commitment to quality. We source
          the freshest, premium ingredients to ensure every bite is a burst of
          flavor. Our chefs are dedicated to perfecting each recipe, from our
          classic burgers to our signature specialties, guaranteeing an
          unforgettable dining experience for every customer.
        </p>

        <p>
          Behind every delicious bite is a team of passionate individuals who
          share a love for burgers. Our talented chefs and staff, the heart and
          soul. Their dedication to culinary excellence and customer
          satisfaction is the driving force behind our success.
        </p>

        <p>
          Our mission is simple: to bring joy to your taste buds with every
          bite. Whether you're a seasoned burger enthusiast or a first-time
          visitor, we aim to exceed your expectations for a burger.
        </p>

        <p>
          We're not just about burgers; we're about building a community.
          Committed to giving back, supporting local initiatives, and creating a
          positive impact. Because good food goes hand in hand with goodwill.
        </p>

        <p>
          Thank you for being a part of our journey. We invite you to explore
          our menu, place an order, and savor the flavors that make a
          celebration of taste and tradition.
        </p>

        <p style={styles.lastParagraph}>Indulge. Enjoy. Repeat.</p>
      </div>
      <Footer />
    </>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "auto",
    marginTop: "80px",
    padding: "30px",
    textAlign: "justify",
  },
  heading: {
    fontSize: "3em",
    textAlign: "center",
    color: "#333",
  },
  lastParagraph: {
    marginBottom: "0",
  },
};

export default About;
