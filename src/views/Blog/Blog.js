import React from "react";
import { Link, useNavigate } from "react-router-dom";
import p1 from "../../assets/Blog/1-300x200.jpg"
import p2 from "../../assets/Blog/4-300x200.jpg"
import p3 from "../../assets/Blog/5-300x200.JPG"
import p4 from "../../assets/Blog/6-300x200.jpg"

const Blog = () => {
  const navigate = useNavigate();
  const handleBlogOne = () => {
    console.log("hello");
    navigate("/blogOne");
  };
  const handleBlogTwo = () => {
    console.log("hello");
    navigate("/blogTwo");
  };
  const handleBlogThree = () => {
    console.log("hello");
    navigate("/blogThree");
  };
  const handleBlogFour = () => {
    console.log("hello");
    navigate("/blogFour");
  };

  return (
    <div>
      <div className="text-center">
        <div className=" container max-w-6xl max-h-60xl px-10 py-6 mx-auto rounded-lg shadow-sm  grid grid-cols-1 justify-items-center gap-5 md:grid-cols-3 lg:grid-cols-4 ">
          <div className="max-w-xs  p-6 rounded-md shadow-md border-4 dark:bg-gray-100 dark:text-gray-50">
            <img
              src={p1}
              alt=""
              onClick={() => handleBlogOne()}
              className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="mt-6 mb-2">
              <span className="block text-xs font-medium tracking-widest uppercase text-green-600">
                <Link to="/blogOne"> সহজে কাপড়ের  </Link>
              </span>
              <h2 className="text-xl text-green-600 font-semibold tracking-wide">
                <Link to="/blogOne"> দুর্গন্ধ দূর করার উপায় </Link>
              </h2>
            </div>
            <p className="text-black">
            কাপড় ধোয়ার মত সময় আমাদের প্রায় প্রতিদিন থাকে না।
            কাপড় ধোয়া ছাড়াই দুর্গন্ধ দূর করার উপায় আছে কি?
            হ্যাঁ ধুয়ে নিনে আছে সহজ উপায় !
            </p>
          </div>

          <div className="max-w-xs p-6 rounded-md shadow-md border-4 dark:bg-gray-100 dark:text-gray-50">
            <img
              src={p2}
              alt=""
              onClick={() => handleBlogTwo()}
              className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="mt-6 mb-2">
              <span className="block text-xs font-medium tracking-widest uppercase text-green-600">
                <Link to="/blogTwo"> সাদা কাপড় </Link>
              </span>
              <h2 className="text-xl text-green-600 font-semibold tracking-wide">
                <Link to="/blogTwo"> যেভাবে ধোবেন </Link>
              </h2>
            </div>
            <p className="text-black">
              কমবেশি সবাই সাদা পোশাক পরতে  পছন্দ করেন ,ময়লাও হয় খুব
              তাড়াতাড়ি। সাদা কাপড় ধোয়ার নিয়ম চলুন জেনে নিই-
            </p>
          </div>

          <div className="max-w-xs p-6 rounded-md shadow-md border-4 dark:bg-gray-100 dark:text-gray-50">
            <img
              src={p3}
              alt=""
              onClick={() => handleBlogThree()}
              className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="mt-6 mb-2">
              <span className="block text-xs font-medium tracking-widest uppercase text-green-600">
                <Link to="/blogThree"> গরমে আরাম </Link>
              </span>
              <h2 className="text-xl text-green-600 font-semibold tracking-wide">
                <Link to="/blogThree"> পাবেন যে কাপড়ে </Link>
              </h2>
            </div>
            <p className="text-black">
            গ্রীষ্মকালের ক্ষেত্রে সবচেয়ে বড় লক্ষ হচ্ছে গরম আবহাওয়া শীতল, আরামদায়ক ও ফ্যাশনেবল পোশাক পড়া চলুন জেনে নেই টিপসগুলো:
            </p>
          </div>

          <div className="max-w-xs p-6 rounded-md shadow-md border-4 dark:bg-gray-100 dark:text-gray-50">
            <img
              src={p4}
              alt=""
              onClick={() => handleBlogFour()}
              className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="mt-6 mb-2">
              <span className="block text-xs font-medium tracking-widest uppercase text-green-600">
                <Link to="/blogFour"> শীতের কাপড় </Link>
              </span>
              <h2 className="text-xl text-green-600 font-semibold tracking-wide">
                <Link to="/blogFour"> যেভাবে সংরক্ষণ করতে হবে </Link>
              </h2>
            </div>
            <p className="text-black">
            শীতের জামাকাপড় সঠিকভাবে সংরক্ষণ করা , জামাকাপড় ভাল অবস্থায় রাখতে এবং ঠান্ডা মাস ফিরে আসার জন্য ব্যবহারের জন্য প্রস্তুত রাখতে সাহায্য করতে পারে। 
            শীতের পোশাক সংরক্ষণ করার জন্য এখানে কিছু পদক্ষেপ অনুসরণ করতে পারেন:
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
