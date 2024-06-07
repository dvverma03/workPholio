const Videobg = () => {

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mx-auto max-w-[700px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
                <video src="/images/video/video5.mp4" autoPlay muted loop/>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
  );
};

export default Videobg;