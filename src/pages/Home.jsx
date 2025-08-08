import React, { useEffect, useState } from "react";

const Home = () => {
  const items = [
    "https://i.abcnewsfe.com/a/fd751005-a167-478b-bba2-ccaf61e26bf6/iron-man-rdjr-1-ht-thg-231204_1701712078177_hpMain.jpg",
    "https://ae01.alicdn.com/kf/S3dd8080724bc47f3ba8a61dfefa8cddag.jpg?width=800&height=800&hash=1600",
    "https://static.wikia.nocookie.net/marveldatabase/images/f/fe/Avengers_Endgame_poster_041_Variant_Textless.jpg/revision/latest?cb=20190629185509",
    "https://media1.popsugar-assets.com/files/thumbor/PmWxV8uJM9lNjor5LauZg-XGPPo=/2048x1080/top/filters:format_auto():quality(85):extract_cover()/2019/07/01/076/n/46207611/tmp_YF8Suz_217bdaf4519e21ea_MCDAVEN_EC254.jpg",
    "https://i.pinimg.com/736x/10/12/1c/10121c6ec2d43d330c894e58319d5bcf.jpg",
    "https://i.abcnewsfe.com/a/fd751005-a167-478b-bba2-ccaf61e26bf6/iron-man-rdjr-1-ht-thg-231204_1701712078177_hpMain.jpg",
    "https://ae01.alicdn.com/kf/S3dd8080724bc47f3ba8a61dfefa8cddag.jpg?width=800&height=800&hash=1600",
    "https://static.wikia.nocookie.net/marveldatabase/images/f/fe/Avengers_Endgame_poster_041_Variant_Textless.jpg/revision/latest?cb=20190629185509",
    "https://media1.popsugar-assets.com/files/thumbor/PmWxV8uJM9lNjor5LauZg-XGPPo=/2048x1080/top/filters:format_auto():quality(85):extract_cover()/2019/07/01/076/n/46207611/tmp_YF8Suz_217bdaf4519e21ea_MCDAVEN_EC254.jpg",
    "https://i.pinimg.com/736x/10/12/1c/10121c6ec2d43d330c894e58319d5bcf.jpg",
    "https://i.abcnewsfe.com/a/fd751005-a167-478b-bba2-ccaf61e26bf6/iron-man-rdjr-1-ht-thg-231204_1701712078177_hpMain.jpg",
    "https://ae01.alicdn.com/kf/S3dd8080724bc47f3ba8a61dfefa8cddag.jpg?width=800&height=800&hash=1600",
    "https://static.wikia.nocookie.net/marveldatabase/images/f/fe/Avengers_Endgame_poster_041_Variant_Textless.jpg/revision/latest?cb=20190629185509",
    "https://media1.popsugar-assets.com/files/thumbor/PmWxV8uJM9lNjor5LauZg-XGPPo=/2048x1080/top/filters:format_auto():quality(85):extract_cover()/2019/07/01/076/n/46207611/tmp_YF8Suz_217bdaf4519e21ea_MCDAVEN_EC254.jpg",
    "https://i.pinimg.com/736x/10/12/1c/10121c6ec2d43d330c894e58319d5bcf.jpg",
    "https://i.abcnewsfe.com/a/fd751005-a167-478b-bba2-ccaf61e26bf6/iron-man-rdjr-1-ht-thg-231204_1701712078177_hpMain.jpg",
    "https://ae01.alicdn.com/kf/S3dd8080724bc47f3ba8a61dfefa8cddag.jpg?width=800&height=800&hash=1600",
    "https://static.wikia.nocookie.net/marveldatabase/images/f/fe/Avengers_Endgame_poster_041_Variant_Textless.jpg/revision/latest?cb=20190629185509",
    "https://media1.popsugar-assets.com/files/thumbor/PmWxV8uJM9lNjor5LauZg-XGPPo=/2048x1080/top/filters:format_auto():quality(85):extract_cover()/2019/07/01/076/n/46207611/tmp_YF8Suz_217bdaf4519e21ea_MCDAVEN_EC254.jpg",
    "https://i.pinimg.com/736x/10/12/1c/10121c6ec2d43d330c894e58319d5bcf.jpg",
    "Meow.webp",
  ];

  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   setMessage(`You have clicked ${count} time`);
  // }, [count]);

  useEffect(() => {
    fetch("https://clothes-json.onrender.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div>
      {/* Banner */}
      <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            We invest in the world’s potential
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Get started
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>

      {/* Display */}
      <section className="columns-2 md:columns-3 lg:columns-6 gap-4 p-4 space-y-4">
        {items.map((item, index) => (
          <div key={index} className="overflow-hidden shadow rounded-lg">
            <img src={item} alt="Image" className="w-full h-auto" />
          </div>
        ))}
      </section>

      {/* Test useEffect */}
      {/* <section>
        <button
          onClick={() => setCount(count + 1)}
          className="px-2 py-1 rounded bg-sky-400 cursor-pointer"
        >
          Click me
        </button>
        <p>{message}</p>
      </section> */}
      <hr />

      <section className="columns-2 md:columns-3 lg:columns-6 gap-4 p-4 space-y-4">
        {data.map((item, index) => (
          <div key={index} className="overflow-hidden shadow rounded-lg">
            <img src={item.image} alt="Image" />

            <aside className="p-3">
              <h1>{item.name}</h1>
              <h3>{item.category}</h3>

              <div className="flex justify-between">
                <p>{item.size}</p>
                <p>{item.color}</p>
              </div>

              <h2 className="mt-4">${item.price}</h2>
            </aside>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
