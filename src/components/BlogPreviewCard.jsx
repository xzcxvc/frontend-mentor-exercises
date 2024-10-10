import React from "react";
import "../App.css";
import avatarImg from "../assets/images/image-avatar.webp";
import articleImg from "../assets/images/illustration-article.svg";

const BlogPreviewCard = () => {
  return (
    <>
      <div className="bg-yellow-950 w-screen min-h-screen px-5">
        <div className="flex flex-col gap-[15px] min-h-screen justify-center items-center">
          <h1 className="text-2xl font-bold">Blog Preview Card</h1>
          <div className="bg-white xs:w-[327px] xs:h-[501px] sm:w-[384px] sm:h-[525px] rounded-[20px] shadow-solid">
            <div className="flex flex-col p-[24px] gap-[24px]">
              {/* article image */}
              <img
                src={articleImg}
                alt="article-image"
                className="article-image rounded-[10px]"
              />
              {/* blog preview contents */}
              <div className="flex flex-col gap-[12px]">
                <div className="w-[82px] ">
                  <button
                    onClick={alert}
                    className="flex items-center px-12 justify-center bg-yellow-950 w-full rounded-[4px] py-[4px] "
                  >
                    <span className=" font-extrabold text-[12px] sm:text-[14px]">
                      Learningsss
                    </span>
                  </button>
                </div>
                <p className="text-[12px] sm:text-[16px] font-medium">
                  Publised 21 Dec 2023
                </p>
                <h1 className="font-extrabold text-[16px] sm:text-[20px] hover:cursor-pointer hover:text-yellow-950">
                  HTML & CSS Foundations
                </h1>

                <p className="font-medium text-[14px] sm:text-[16px] ">
                  These languages are the backbone of every website, defining
                  structure, content and presentation.
                </p>
              </div>
              {/* blogger */}
              <div className="flex gap-3 items-center ">
                <img src={avatarImg} alt="user-image" width="32px" />
                <span className="font-extrabold">Greg Hooper</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPreviewCard;
