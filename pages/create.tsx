import Link from 'next/link'
import { useState } from 'react';
import Post from '../components/Post';

export default function Create() {

  return (
      <div className="bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700">
          <div className='flex justify-around '>
              <div className='w-[95%] h-[95vh] mt-10 bg-gray-200 rounded-2xl mb-10'>
              <div className='flex flex-row mt-5'>
                  <p className='mt-5 ml-14 text-4xl font-bold text-primary-500'>Create</p>
                  <img src='icons/finity-plus.png' className='w-12 mt-4 ml-1 mr-4'></img>
              </div>
              <div className='flex justify-around divide-x-2 divide-black'>
                  <div className="flex flex-col w-[100%]">
                      <div className='w-[100%] ml-20 mt-14 font-extrabold ' >
                      <p>Images</p>
                        <div className='w-[60%] h-[5vh]  mt-4 bg-white  rounded-md mb-10'>
                            <form >
                                <input
                                    className="px-2 w-full rounded pt-2"
                                    type="text" placeholder={"Upload Files"} 
                                    
                                />
                            </form>
                      </div>
                  </div>
                  <div className='w-[100%] ml-20 mt-8 font-extrabold ' >
                      <p>Community Name</p>
                          <div className='w-[60%] h-[5vh]  mt-4 bg-white  rounded-md mb-10'>
                              <form >
                                <input
                                    className="px-2 w-full rounded pt-2"
                                    type="text" placeholder={"Name"} 
                                    
                                />
                            </form>
                      </div>
                  </div>
                  <div className='w-[100%] ml-20 mt-8 font-extrabold ' >
                      <p>Community Logo</p>
                          <div className='w-[60%] h-[5vh]  mt-4 bg-white  rounded-md mb-10'>
                              <form >
                                <input
                                    className="px-2 w-full rounded pt-2"
                                    type="text" placeholder={"Upload File"} 
                                />
                            </form>
                        </div>
                        <button className='mr-80 bg-primary-600 text-white w-20 h-10 rounded-xl mt-8 hover:bg-black'>Create</button>
                    </div>
                          
                  </div>
                  
                      <div className="flex flex-col w-[100%]">
                          <div className='w-[100%] ml-20 mt-14 font-extrabold ' >
                      <p>Contract Address</p>
                        <div className='w-[60%] h-[5vh]  mt-4 bg-white  rounded-md mb-10'>
                            <form >
                                <input
                                    className="px-2 w-full rounded pt-2"
                                    type="text" placeholder={"Address"} 
                                    
                                />
                            </form>
                      </div>
                  </div>
                  <div className='w-[100%] ml-20 mb-8 text-sm font-extrabold' >
                       <span className='text-error-500'>Note:</span> <span className=''>only the creator of the contract address can create <br/> the community</span>
                          
                  </div>
                  <div className='w-[100%] ml-20 mt-28 ' >
                      <p className='font-extrabold'>Visibility</p>
                          <div className='w-[60%] h-[5vh]  mt-4 bg-white  rounded-md mb-10'>
                              <form >
                                <input
                                    className="px-2 w-full rounded pt-2"
                                    type="text" placeholder={"Upload File"} 
                                />
                            </form>
                        </div>
                        <button className='mr-80 bg-primary-600 text-white w-20 h-10 rounded-xl mt-8 hover:bg-black'>Create</button>
                  </div>
                  </div>
                  
                  
              </div>
              
            </div>
          </div>
          </div>
  );
}


