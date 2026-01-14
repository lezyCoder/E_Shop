const About = () => {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <div className="hero bg-base-200 py-16">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-purple-500">About Us</h1>
            <p className="py-6 text-base-content/70">
              We are passionate about delivering high-quality products that
              combine innovation, style, and value for everyday life.
            </p>
          </div>
        </div>
      </div>

      {/* About Content */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-purple-400">
              Who We Are
            </h2>
            <p className="text-base-content/70 leading-relaxed">
              Our brand was built with one goal in mind — to make premium
              products accessible to everyone. From design to delivery, we focus
              on quality, trust, and customer satisfaction.
            </p>
            <p className="mt-4 text-base-content/70">
              We believe shopping should be simple, enjoyable, and reliable.
              That’s why we continuously improve our products and services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="card bg-base-200 shadow-md">
              <div className="card-body">
                <h3 className="card-title text-purple-400">Our Mission</h3>
                <p className="text-sm text-base-content/70">
                  To deliver high-quality products that enhance everyday life.
                </p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-md">
              <div className="card-body">
                <h3 className="card-title text-purple-400">Our Vision</h3>
                <p className="text-sm text-base-content/70">
                  To become a trusted global brand loved by customers.
                </p>
              </div>
            </div>

            <div className="card bg-base-200 shadow-md sm:col-span-2">
              <div className="card-body">
                <h3 className="card-title text-purple-400">Our Values</h3>
                <p className="text-sm text-base-content/70">
                  Quality, transparency, innovation, and customer-first mindset.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-base-200 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="stats stats-vertical sm:stats-horizontal shadow w-full border border-gray-700">
            <div className="stat ">
              <div className="stat-title">Customers</div>
              <div className="stat-value text-purple-400">10K+</div>
              <div className="stat-desc">Happy worldwide</div>
            </div>

            <div className="stat">
              <div className="stat-title">Products</div>
              <div className="stat-value text-purple-400">500+</div>
              <div className="stat-desc">Carefully curated</div>
            </div>

            <div className="stat">
              <div className="stat-title">Experience</div>
              <div className="stat-value text-purple-400">5+ Years</div>
              <div className="stat-desc">In e-commerce</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Want to explore our products?
        </h2>
        <p className="text-base-content/70 mb-6">
          Discover quality products made just for you.
        </p>
        <button className="btn bg-purple-500 hover:bg-purple-600">Shop Now</button>
      </section>
    </div>
  );
};

export default About;
