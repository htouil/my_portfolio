import { useState, useEffect, useRef } from 'react';

const NavBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const cvPopup = useRef<HTMLDivElement | null>(null);
  const cvBtn = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const turnHidden = (e: Event) => {
      if (cvPopup.current && cvBtn.current && isVisible === true) {
        if (
          !cvPopup.current.contains(e.target as Node) &&
          !cvBtn.current.contains(e.target as Node)
        )
          setIsVisible(false);
      }
    };

    document.addEventListener('mousedown', turnHidden);
    document.addEventListener('scroll', turnHidden);

    return () => {
      document.removeEventListener('mousedown', turnHidden);
      document.removeEventListener('scroll', turnHidden);
    };
  }, [isVisible]);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-10 bg-slate-950 px-4 py-3 shadow-md sm:px-6 xl:px-8 2xl:px-14">
      <div className="mx-auto flex max-w-400 flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <div className="relative grid shrink-0 grid-cols-3 place-items-center gap-3 self-center sm:gap-2 xl:gap-2.5">
          <a
            title="Visit my Linkedin"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/touil-hatim"
          >
            <svg
              className="size-4 cursor-pointer fill-slate-300 hover:fill-slate-600 md:size-5 xl:size-6"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z"></path>{' '}
              </g>
            </svg>
          </a>
          <a
            title="Visit my Github"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/htouil"
          >
            <svg
              className="jam jam-github size-4 cursor-pointer fill-slate-300 hover:fill-slate-600 md:size-5 xl:size-6"
              viewBox="0 0 21 21"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMinYMin"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M18.88 1.099C18.147.366 17.265 0 16.233 0H3.746C2.714 0 1.832.366 1.099 1.099.366 1.832 0 2.714 0 3.746v12.487c0 1.032.366 1.914 1.099 2.647.733.733 1.615 1.099 2.647 1.099H6.66c.19 0 .333-.007.429-.02a.504.504 0 0 0 .286-.169c.095-.1.143-.245.143-.435l-.007-.885c-.004-.564-.006-1.01-.006-1.34l-.3.052c-.19.035-.43.05-.721.046a5.555 5.555 0 0 1-.904-.091 2.026 2.026 0 0 1-.872-.39 1.651 1.651 0 0 1-.572-.8l-.13-.3a3.25 3.25 0 0 0-.41-.663c-.186-.243-.375-.407-.566-.494l-.09-.065a.956.956 0 0 1-.17-.156.723.723 0 0 1-.117-.182c-.026-.061-.004-.111.065-.15.07-.04.195-.059.378-.059l.26.04c.173.034.388.138.643.311a2.1 2.1 0 0 1 .631.677c.2.355.44.626.722.813.282.186.566.28.852.28.286 0 .533-.022.742-.065a2.59 2.59 0 0 0 .585-.196c.078-.58.29-1.028.637-1.34a8.907 8.907 0 0 1-1.333-.234 5.314 5.314 0 0 1-1.223-.507 3.5 3.5 0 0 1-1.047-.872c-.277-.347-.505-.802-.683-1.365-.177-.564-.266-1.215-.266-1.952 0-1.049.342-1.942 1.027-2.68-.32-.788-.29-1.673.091-2.652.252-.079.625-.02 1.119.175.494.195.856.362 1.086.5.23.14.414.257.553.352a9.233 9.233 0 0 1 2.497-.338c.859 0 1.691.113 2.498.338l.494-.312a6.997 6.997 0 0 1 1.197-.572c.46-.174.81-.221 1.054-.143.39.98.424 1.864.103 2.653.685.737 1.028 1.63 1.028 2.68 0 .737-.089 1.39-.267 1.957-.177.568-.407 1.023-.689 1.366-.282.343-.633.63-1.053.865-.42.234-.828.403-1.223.507a8.9 8.9 0 0 1-1.333.235c.45.39.676 1.005.676 1.846v3.11c0 .147.021.266.065.357a.36.36 0 0 0 .208.189c.096.034.18.056.254.064.074.01.18.013.318.013h2.914c1.032 0 1.914-.366 2.647-1.099.732-.732 1.099-1.615 1.099-2.647V3.746c0-1.032-.367-1.914-1.1-2.647z"></path>
              </g>
            </svg>
          </a>
          <button
            ref={cvBtn}
            title="Download my CV"
            className="flex size-4 cursor-pointer items-center justify-center self-center justify-self-center rounded bg-slate-300 text-center leading-none font-extrabold text-slate-950 hover:bg-slate-600 md:size-5 xl:size-6"
            onClick={() => setIsVisible(!isVisible)}
          >
            <span className="text-[10px] md:text-xs xl:text-base">CV</span>
          </button>
          <div
            ref={cvPopup}
            className={`${isVisible ? '' : 'hidden'} absolute right-0 bottom-0 -translate-x-0.5 translate-y-full md:-translate-x-1.5 md:translate-y-8.5 md:scale-110 xl:-translate-x-3 xl:translate-y-9 xl:scale-125`}
          >
            <img
              src="/triangle_icon.png"
              className="size-2.5 place-self-end text-sky-900"
            />
            <div className="flex h-5.5 w-18 translate-x-2 items-center justify-center divide-x-2 divide-sky-900 rounded bg-slate-950 ring-2 ring-sky-900">
              <a
                href="/CV_Hatim_Touil_EN.pdf"
                download
                className="grid size-full grid-cols-2 place-items-center px-0.5"
              >
                <img src="/download_icon.png" className="size-3" />
                <p className="text-[10px] text-slate-300">EN</p>
              </a>
              <a
                href="/CV_Hatim_Touil_FR.pdf"
                download
                className="grid size-full grid-cols-2 place-items-center px-0.5"
              >
                <img src="/download_icon.png" className="size-3" />
                <p className="text-[10px] text-slate-300">FR</p>
              </a>
            </div>
          </div>
        </div>
        <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-[10px] font-medium text-slate-300 min-[500px]:gap-x-6 min-[500px]:text-xs sm:justify-end sm:text-sm md:text-base lg:text-lg xl:text-xl">
          <li>
            <a
              href="#about"
              onClick={(e) => handleScroll(e, '#about')}
              className="hover:text-slate-600"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={(e) => handleScroll(e, '#skills')}
              className="hover:text-slate-600"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => handleScroll(e, '#projects')}
              className="hover:text-slate-600"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, '#contact')}
              className="hover:text-slate-600"
            >
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
