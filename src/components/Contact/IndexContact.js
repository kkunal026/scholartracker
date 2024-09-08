import React from "react";

export default function Index() {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
          <div className="w-full text-center lg:w-8/12">
            <p className="text-4xl text-center">
              <span role="img" aria-label="love">
              <i className="fas fa-envelope text-4xl bg-white rounded-full p-4 shadow-lg"></i>
              </span>
            </p>
            <h3 className="font-semibold text-3xl">Get in Touch</h3>
            <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
              We’re here to help! If you have any questions, feedback, or need
              assistance, please don’t hesitate to reach out to us. Our support
              team is available to assist you with any inquiries you may have.
            </p>
            <div className="sm:block flex flex-col mt-10">
              <a
                href="/"
                className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
              >
                Get Started
              </a>
              <a
                href="/"
                target="_blank"
                className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
              >
                {/* <i className="fab fa-github text-lg mr-1"></i> */}
                <span>Feedback</span>
              </a>
            </div>
            <div className="text-center mt-16"></div>
          </div>
        </div>
      </div>
    </>
  );
}
