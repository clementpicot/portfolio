import React from "react";

export default function Footer() {
  return (
    <footer className="mt-12 mb-2">
      <div className="flex sm:justify-end gap-8">
        <p>
          <a
            href="https://www.linkedin.com/in/clement-picot/"
            target="_blank"
            rel="noopener noreferrer"
            data-umami-event="Redirection LinkedIn - Footer"
          >
            LinkedIn
          </a>
        </p>
        <p>
          <a
            href="mailto:pro.clementpicot@gmail.com"
            data-umami-event="Email"
          >
            Email
          </a>
        </p>
      </div>
    </footer>
  );
}
