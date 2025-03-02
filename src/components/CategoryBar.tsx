import React from "react";

const images = [
  { src: "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", caption: "Swimming" },
  { src: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1200", caption: "Gym" },
  { src: "https://images.pexels.com/photos/71104/utah-mountain-biking-bike-biking-71104.jpeg?auto=compress&cs=tinysrgb&w=1200", caption: "Cycling" },
  { src: "https://images.pexels.com/photos/358042/pexels-photo-358042.jpeg?auto=compress&cs=tinysrgb&w=1200", caption: "Basketball" },
  { src: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=1200", caption: "Football" },
  { src: "https://images.pexels.com/photos/3718433/pexels-photo-3718433.jpeg?auto=compress&cs=tinysrgb&w=800", caption: "Cricket" },
];

const CategoryBar = () => {
  return (
    <div className="flex flex-wrap justify-left gap-2 my-6">
      {images.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <img src={item.src} alt={item.caption} className="rounded-lg shadow-md h-32 w-48" />
          <p className="mt-2 text-sm text-gray-700">{item.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryBar;