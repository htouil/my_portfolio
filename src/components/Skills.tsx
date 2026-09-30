import './Skills.css';

interface Skill {
  src: string;
  name: string;
}

const skills: Skill[] = [
  { src: '/html_logo.png', name: 'HTML' },
  { src: '/css_logo.png', name: 'CSS' },
  { src: '/tailwind_logo.png', name: 'Tailwind CSS' },
  { src: '/typescript_logo.png', name: 'TypeScript' },
  { src: '/react_logo.png', name: 'ReactJS' },
  { src: '/nextjs_logo.png', name: 'Next.js' },
  { src: '/nodejs_logo.png', name: 'NodeJS' },
  { src: '/fastify_logo.svg', name: 'Fastify' },
  // { src: '/expressjs_logo.svg', name: 'ExpressJS' },
  { src: '/nestjs_logo.svg', name: 'NestJS' },
  { src: '/mysql_logo.png', name: 'MySQL' },
  { src: '/postgresql_logo.webp', name: 'PostgreSQL' },
  { src: '/elasticsearch_logo.svg', name: 'Elasticsearch' },
  { src: '/airflow_logo.png', name: 'Airflow' },
  { src: '/rabbitmq_logo.svg', name: 'RabbitMQ' },
  { src: '/git_logo.png', name: 'Git' },
  { src: '/docker_logo.png', name: 'Docker' },
  { src: '/bash_logo.png', name: 'Bash' },
  { src: '/c_logo.png', name: 'C' },
  { src: '/c++_logo.png', name: 'C++' },
];

const addPadding = (src: string): string => {
  switch (src) {
    case '/css_logo.png':
      return 'p-2.5 md:p-3';
    case '/tailwind_logo.png':
      return 'p-3 md:p-4';
    case '/typescript_logo.png':
      return 'p-1.5 md:p-2';
    case '/react_logo.png':
      return 'p-1.5';
    case '/nextjs_logo.png':
      return 'p-2 md:p-1.5';
    case '/nodejs_logo.png':
      return 'p-2 md:p-1.5';
    case '/fastify_logo.svg':
      return 'p-1 md:p-0';
    case '/expressjs_logo.svg':
      return 'p-2 md:p-1';
    case '/nestjs_logo.svg':
      return 'p-1.5 md:p-1';
    case '/mysql_logo.png':
      return 'p-2.5 md:p-1.5';
    case '/postgresql_logo.webp':
      return 'p-2';
    case '/elasticsearch_logo.svg':
      return 'p-2 md:p-1.5';
    case '/airflow_logo.png':
      return 'p-2.5';
    case '/rabbitmq_logo.svg':
      return 'p-2.5';
    case '/docker_logo.png':
      return 'p-1 md:p-0';
    case '/bash_logo.png':
      return 'p-1';
    default:
      return 'p-0';
  }
};

const Marquee = () => {
  const duplicatedSkills = [...skills, ...skills];
  return (
    <div className="w-full overflow-hidden rounded-3xl border-t border-b border-sky-600 py-6 shadow-[0_10px_15px_-3px_rgb(0_0_0_/0.1),0_-10px_15px_-3px_rgb(0_0_0_/0.1)] shadow-sky-500/50 sm:py-7 md:rounded-4xl md:py-10">
      <div className="marquee flex w-max gap-7 md:gap-10">
        {duplicatedSkills.map((skill, index) => (
          <div
            key={`skill-${index}`}
            className="flex flex-col items-center justify-center gap-4"
          >
            <div className="flex size-14 items-center-safe justify-center-safe rounded-full bg-[linear-gradient(to_right,#9ca3af_0%,#9ca3af_50%,#d1d5db_50%,#d1d5db_100%)] sm:size-16 md:size-28">
              <img
                src={skill.src}
                alt={`Logo ${index + 1}`}
                className={`size-12 sm:size-14 md:size-20 ${addPadding(skill.src)}`}
              />
            </div>
            <p className="bg-linear-to-r from-sky-900 via-sky-600 to-sky-400 bg-clip-text text-[9px] font-semibold text-transparent sm:text-[10px] md:text-lg">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div id="skills" className="px-3 py-6 sm:px-4 sm:py-10 md:py-14">
      <div className="mx-auto flex max-w-7xl flex-col justify-center gap-7 rounded-xl bg-slate-950/60 p-4 sm:p-7 md:gap-10 md:p-10 lg:px-14 xl:px-16 xl:py-12">
        <h1 className="self-center text-slate-300 text-xl/relaxed font-extrabold tracking-wide md:text-3xl/relaxed xl:text-4xl/relaxed">
          Skills
        </h1>
        <Marquee />
      </div>
    </div>
  );
};

export default Skills;
