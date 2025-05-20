import React from "react";

function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-[#0D2436]">
      <h1 className="text-4xl font-extrabold text-[#1565D8] mb-10 text-center border-b pb-4 border-[#1565D8]">
        About Us
      </h1>

      {/* Smart Postify Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#183B56] mb-4 border-l-4 border-[#1565D8] pl-3">
          What is Smart Postify?
        </h2>
        <p className="leading-relaxed text-lg">
          <strong>Smart Postify</strong> is a cutting-edge, AI-powered blogging platform built with the <strong>MERN stack</strong>. 
          It empowers users to read engaging blogs while giving admin users full control through an intelligent dashboard.
        </p>
        <ul className="list-disc list-inside mt-4 text-lg space-y-1">
          <li>AI-integrated blog system with a clean and responsive UI</li>
          <li>Users can read content; admins can perform full CRUD operations</li>
          <li>Admin features: manage users, posts, comments, and user profiles</li>
          <li>Simplified navigation: Home, Blog, About, Contact, FAQs, Profile</li>
          <li>Admin dashboard for streamlined management</li>
          <li>UI beautifully crafted in Figma using modern design principles</li>
        </ul>
      </section>

      {/* College Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-[#183B56] mb-4 border-l-4 border-[#1565D8] pl-3">
          About Our Institution
        </h2>
        <p className="leading-relaxed text-lg">
          This project was developed at the <strong>School of Information Technology (SOIT)</strong>, 
          part of <strong>Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)</strong>, a premier state technical university 
          in Bhopal, Madhya Pradesh, India.
        </p>
        <p className="mt-3 text-lg">
          SOIT offers futuristic engineering programs that move beyond traditional degrees:
        </p>
        <ul className="list-disc list-inside mt-2 text-lg space-y-1">
          <li>B.Tech in CSE – Artificial Intelligence & Machine Learning</li>
          <li>B.Tech in CSE – Data Science</li>
          <li>B.Tech in CSE – Business Systems</li>
        </ul>
        <p className="mt-3 text-lg">
          The institution is dedicated to empowering students with modern skillsets tailored to today’s tech industry.
        </p>
      </section>

      {/* Creators Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-[#183B56] mb-4 border-l-4 border-[#1565D8] pl-3">
          Meet the Creators
        </h2>
        <p className="leading-relaxed text-lg">
          <strong>Smart Postify</strong> is the product of dedicated teamwork by:
        </p>
        <ul className="list-disc list-inside mt-2 text-lg space-y-1">
          <li><strong>Anushka Sharma</strong></li>
          <li><strong>Vijaya Chaturvedi</strong></li>
          <li><strong>Vaibhavee Sikarwar</strong></li>
        </ul>
        <p className="mt-3 text-lg">
          Our team collaborated across frontend, backend, AI integration, and UI/UX design 
          to bring this idea to life — with the goal of delivering a powerful and intuitive user experience.
        </p>
      </section>

      {/* Footer Line */}
      <div className="mt-12 text-center border-t pt-6 text-sm text-[#183B56]">
        © {new Date().getFullYear()} Smart Postify. Built with dedication by Students of SOIT.
      </div>
    </div>
  );
}

export default About;
