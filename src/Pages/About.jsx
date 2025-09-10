export default function AboutFAQ() {
  return (
    <div id="about" className="bg-[#F2F5FF] min-h-screen p-6 mb-10 mt-10">
      <div className="w-full md:w-[90%] lg:w-[80%] mx-auto text-gray-800 mt-10">
        {/* About Us Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-start">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold md:font-normal mb-6 text-[#1A2238]">About Us</h2>
            <p className="mb-4 text-[14px] md:text-lg leading-relaxed">
              An enim nullam tempor sapien gravida donec enim ipsum pretium
              porta justo integer at odio velna vitae auctor integer congue
              magna at purus pretium ligula rutrum luctus risus ultrice enim
              gravida.
            </p>
            <p className="mb-4 text-[14px] md:text-lg leading-relaxed">
              An enim nullam tempor sapien gravida donec enim ipsum pretium
              porta justo integer at odio velna vitae auctor integer congue
              magna at purus pretium ligula rutrum luctus risus ultrice enim
              gravida.
            </p>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="images/bg-1.png"
              alt="About us"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>

        {/* FAQ Section */}
        <div id="faqs" className="mt-10 md:px-0">
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold pt-10 pb-6 text-center text-[#1A2238]">
            Frequently Asked <br className="md:hidden" /> Questions
          </h2>

          {/* Section Description */}
          <p className="mb-6 text-[14px] md:text-lg leading-relaxed text-center max-w-2xl mx-auto pb-6">
            An enim nullam tempor sapien gravida donec enim ipsum pretium porta
            justo integer at odio velna vitae auctor integer congue magna at purus
            pretium ligula rutrum luctus risus ultrice enim gravida
          </p>

          {/* Questions List */}
          <div className="w-full mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Left Column */}
              <div className="space-y-8">
                {[1, 2, 3].map((item) => (
                  <div key={item}>
                    <h3 className="text-xl font-semibold mb-2">
                      An enim nullam tempor sapien gravida donec enim i ?
                    </h3>
                    <p className="text-[14px] md:text-lg leading-relaxed text-gray-700">
                      An enim nullam tempor sapien gravida donec enim ipsum pretium
                      porta justo integer at odio velna vitae auctor integer congue
                      magna at purus pretium ligula rutrum luctus risus ultrice enim
                      gravida
                    </p>
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                {[4, 5, 6].map((item) => (
                  <div key={item}>
                    <h3 className="text-xl font-semibold mb-2">
                      An enim nullam tempor sapien gravida donec enim i ?
                    </h3>
                    <p className="text-[14px] md:text-lg leading-relaxed text-gray-700">
                      An enim nullam tempor sapien gravida donec enim ipsum pretium
                      porta justo integer at odio velna vitae auctor integer congue
                      magna at purus pretium ligula rutrum luctus risus ultrice enim
                      gravida
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
