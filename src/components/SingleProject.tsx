import { useState, useEffect, useRef } from 'react';

interface SingleProjectProps {
  title: string;
  image: string;
  text: string;
}

const SingleProject = ({ title, image, text }: SingleProjectProps) => {
  const [ishovered, setIsHovered] = useState(false);

  const imageToHover = useRef<HTMLImageElement | null>(null);
  const divToClick = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const switchHover = () => {
      setIsHovered((value) => !value);
    };
    const removeHover = () => {
      setIsHovered(false);
    };

    const project = divToClick.current;
    project?.addEventListener('touchstart', switchHover);
    document.addEventListener('scroll', removeHover);

    return () => {
      project?.removeEventListener('touchstart', switchHover);
      document.removeEventListener('scroll', removeHover);
    };
  }, []);
  return (
    <div className="flex w-full min-w-0 flex-col rounded-lg border border-gray-400">
      <h2 className="rounded-t bg-[#aca8ac] p-1 text-center text-sm text-black sm:text-base md:text-lg">
        {title}
      </h2>
      <div
        ref={divToClick}
        className="group relative h-72 overflow-hidden rounded-b-lg border border-t-gray-400 bg-black min-[500px]:h-64 sm:h-72 md:h-80 xl:h-96"
      >
        <img
          ref={imageToHover}
          src={image}
          alt={`${title}_cover`}
          className={`absolute inset-0 z-0 size-full rounded-b-lg object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0 ${ishovered ? 'opacity-0' : 'opacity-100'}`}
        />
        <p
          className={`absolute inset-0 z-10 size-full overflow-y-auto p-3 font-['Roboto_Mono'] text-[9px] leading-relaxed whitespace-pre-line text-white transition-opacity duration-500 group-hover:opacity-100 sm:text-[10px] lg:text-xs xl:text-sm 2xl:text-base ${ishovered ? 'opacity-100' : 'opacity-0'}`}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default SingleProject;
