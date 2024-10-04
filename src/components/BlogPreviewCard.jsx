import React from "react";
import "../App.css";

const BlogPreviewCard = () => {
  return (
    <>
      <div className="bg-yellow-950 w-screen min-h-screen">
        <div className="flex flex-col gap-5 min-h-screen justify-center items-center">
          <h1 className="text-2xl font-bold">Blog Preview Card</h1>
          <div className="card-container">
            <div className="bg-white lg:w-[384px] lg:h-[525px] rounded-[20px] shadow-solid">
              <div className="flex flex-col">
                {/* article image */}

                {/* blog preview contents */}

                {/* blogger */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPreviewCard;
