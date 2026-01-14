const Contact = () => {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Header */}
      <div className="text-center py-12">
        <h1 className="text-5xl font-bold text-purple-400 mb-3">Contact Us</h1>
        <p className="text-base-content/70">
          We'd love to hear from you. Please fill out the form below.
        </p>
      </div>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content flex-col gap-14 lg:flex-row-reverse">
          {/* Text / Info */}
          <div className="text-center lg:text-left max-w-lg">
            <h2 className="text-4xl font-semibold mb-4">Get in Touch</h2>
            <p className="mb-6 text-base-content/70">
              Have questions, feedback, or need support? Our team is here to
              help you every step of the way.
            </p>

            <div className="space-y-2 text-sm">
              <p>📧 Email: support@yourstore.com</p>
              <p>📞 Phone: +1 234 567 890</p>
              <p>📍 Location: Remote / Worldwide</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card bg-base-200 w-full max-w-sm shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  className="textarea textarea-bordered"
                  placeholder="Write your message..."
                  required></textarea>
              </div>

              <div className="form-control mt-6">
                <button className="btn bg-purple-500 hover:bg-purple-600">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
