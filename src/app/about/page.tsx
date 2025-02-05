import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 space-y-12">
      {/* Introduction Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Who Am I?</h1>
        {/* Description about who you are */}
        <p className="text-lg text-gray-600 leading-relaxed mx-auto max-w-3xl">
          Hello! I’m Mehma Rashid, a passionate developer with a strong focus on web technologies. I specialize in building dynamic, scalable, and user-friendly applications using cutting-edge technologies like <span className="font-semibold text-blue-600">Next.js</span>, <span className="font-semibold text-blue-600">React</span>, and <span className="font-semibold text-blue-600">Sanity</span>. As a student, I’m always exploring new tools and methodologies to stay ahead in the fast-paced world of software development.
        </p>
      </section>

      {/* Image Section */}
      <section className="flex justify-center items-center space-x-8">
        {/* Left side - image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/image/dev.jpg"  // Update with actual path
            alt="MehmaRashid123"
            width={500}  // Provide width and height for proper image optimization
            height={500}  // Adjust the height proportionally
            className="rounded-lg shadow-xl w-full h-auto object-cover"  // Ensure image responsiveness and clean styling
          />
        </div>
        {/* Right side - text */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <p className="text-lg text-gray-600 leading-relaxed">
            I’m driven by the desire to create solutions that simplify problems and improve user experience. Whether it's working on the front-end or diving into the back-end, my focus is always on building intuitive, high-performance applications. I enjoy the challenge of bringing innovative ideas to life and constantly improving my skills as I work on new projects.
          </p>
        </div>
      </section>

      {/* Current Focus Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">
          My Current Focus
        </h2>
        {/* Text describing current work */}
        <p className="text-lg text-gray-600 leading-relaxed mx-auto max-w-3xl text-center">
          Currently, I’m focused on mastering <span className="font-semibold text-blue-600">Next.js</span> and <span className="font-semibold text-blue-600">Sanity</span> to build highly dynamic and SEO-friendly web applications. I’m also exploring the integration of <span className="font-semibold text-blue-600">AI</span> technologies to enhance web experiences and create more interactive user interfaces. Every new project is an opportunity to innovate and improve my coding practices.
        </p>
      </section>

      {/* Collaboration Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">
          Let’s Connect
        </h2>
        {/* Invitation for collaboration */}
        <p className="text-lg text-gray-600 leading-relaxed mx-auto max-w-3xl text-center">
          I’m always open to collaborating with other developers, designers, or anyone who shares an interest in building impactful digital solutions. If you’d like to discuss a potential project or just want to chat about the latest in tech, feel free to reach out!
        </p>
        {/* Contact links */}
        <div className="flex justify-center space-x-6">
          {/* Email link */}
          <a
            href="mailto:msyeda808@gmail.com"
            className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition"
          >
            Email Me
          </a>
          {/* LinkedIn link */}
          <a
            href="https://www.linkedin.com/in/mehma-rashid-9ba58b338"
            className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
