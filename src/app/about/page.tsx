// app/about/page.tsx

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <img
          src="https://urdzines.com/wp-content/uploads/2024/05/gj1dnc7yrg0.webp"
          alt="About Us Hero"
          className="about-hero-image"
        />
        <div className="about-hero-text">
          <h1>About Us</h1>
          <p>
            We are passionate about providing timeless, high-quality homeware to enhance your
            living spaces.
          </p>
        </div>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          At Avion, we believe in creating homeware that combines beauty and functionality. Our
          mission is to bring elegant, sustainable, and artisan-crafted products into your home,
          offering an unparalleled experience of comfort and style.
        </p>
      </section>
    </div>
  );
}
