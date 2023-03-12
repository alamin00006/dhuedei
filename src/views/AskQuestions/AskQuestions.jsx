import React from "react";

const AskQuestions = () => {
  return (
    <div className="my-10 text-black ">
      <div className="flex justify-center">
        <div className="flex items-center">
          <div class="line mr-3"></div>
          <h1 className="text-2xl text-black font-medium">
            FREQUENTLY ASKED QUESTION
          </h1>
          <div class="line ml-3"></div>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-5"
      >
        <div className="collapse-title text-xl font-medium ">
          কত দিনের মধ্যে কাপড় ফেরত দেন?
        </div>
        <div className="collapse-content">
          <p>
            {" "}
            আমরা সাধারণত ২৪ ঘণ্টার মধ্যে কাপড় ফেরত দিয়ে দেই। তবে আবহাওয়া এবং
            অন্য কোনো সমস্যার কারণে ৪৮-৯৬ ঘণ্টা পর্যন্ত সময় লাগতে পারে। যেকোনো
            প্রয়োজনে যোগাযোগ করুন +8801646516565 অথবা মেসেজ করুন আমাদের ফেসবুক
            পেজে।
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-2"
      >
        <div className="collapse-title text-xl font-medium">
          মেস থেকে কাপড় নেন না?
        </div>
        <div className="collapse-content">
          <p>
            {" "}
            জি সংগ্রহ করি। বিনোদপুর, কাজলা, অক্ট্রয় মোড়, তালাইমারি, মোন্নাফের
            মোড় এবং এর আশপাশের এলাকায় আমাদের পিক আপ পয়েন্ট থেকে আমরা কাপড় সংগ্রহ
            করে থাকি৷ যেকোনো প্রয়োজনে যোগাযোগ করুন +8801646516565 অথবা মেসেজ
            করুন আমাদের ফেসবুক পেজে।
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-2"
      >
        <div className="collapse-title text-xl font-medium">
          নারীদেরকে সার্ভিস দেন?
        </div>
        <div className="collapse-content">
          <p>
            {" "}
            জি। আমাদের সেবা সবার জন্য উপলব্ধ। যেকোনো প্রয়োজনে যোগাযোগ করুন
            +8801871954828 অথবা মেসেজ করুন আমাদের ফেসবুক পেজে।
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-2"
      >
        <div className="collapse-title text-xl font-medium">
          ময়লা কি পরিষ্কার হয়?
        </div>
        <div className="collapse-content">
          <p>
            {" "}
            আমরা সাধারণত ওয়াশিং মেশিনে কাপড় পরিষ্কার করি। এসময় আমরা উন্নত মানের
            লিকুইড ডিটারজেন্ট, জীবাণুনাশক, এবং কাপড়ের দুর্গন্ধ দুর করার জন্য
            বিভিন্ন ফ্লেভার ব্যবহার করে থাকি। তবে তারপরেও যদি কোনো দাগ না উঠে
            তাহলে সেটা হতে পারে কোনো কঠিন দাগ যা ড্রাই ওয়াশ করে উঠানো যেতে পারে।
            যেকোনো প্রয়োজনে যোগাযোগ করুন +8801646516565 অথবা মেসেজ করুন আমাদের
            ফেসবুক পেজে।
          </p>
        </div>
      </div>
    </div>
  );
};

export default AskQuestions;
