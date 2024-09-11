const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
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
              className="social-icon-img"
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
              className="social-icon-img"
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
              className="social-icon-img"
            />
          </a>
        </div>
      </div>

      <p className="text-white-800">
        Design & Develop with <span className="text-red-500">❤️</span> by Tai
        Nguyen
      </p>
    </footer>
  );
};

export default Footer;
