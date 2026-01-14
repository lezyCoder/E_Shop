const Contact = () => {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-5xl text-center text-purple-400 mb-2">Contact</h1>
      </div>
      <div className="hero ">
        <div className="hero-content flex-col gap-14 lg:flex-row-reverse">
          <div className="text-center lg:text-left max-w-lg">
            <h1 className="text-5xl font-bold">Contact Us </h1>
            <p className="py-6 text-wrap">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input type="email" className="input" placeholder="Name" />
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="label">Message</label>
                <textarea className="textarea" placeholder="Message"></textarea>
                <button className="btn btn-neutral mt-4">Contact </button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
