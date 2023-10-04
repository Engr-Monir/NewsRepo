import React from 'react';
import Marquee from "react-fast-marquee";
const BrackingNews = () => {
    return (
        <div className='flex p-2 border bg-slate-500 justify-center'>
            <button className='btn btn-secondary'>BREAKING NEWS </button>
            
 <Marquee pauseOnHover={true} speed={100}>
<p className='ml-32'>খালেদার বিদেশে চিকিৎসা আইনের ক্ষমতাটি রাজনৈতিক বিবেচনায় ব্যবহার করছে না সরকার: কায়সার কামাল........   কার্টুনিস্ট মোরশেদের আহ্বানে সাড়া দিলেন নানা বয়সী নারী–পুরুষ, দুই দিনে খাল পরিষ্কার......  নোবেল পাওয়ার খবরের ফোন পেয়ে অধ্যাপক বললেন, ‘আমি ক্লাস নিচ্ছি’...........বগুড়ায় ডিবি হেফাজতে মৃত্যু হত্যাকাণ্ড ধামাচাপা দিতে লাশ নিয়েও লুকোচুরির অভিযোগ.............রাজ কী কষ্ট করেছে, তা আমি দেখেছি, রাজও দেখেছে আমি কী কষ্ট করেছি: বুবলী..........
</p>
 </Marquee>

       
        </div>
    );
};

export default BrackingNews;