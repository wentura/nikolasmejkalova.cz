export default function Hero() {
  return (
    <div
      className="hero bg-no-repeat bg-cover min-h-[500px]"
      style={{
        backgroundImage:
          "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
      }}
    >
      <div className="container mx-auto hero-overlay bg-opacity-20 bg-red-600">
        test test test testtest testtest testtest test
      </div>
      <div className="container mx-auto hero-content text-center text-neutral-content py-8 flex bg-red-200 justify-around">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
        <div className="max-w-md bg-red-700">tewte</div>
      </div>
    </div>
  );
}
