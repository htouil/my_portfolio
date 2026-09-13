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
      <h2 className="rounded-t bg-[#aca8ac] p-1 text-center text-sm text-black sm:text-base md:text-lg xl:text-xl">
        {title}
      </h2>
      <div
        ref={divToClick}
        className="group relative h-72 overflow-hidden rounded-b-lg border border-t-gray-400 bg-[#dabb64] min-[500px]:h-64 sm:h-72 md:h-80 xl:h-96"
      >
        <img
          ref={imageToHover}
          src={image}
          alt={`${title}_cover`}
          className={`absolute size-full rounded-b-lg object-cover transition duration-500 ease-in-out group-hover:-translate-y-full ${!ishovered ? '' : '-translate-y-full'}`}
        />
        <p className="size-full p-3 text-[10px] leading-relaxed text-black sm:text-xs lg:text-sm xl:text-base 2xl:text-xl">
          {text}
        </p>
      </div>
    </div>
  );
};

export default SingleProject;
