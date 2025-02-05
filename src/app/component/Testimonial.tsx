import React from 'react';

const Testimonial = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <h1 className='text-5xl font-extrabold text-indigo-500 flex justify-center mb-12'>Testimonial</h1>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* First Testimonial */}
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <p className="leading-relaxed mb-4">
                  &quot;I never thought an AI could understand my writing style so well! It helps me generate ideas and streamline my workflow, making my blog posts more engaging and efficient.&quot;
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  Sarah T
                </h2>
                <p className="text-gray-500">Blogger &amp; Content Creator</p>
              </div>
            </div>

            {/* Second Testimonial */}
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <p className="leading-relaxed mb-4">
                  &quot;This AI-powered platform has completely changed the way I approach content creation. It offers insightful suggestions and generates creative ideas that I would never have thought of!&quot;
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  Michael P
                </h2>
                <p className="text-gray-500">Tech Enthusiast</p>
              </div>
            </div>

            {/* Third Testimonial */}
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <p className="leading-relaxed mb-4">
                  &quot;As a writer, I&apos;m always looking for ways to stay ahead of the curve. This AI not only improves my writing but also keeps me updated with the latest trends, ensuring my blog posts are always relevant and engaging.&quot;
                </p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                  Emily J
                </h2>
                <p className="text-gray-500">Freelance Writer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
