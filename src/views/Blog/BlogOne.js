import React from 'react';
import { Link } from 'react-router-dom';

const BlogOne = () => {
    return (
        <div>
            
        <div className="white:bg-gray-800 dark:text-gray-100">
	        <div className="container max-w-5xl px-10 py-6 mx-auto rounded-lg shadow-sm white:bg-gray-900">
		<div className="mt-3">
			<Link rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline text-gray-600">কাপড়ের দুর্গন্ধ দূর করার সহজ উপায়</Link>

			<p className="mt-2 text-gray-500">

            নিত্যদিনের ব্যবহারের কারণে কাপড়ে দুর্গন্ধ তো হবেই। কিন্তু প্রতিদিনই কাপড় ধোয়ার মতো সময় আমাদের থাকে না।
            যদি কাপড় ধোয়া ছাড়াই দুর্গন্ধ দূর করা যায়? চমকে যাওয়ার কিছু নেই, এর জন্য আছে সহজ উপায়। চলুন জেনে নিই-
            </p>

            <Link rel="noopener noreferrer"  className="text-sm font-semibold hover:underline text-gray-600">যা করতে হবে</Link>

            <p className="mt-2 text-gray-500">

            বাইরে থেকে এসে প্রথমেই ঘামে ভেজা কাপড়টিকে শুকিয়ে নিন। সবচাইতে ভালো হয় রোদে শুকিয়ে নিলে। রাতের বেলা হলে ফ্যানের নিচে শুকিয়ে নিন।
            <span>
            এবার একটি প্লাস্টিক বা কাগজের বক্সে কাপড়টি রাখুন। চাইলে ভাঁজ করেই রাখতে পারেন।
            </span>
            এই বক্সের মাঝে রাখুন ২/১ প্যাকেট টি-ব্যাগ। চাইলে ব্যবহার করা টি-ব্যাগ ধুয়ে শুকিয়ে এখানে ব্যবহার করতে পারেন।

            </p>

            <p className="mt-2 text-gray-500">

            একটি ছোট বাটিতে খানিকটা বেকিং সোডা নিন, সেটাও এই বাক্সে রেখে দিন। 
            চাইলে বেকিং সোডার পাত্রে কয়েক ফোঁটা এসেনশিয়াল অয়েল দিয়ে নিতে পারেন।
            <p>
            এতে কাপড়ে মিষ্টি গন্ধ হবে। আপনি চাইলে বেকিং সোডা কাপড়ে ছিটিয়ে দিতে পারেন।
            এতে খুব ভালো কাজ হয়, কিন্তু পরে আবার কাপড় ঝেড়ে বেকিং সোডা পরিষ্কার করতে হবে।
            </p>

            </p>

            <p className="mt-2 text-gray-500">

            এবার টি ব্যাগ ও বেকিং সোডা দিয়ে বক্সের মুখ বন্ধ করে রেখে দিন।
            আর সকালে উঠে দেখুন ম্যাজিক, কাপড় থেকে গন্ধ একেবারে গায়েব!
            আপনি চাইলে পোশাকটি আরও বেশ কয়েকবার পরতে পারবেন।

            </p>
		</div>
		
	</div>
       </div>



        </div>
    );
};

export default BlogOne;