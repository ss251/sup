import Link from 'next/link'

export default function Posts() {
  return (
      <div className="bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700">
          <div className='flex justify-around '><div className='w-[95%] mt-10 bg-gray-200 rounded-2xl mb-10'>
              <div className='flex flex-row'><img src='nfts/cosmic-cats.png' className='w-20 mt-4 ml-3 mr-4 border-solid border-4 border-warning-600 rounded-full'></img>
                  <span className='mt-10'>Cosmic Cats Community</span>
              </div>
              <div className='flex justify-around'>
                  <div className='flex w-[50%] h-[9.5vh] mt-4 bg-white shadow-lg rounded-2xl mb-10'>
                     <Input label="Create Post" />
                      <div className='flex mt-6'><img className='h-5 mr-6' src='/icons/finity-link.png'></img>
                          <img className='h-4 mt-0.5 mr-8' src='/icons/finity-paper-plane-right.png'></img></div>
                  </div>
              </div>
              <div className='flex justify-around'>
                  <div className='w-[50%] h-[40vh] mt-4 bg-white rounded-2xl mb-10'></div>
              </div>
              <div className='flex justify-around'>
                  <div className='w-[50%] h-[40vh] mt-4 bg-white rounded-2xl mb-20'></div>
              </div>
            </div>
          </div>
          </div>
  );
}

function Input({ label, ...props }) {
  return (
    <div className="border w-[80%] rounded overflow-hidden mb-4 ml-4 mr-4 mt-4">
      <input
        className="px-2 pb-4 w-full rounded pt-2 focus:border focus:border-primary-300"
        type="text" placeholder={label}
        {...props}
      />
    </div>
  );
}
