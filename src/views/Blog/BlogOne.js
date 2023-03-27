import React from 'react';
import { Link } from 'react-router-dom';

const BlogOne = () => {
    return (
        <div>
            
        <div className="white:bg-gray-800 dark:text-gray-100">
	        <div className="container max-w-5xl px-10 py-6 mx-auto rounded-lg shadow-sm white:bg-gray-900">
		<div className="mt-3">
			<Link rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline text-green-600">কাপড়ের দুর্গন্ধ দূর করার সহজ উপায়</Link>

			<p className="mt-2 text-neutral-800">

            প্রতিদিনের ব্যবহারে কাপড় হয়ে যায় দুর্গন্ধ । 
            কিন্তু প্রতিদিন তো আর কাপড় ধোয়ার মত সময় আমাদের থাকে না । 
            দুর্গন্ধ ও ময়লা দূর করার কোন উপায় আছে ? চলুন জেনে নেই -
            </p>

            <Link rel="noopener noreferrer"  className="text-sm font-semibold hover:underline text-orange-500">যা করতে হবে</Link>

            <p className="mt-2 text-neutral-800">

            বাইরে থেকে বাসায় এসে প্রথমেই ঘামে ভেজা কাপড়টি রোদে  শুকিয়ে নিন।  রোদ না থাকলে ফ্যানের নিচে অবশ্যই শুকিয়ে নিবেন
            <span>
            এবার একটি প্লাস্টিকের বোল বা বালতিতে কাপড়টি রাখুন এবং সাথে দুই-এক

            </span>
            প্যাকেট টি-ব্যাগ / চাইলে টি-ব্যাগ ধুয়ে শুকিয়ে এখানে ব্যবহার করতে পারেন।

            </p>

            <p className="mt-2 text-neutral-800">

            সাথে নিতে পারেন খানিকটা বেকিং সোডা 
            চাইলে বেকিং সোডার পাত্রে কয়েক ফোঁটা এসেনশিয়াল অয়েল দিয়ে নিতে পারেন।
            <p>
            এতে কাপড়ের সুন্দর মিষ্টি সুগন্ধ হবে, কিন্তু পরে আবার কাপড় ঝেড়ে বেকিং সোডা পরিষ্কার করতে হবে।
            </p>

            </p>

            <p className="mt-2 text-neutral-800">

            এবার টি ব্যাগ ও বেকিং সোডা দিয়ে বোল বা বালতির  মুখ বন্ধ করে রেখে দিন।
            আর সকালে ম্যাজিক দেখুন , কাপড় থেকে গন্ধ একেবারে গায়েব!
            আপনি চাইলে পোশাকটি আরও বেশ কয়েকবার পরতে পারবেন।

            </p>
		</div>
		
	</div>
       </div>



        </div>
    );
};

export default BlogOne;