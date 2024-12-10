// app/page.tsx

import Head from "next/head";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Head Section */}
      <Head>
        <title>Avion Homeware</title>
        <meta name="description" content="Luxury homeware for timeless design quality" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <main>
        <section className="hero">
          <img
            src="https://emada.in-novation.tech/wp-content/uploads/2022/04/product-img-14-300x300.jpg"
            alt="Hero Image"
            className="hero-image"
          />
          <div className="hero-text-box">
            <h1 className="hero-title">Luxury homeware for people who love timeless design quality</h1>
            <p className="hero-description">Shop the new Spring 2022 collection today</p>
            <Link href="/product-listing">
              <button className="button">View collection</button>
            </Link>
          </div>
        </section>

        {/* Products Section */}
        <section className="products">
          <div className="product">
            <img
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSlAZfIzBx81U-SLYY5is6OggsxS042f0VNlRrpUihV9qHlhoGG"
              alt="The Silky Vase"
              className="product-image"
            />
            <h3>The Silky Vase</h3>
            <p>£125</p>
          </div>
          <div className="product">
            <img
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ4CAhCo10pw_vXqyJvVyfuzsUH0a0J6kn0nFJOHDyMRUuRWdWA"
              alt="The Lucy Lamp"
              className="product-image"
            />
            <h3>The Lucy Lamp</h3>
            <p>£399</p>
          </div>
          <Link href="/product-listing">
            <button className="button">View collection</button>
          </Link>
        </section>

        {/* Differentiation Section */}
        <section className="differentiation">
          <div className="diff-item">
            <span>🚚</span>
            <h3>Next day as standard</h3>
            <p>Order before 3pm and get your order the next day as standard</p>
          </div>
          <div className="diff-item">
            <span>👨‍🎨</span>
            <h3>Made by true artisans</h3>
            <p>Handmade crafted goods made with real passion and craftsmanship</p>
          </div>
          <div className="diff-item">
            <span>💸</span>
            <h3>Unbeatable prices</h3>
            <p>For our materials and quality you won't find better prices anywhere</p>
          </div>
          <div className="diff-item">
            <span>♻️</span>
            <h3>Recycled packaging</h3>
            <p>We use 100% recycled materials to ensure our footprint is more manageable</p>
          </div>
        </section>
      </main>
    </>
  );
}
