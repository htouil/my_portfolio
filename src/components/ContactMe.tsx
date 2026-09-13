import React from 'react';

const ContactMe = () => {
  const [result, setResult] = React.useState('');
  const contact = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult('Sending...');

    const htmlForm = event.target as HTMLFormElement;
    const formData = new FormData(htmlForm);

    formData.append('access_key', '7d0353e3-8564-41f0-a25b-db1730dbfa1b');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const respData = await response.json();

    if (respData.success) {
      setResult('Form Sent Successfully');
      htmlForm.reset();
    } else {
      console.log('Error', respData);
      setResult(respData.message);
    }
  };

  return (
    <div id="contact" className="px-3 py-6 sm:px-4 sm:py-10 md:py-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-7 rounded-xl bg-slate-950/60 p-4 sm:p-6 md:gap-10 lg:px-14 xl:py-8">
        <h1 className="self-center text-slate-300 text-xl/relaxed font-extrabold tracking-wide md:text-3xl/relaxed xl:text-4xl/relaxed">
          Contact Me
        </h1>
        <form
          onSubmit={contact}
          className="flex grow flex-col gap-5 sm:px-3 md:gap-7 md:px-5"
        >
          <div className="flex w-full flex-col gap-5 md:flex-row">
            <label className="flex w-full flex-col gap-2">
              <span className="text-slate-300">First Name</span>
              <input
                type="text"
                name="first_name"
                required
                className="flex-1 rounded border-2 border-lime-400 px-2 py-1.5 text-slate-300 shadow-[0_0_8px_rgba(0,255,0,0.4),0_0_16px_rgba(0,255,0,0.2)] focus:ring-2 focus:ring-lime-400/70 focus:outline-none"
              />
            </label>
            <label className="flex w-full flex-col gap-2">
              <span className="text-slate-300">Last Name</span>
              <input
                type="text"
                name="last_name"
                required
                className="flex-1 rounded border-2 border-lime-400 px-2 py-1.5 text-slate-300 shadow-[0_0_8px_rgba(0,255,0,0.4),0_0_16px_rgba(0,255,0,0.2)] focus:ring-2 focus:ring-lime-400/70 focus:outline-none"
              />
            </label>
          </div>
          <label className="flex flex-col gap-2">
            <span className="text-slate-300">Email</span>
            <input
              type="email"
              name="email"
              required
              className="rounded border-2 border-lime-400 px-2 py-1.5 text-slate-300 shadow-[0_0_8px_rgba(0,255,0,0.4),0_0_16px_rgba(0,255,0,0.2)] focus:ring-2 focus:ring-lime-400/70 focus:outline-none"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-slate-300">Subject</span>
            <input
              type="text"
              name="subject"
              required
              className="rounded border-2 border-lime-400 px-2 py-1.5 text-slate-300 shadow-[0_0_8px_rgba(0,255,0,0.4),0_0_16px_rgba(0,255,0,0.2)] focus:ring-2 focus:ring-lime-400/70 focus:outline-none"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-slate-300">Message</span>
            <textarea
              name="message"
              required
              className="h-40 resize-none rounded border-2 border-lime-400 px-2 py-1.5 text-slate-300 shadow-[0_0_8px_rgba(0,255,0,0.4),0_0_16px_rgba(0,255,0,0.2)] focus:ring-2 focus:ring-lime-400/70 focus:outline-none sm:h-52 md:h-60"
            ></textarea>
          </label>
          <button
            className="cursor-pointer rounded bg-lime-600 py-2 font-semibold text-slate-300 shadow-[0_0_8px_rgba(0,255,0,0.4),0_0_16px_rgba(0,255,0,0.2)] hover:bg-lime-700"
            type="submit"
          >
            Send
          </button>
        </form>
        <span className="text-center text-lime-500">{result}</span>
      </div>
    </div>
  );
};

export default ContactMe;
