import SingleProject from './SingleProject';

const Projects = () => {
  return (
    <div id="projects" className="px-3 py-6 sm:px-4 sm:py-10 md:py-14">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-7 rounded-xl bg-slate-950/60 px-4 py-5 sm:p-6 md:gap-10 lg:px-12 xl:px-14 xl:py-10">
        <h1 className="self-center bg-gradient-to-r from-zinc-600 via-zinc-400 via-90% to-zinc-300 bg-clip-text text-xl/relaxed font-extrabold tracking-wide text-transparent md:text-3xl/relaxed xl:text-4xl/relaxed">
          Projects
        </h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-8 md:gap-y-8 lg:gap-x-12 lg:gap-y-10 xl:px-2 2xl:gap-x-16 2xl:gap-y-16">
          <SingleProject
            title="so_long"
            image="/so_long_cover.png"
            text='"so_long" is a 2D game developed in C using the MiniLibX graphics
                library. The player navigates through a map, collecting items and
                reaching the exit. This project enhances understanding of graphics
                rendering, event handling, and basic game mechanics.'
          />
          <SingleProject
            title="push_swap"
            image="/push_swap_cover.jpg"
            text='"push_swap" is a sorting algorithm project that involves sorting a
            stack of integers using a limited set of operations (push, swap,
            rotate). The objective is to achieve the sorted stack with the
            minimal number of moves, emphasizing algorithm optimization and
            efficiency.'
          />
          <SingleProject
            title="minishell"
            image="/minishell_cover.jpg"
            text='"minishell" is a project focused on creating a simple Unix shell. It
            involves implementing command parsing, execution, environment
            variable management, and handling of built-in commands, providing
            deep insights into process creation and synchronization in Unix
            systems.'
          />
          <SingleProject
            title="inception"
            image="/inception_cover.jpg"
            text='"inception" is a project that introduces system administration and
            DevOps concepts by setting up a virtualized infrastructure using
            Docker. It involves creating and configuring multiple services (like
            Nginx, WordPress, and MariaDB) within Docker containers, emphasizing
            containerization and networking.'
          />
          <SingleProject
            title="ft_irc"
            image="/ft_irc_cover.png"
            text='"ft_irc" is a networking project that entails developing an IRC
            (Internet Relay Chat) server from scratch using C++. It focuses on
            understanding and implementing communication protocols,
            client-server architecture, and managing multiple client
            connections.'
          />
          <SingleProject
            title="ft_transcendence"
            image="/ft_transcendence_cover.png"
            text='"ft_transcendence", the final group project of the 1337 common core
            curriculum, is a full-stack web application that combines a
            real-time multiplayer Pong game with features like user
            authentication, chat systems, and user profiles. 
            In this project, I specialized in the front-end development,
            utilizing HTML, Tailwind CSS, and TypeScript to craft a responsive
            and visually appealing user interface.'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
