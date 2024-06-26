"use client";
import React from 'react';
import Link from 'next/link';
import Footer from '../components/Footer';
import Navbarcom from '../components/Nav';
import Image from 'next/image'
import { data } from '../data/data.js';

const OurTeachings = () => {
    return (
        <>
        <div className='pb-20'>
            <Navbarcom />
        </div>
            <div>
                <p className='text-center font-bold md:py-1 p text-xl'>Our Teachings</p>
                <div className='px-10 md:w-1/2 mx-auto mt-8'>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
                        {data.map((item, i) => (
                            <div key={i} className={`cursor-pointer bg-[${item.color}] h-[64vh] rounded mx-auto`}>
                                <Link href={`/teach/${item.id}`}>
                                    <Image
                                    className='h-40 mx-auto rounded w-40 mb-2 mt-5'
                                    src={item.imgUrl}
                                    width={200}
                                    height={200}
                                    />
                                    <div className='md:px-11 text-white px-6 w-full'>
                                        <p className='md:px-4 text-[12px]'>{item.textCard}</p>
                                        <p className='md:px-4 text-[12px]'>{item.description}</p>
                                        
                                        <Link href='' className='text-[11px] md:px-4 mt-14 underline'>
                                        See more
                                        </Link>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='mt-14'>
                <Footer />
            </div>
        </>
    );
};

export default OurTeachings;
