import Link from 'next/link'
import { useState } from 'react';
import Post from '../components/Post';

export default function Posts() {

    const [formInput, setFormInput] = useState("")

    const [buttonClick, setButtonClick] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setButtonClick(true)
    }
    
    const handleChange = (text) => {
        setButtonClick(false)
        setFormInput(text)
    }

  return (
      <div className="bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700">
          <div className='flex justify-around '><div className='w-[95%] mt-10 bg-gray-200 rounded-2xl mb-10'>
              <div className='flex flex-row'><img src='nfts/cosmic-cats.png' className='w-20 mt-4 ml-3 mr-4 border-solid border-4 border-warning-600 rounded-full'></img>
                  <span className='mt-10 -ml-1.5 text-xl font-bold'>Cosmic Cats Community</span>
              </div>
              <div className='flex justify-around'>
                  <div className='flex w-[50%] h-[9.5vh] mt-4 bg-white shadow-lg rounded-2xl mb-10'>
                     <div className="border w-[80%] rounded overflow-hidden mb-4 ml-4 mr-4 mt-4">
                        <form onSubmit={handleSubmit}>
                            <input
                                className="px-2 pb-4 w-full rounded pt-2"
                                type="text" placeholder={"Create post"} onChange={e => handleChange(e.target.value)} value={formInput} 
                                
                            />
                        </form>
      
                        </div>
                      <div className='flex mt-6'><img className='h-5 mr-6' src='/icons/finity-link.png'></img>
                          <img className='h-4 mt-0.5 mr-8' onClick={handleSubmit} src='/icons/finity-paper-plane-right.png'></img>
                          </div>
                  </div>
                  
              </div>
              {buttonClick && formInput !== null && <Post user={"0x02e1"} body={formInput}></Post>}
              <Post user={"cryptokitties"} body={"Excited for the next airdrop"}></Post>
              <Post user={"trickshot"} body={"To the moon"}></Post>
              <Post user={"loadingeth"} body={"blast off cats"}></Post>
            </div>
          </div>
          </div>
  );
}


