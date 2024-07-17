const AboutSection = () => {
  return (
    <div>
      <section className="container ">
        <div
          data-aos="fade-up"
          className="mx-auto  max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
        >
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Welcome to Version AVI, where we bring your events to life with
              cutting-edge audio-visual solutions.
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
                className="absolute inset-0 h-full w-full object-cover rounded-lg"
              />
            </div>

            <div className="lg:py-16">
              <article className="space-y-4 text-gray-600">
                <p>
                  As a premier company specializing in renting top-notch
                  devices, we are dedicated to making your gatherings
                  unforgettable.
                </p>

                <p>
                  <span className="pr-2 font-bold text-primaryColor">
                    Our Story
                  </span>
                  We are Version Company, a leader in the market with 13 years
                  of experience. Founded with a passion for innovation and
                  excellence, Versionavi has grown into a trusted name in the
                  events industry. We pride ourselves on delivering seamless
                  experiences that captivate and engage your audience. Whether
                  it's a grand celebration or a professional conference, our
                  state-of-the-art equipment and expert team ensure your event
                  is a resounding success.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
