// import { useRef } from 'react';

const Profil = () => {
  return (
    <div id="about" className="px-3 py-6 sm:px-4 sm:py-10 md:py-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-xl bg-slate-950/60 p-4 sm:gap-6 sm:p-5 md:gap-8 md:p-8 lg:px-14 xl:flex-row xl:px-16 xl:py-8 2xl:px-32 2xl:py-10">
        <img
          src="/hatim_picture.jpg"
          alt="profil_picture"
          className="w-52 shrink-0 place-self-center rounded-2xl p-2 min-[500px]:w-56 sm:w-64 md:w-72 2xl:w-96"
        ></img>
        <div className="flex min-w-0 grow flex-col justify-center gap-5 text-white sm:gap-7 md:gap-10">
          <h1 className="self-center text-slate-300 text-center text-base/relaxed font-extrabold tracking-wide sm:text-lg/relaxed md:text-2xl/relaxed xl:self-start">
            Hello dear visitor,
            <span className="ml-3 inline-block min-[500px]:ml-8 sm:ml-14" />
            <br />I am Hatim TOUIL
          </h1>
          <div className="flex w-full max-w-xl flex-col self-center overflow-hidden rounded-xl border border-[#aca8ac] sm:w-[min(100%,24rem)] md:min-h-72 md:rounded-3xl xl:self-end 2xl:min-h-80">
            <div className="flex min-h-9 shrink-0 rounded-t-xl bg-[#aca8ac] md:min-h-12">
              <div className="flex basis-3/12 items-center-safe justify-evenly">
                <img
                  src="/mac_close_btn.png"
                  alt="close_button"
                  className="size-2.5 md:size-3.5"
                />
                <img
                  src="/mac_reduce_btn.png"
                  alt="reduce_button"
                  className="size-2.5 md:size-3.5"
                />
                <img
                  src="/mac_resize_btn.png"
                  alt="resize_button"
                  className="size-2.5 md:size-3.5"
                />
              </div>
              <div className="flex basis-9/12 items-center-safe justify-center-safe">
                <p className="text-center text-base text-black md:text-lg lg:text-xl">
                  Summary
                </p>
              </div>
            </div>
            <div className="bg-[#dabb64]">
              <p className="p-3 text-[11px] leading-relaxed text-black min-[500px]:text-xs md:p-4 md:text-sm 2xl:text-[15px]">
                Hello and welcome! I'm Hatim TOUIL, a Full-Stack Developer
                passionate about building modern, reliable, and scalable web
                applications.
                <br />
                My journey started at 1337 Coding School, where I developed a
                strong foundation in software engineering, system programming,
                algorithms, and collaborative development. Since then, I've
                built experience across the stack, working with React, Next.js,
                TypeScript, Node.js, NestJS, Fastify, PostgreSQL, Prisma,
                Docker, and more.
                <br />
                Most recently, I completed an internship at Devoteam Cyber
                Trust, where I contributed to a Cyber Threat Intelligence
                platform using technologies such as Next.js, NestJS, PostgreSQL,
                Elasticsearch, RabbitMQ, and Apache Airflow. This experience
                strengthened my full-stack development skills while introducing
                me to cybersecurity, distributed systems, and
                infrastructure-oriented engineering.
                <br />I enjoy turning ideas into intuitive, creative, and
                well-engineered products, and I'm always looking to learn,
                build, and take on challenging problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil;
