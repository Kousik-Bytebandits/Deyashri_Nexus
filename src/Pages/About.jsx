export default function AboutFAQ() {
  return (
    <div className=" bg-[#F2F5FF] min-h-screen flex justify-center p-6">
      <div className=" w-full text-gray-800">
        {/* About Us Section */}
        <h2 className="text-h2 font-bold mb-4">About Us</h2>
        <p className="mb-4 text-h4 leading-relaxed">
          An enim nullam tempor sapien gravida donec enim ipsum pretium porta
          justo integer at odio velna vitae auctor integer congue magna at purus
          pretium ligula rutrum luctus risus ultrice enim gravida. An enim nullam
          tempor sapien gravida donec enim ipsum pretium porta justo integer at
          odio velna vitae auctor integer congue magna at purus pretium ligula
          rutrum luctus risus ultrice enim gravida.
        </p>
        <p className="mb-4 text-h4 leading-relaxed">
          An enim nullam tempor sapien gravida donec enim ipsum pretium porta
          justo integer at odio velna vitae auctor integer congue magna at purus
          pretium ligula rutrum luctus risus ultrice enim gravida.
        </p>

        {/* Image Under About Us */}
        <img
          src="images/bg-1.png"
          alt="About us"
          className="w-full h-40 object-cover rounded-md mb-8"
        />

        {/* FAQ Section */}
        <h2 className="text-h2 font-bold mb-4 text-center">
          Frequently Asked <br /> Questions
        </h2>
        <p className="mb-6 text-h4 leading-relaxed text-center">
          An enim nullam tempor sapien gravida donec enim ipsum pretium porta
          justo integer at odio velna vitae auctor integer congue magna at purus
          pretium ligula rutrum luctus risus ultrice enim gravida
        </p>

        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="mb-6">
            <h3 className="text-h4 font-semibold mb-2">
              An enim nullam tempor sapien gravida donec enim i ?
            </h3>
            <p className="text-h4 leading-relaxed">
              An enim nullam tempor sapien gravida donec enim ipsum pretium
              porta justo integer at odio velna vitae auctor integer congue magna
              at purus pretium ligula rutrum luctus risus ultrice enim gravida
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
