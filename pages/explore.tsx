import Link from 'next/link'

export default function Explore() {
  return (
    <div className="bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 md:h-screen sm:h-max lg:h-screen">
        <div className="flex flex-row justify-center flex-wrap">
            <div><Link href="/posts"><img src='nfts/cosmic-cats.png' className='w-20 mt-20 ml-40 mr-40 border-solid border-4 border-warning-600 rounded-full'></img></Link></div>
            <div><img src='nfts/grouchy-tiger.png' className='w-20 ml-40 mr-40 mt-20 border-solid border-4 border-warning-600 rounded-full'></img></div>
            <div><img src='nfts/undead-pastels.png' className='w-20 ml-40 mr-40 mt-20 border-solid border-4 border-warning-600 rounded-full'></img></div>
            <div><img src='nfts/doodles.png' className='w-20  mt-20 ml-40 mr-40 border-solid border-4 border-warning-600 rounded-full'></img></div>
            <div><img src='nfts/boredape.png' className='w-20  mt-20 ml-40 mr-40 border-solid border-4 border-warning-600 rounded-full'></img></div>
            <div><img src='nfts/cryptopunk.png' className='w-20  mt-20 ml-40 mr-40 border-solid border-4 border-warning-600 rounded-full'></img></div>
            <div><img src='nfts/lazylion.png' className='w-20  mt-20 ml-40 mr-40 border-solid border-4 border-warning-600 rounded-full'></img></div>
            <div><img src='nfts/axieinfinity.png' className='w-20 ml-40 mr-40 mt-20 border-solid border-4 border-warning-600 rounded-full'></img></div>
            <div><img src='nfts/decentraland.png' className='w-20 ml-40 mr-40 mt-20 border-solid border-4 border-warning-600 rounded-full'></img></div>
      </div>
    </div>
  );
}
