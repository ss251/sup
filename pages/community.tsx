import Link from 'next/link'

export default function Community() {
  return (
    <div className="bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 md:h-screen sm:h-max lg:h-screen">
        <div className="flex flex-col items-center flex-wrap">
              <div><Link href="/posts"><img src='nfts/cosmic-cats.png' className='w-20 mt-20 border-solid border-4 border-warning-600 rounded-full'></img></Link></div>
              <p className='text-bold text-lg text-white mt-4'>Cosmic Cats Community</p>
              <button className=' bg-information-400 text-white w-48 h-12 rounded-xl mt-4 hover:bg-black'><a href="https://opensea.io/collection/cosmiccatsofficial">Buy on OpenSea</a></button>
      </div>
    </div>
  );
}