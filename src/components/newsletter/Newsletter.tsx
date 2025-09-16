const Newsletter = () => {
  return (
    <>
      <hr />
      <section className="flex flex-col items-center justify-center py-16">
        <h3 className="font-heading text-center text-2xl font-semibold uppercase tracking-wider text-primary">
          Learn Now <span className="mt-2 inline-block text-theme md:mt-3">Newsletter</span>
        </h3>
        <p className="mb-8 mt-2 max-w-[550px] text-center text-base text-primary">
          Build better and faster UIs.
          <span className="block">
            Get the latest components and hooks directly in your inbox. No spam!
          </span>
        </p>
        <form className="gap-4 md:flex">
          <input
            type="email"
            id="email"
            className="block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-dark focus:border-blue-500 focus:ring-blue-500"
            placeholder="yourname@email.com"
            required
          />
          <button className="mt-4 w-full rounded-sm bg-theme px-4 py-2 text-white hover:bg-theme-hover focus:outline-hidden focus:ring-2 focus:ring-blue-300 disabled:bg-gray-400 md:mt-auto md:w-auto">
            Submit
          </button>
        </form>
      </section>
    </>
  )
}

export default Newsletter
