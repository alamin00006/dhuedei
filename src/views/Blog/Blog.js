import React from "react";
import p1 from "../../assets/Blog/1-300x200.jpg"
import p2 from "../../assets/Blog/4-300x200.jpg"
import p3 from "../../assets/Blog/5-300x200.jpg"
import p4 from "../../assets/Blog/6-300x200.jpg"

const Blog = () => {
  return (
    <div>

      <div className="text-center">
      <div className="grid grid-cols-1 justify-items-center gap-5 md:grid-cols-3 lg:grid-cols-4 ">
        <div className="max-w-xs p-6 rounded-md shadow-md border-4 dark:bg-gray-100 dark:text-gray-50">
          <img
            src={p1}
            alt=""
            className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
          />
          <div className="mt-6 mb-2">
            <span className="block text-xs font-medium tracking-widest uppercase text-amber-300">
			কাপড়ের দুর্গন্ধ 
            </span>
            <h2 className="text-xl text-amber-300 font-semibold tracking-wide">
			দূর করার সহজ উপায়
            </h2>
          </div>
          <p className="text-black">
		  প্রতিদিনই কাপড় ধোয়ার মতো সময় আমাদের থাকে না। যদি কাপড় ধোয়া ছাড়াই দুর্গন্ধ দূর করা যায়? আছে সহজ উপায়। 
		  চলুন জেনে নিই-
          </p>
        </div>

        <div className="max-w-xs p-6 rounded-md shadow-md border-4 dark:bg-gray-100 dark:text-gray-50">
          <img
            src={p2}
            alt=""
            className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
          />
          <div className="mt-6 mb-2">
            <span className="block text-xs font-medium tracking-widest uppercase text-amber-300">
			সাদা কাপড় 
            </span>
            <h2 className="text-xl text-amber-300 font-semibold tracking-wide">
			যেভাবে ধোবেন
            </h2>
          </div>
          <p className="text-black">
		  সাদা পোশাক পরতে কমবেশি সবাই পছন্দ করেন। তবে সাদা পোশাকে ময়লাও হয় খুব তাড়াতাড়ি।
		   তাই সাদা কাপড় ধোয়ার নিয়ম চলুন জেনে নিই-
          </p>
        </div>

        <div className="max-w-xs p-6 rounded-md shadow-md border-4 dark:bg-gray-100 dark:text-gray-50">
          <img
            src={p3}
            alt=""
            className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
          />
          <div className="mt-6 mb-2">
            <span className="block text-xs font-medium tracking-widest uppercase text-amber-500">
			গরমে আরাম 
            </span>
            <h2 className="text-xl text-amber-500 font-semibold tracking-wide">
			পাবেন যে কাপড়ে
            </h2>
          </div>
          <p className="text-black">
		  গ্রীষ্মের ফ্যাশনের ক্ষেত্রে সবচেয়ে বড় লক্ষ্য হলো গরম আবহাওয়ায় শীতল এবং আরামদায়ক থাকা।
		   এখানে বিবেচনা করার জন্য আরও কিছু বিশদ টিপস আপনাদের জন্য দেওয়া হলো:
          </p>
        </div>

        <div className="max-w-xs p-6 rounded-md shadow-md border-4 dark:bg-gray-100 dark:text-gray-50">
          <img
            src={p4}
            alt=""
            className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
          />
          <div className="mt-6 mb-2">
            <span className="block text-xs font-medium tracking-widest uppercase text-amber-500">
			শীতের কাপড় 
            </span>
            <h2 className="text-xl text-amber-500 font-semibold tracking-wide">
			যেভাবে সংরক্ষণ করতে হবে
            </h2>
          </div>
          <p className="text-black">
		  শীত শেষে সবচেয়ে বড় সমস্যা হয়ে দাড়ায় কাপড়গুলো আবার এক বছরের জন্য গুছিয়ে রাখা। 
		  গুছিয়ে রাখার সঠিক নিয়ম চলুন জেনে নেই
          </p>
        </div>
      </div>
      </div>

      
    </div>
  );
};

export default Blog;