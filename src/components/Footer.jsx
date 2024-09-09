const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p className="text-white-500">
          © 2024 Tai Nguyen. All rights reserved.
        </p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <a
            href="https://github.com/tainguyencoder"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/footer/github.webp"
              alt="github"
              className="w-1/2 h-1/2"
            />
          </a>
        </div>
        <div className="social-icon">
          <a
            href="https://linkedin.com/in/tainguyencoder"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/footer/linkedin.webp"
              alt="linkedin"
              className="w-1/2 h-1/2"
            />
          </a>
        </div>
        <div className="social-icon">
          <a
            href="https://zalo.me/0989683920"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/footer/zalo.webp"
              alt="zalo"
              className="w-1/2 h-1/2"
            />
          </a>
        </div>
      </div>

      <p className="text-white-500">
        Design & Develop with <span className="text-red-500">❤️</span> by Tai
        Nguyen.
      </p>
    </footer>
  );
};

export default Footer;
