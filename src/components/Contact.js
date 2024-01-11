import React from "react";

const Contact = () => {
  return (
    <section className="bg-secondery px-5 py-32" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-white">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2">
          Contact Me
        </h2>
        <p>
          I am currently open for a fulltime/Intern Full-stack Developer role.
          If you want to discuss about that feel free to email me or call me.
        </p>

        <p className="py-2">
          <a href="mailto:dharmikpadhiyar07@gmail.com">
            <span className="font-bold">Email:</span>{" "}
            dharmikpadhiyar07@gmail.com
          </a>
        </p>
        <p className="py-2">
          <a href="tel:+919157321591">
            <span className="font-bold">Phone:</span> +91 9157321591
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
