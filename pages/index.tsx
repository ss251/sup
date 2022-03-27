import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 lg:h-screen h-[100%]">
      <div className="flex flex-col items-center">
        <img className='mt-40 w-60' src="/icons/Logo.png"></img>
        <h3 className="ml-60 font-medium text-md -mt-6 text-white">Communities for life</h3>
        <div className="flex flex-row mt-10"><button className="font-bold bg-white text-primary-500 border border-primary-500 pt-2 pb-2 pl-5 pr-5 ml-8 mr-8 rounded-md hover:bg-black hover:text-white"><Link href="/create"><a>Create</a></Link></button>
        <button className="font-bold bg-white text-primary-500 border border-primary-500 pt-2 pb-2 pl-5 pr-5 mr-8 rounded-md hover:bg-black hover:text-white"><Link href="/"><a>Join</a></Link></button>
        <button className="font-bold bg-white text-primary-500 border border-primary-500 pt-2 pb-2 pl-5 pr-5 mr-8 rounded-md hover:bg-black hover:text-white"><Link href="/explore"><a>Explore</a></Link></button></div>
      </div>
    </div>
  );
}
