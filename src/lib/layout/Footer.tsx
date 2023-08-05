const Footer = () => {
  return (
    <footer className="wrapper">
      <div className="flex">
        <p className="text-xs">
          {new Date().getFullYear()} -{' '}
          <a href="https://redframe.tech" target="_blank" rel="noopener noreferrer">
            Redframe
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
