

const Post = (props) => {
    return (
        <div className='flex justify-around'>
            
            <div className='flex flex-col w-[50%] h-[25vh] mt-4 bg-white rounded-2xl mb-10'>
                <div className='flex flex-row'><img src='nfts/cosmic-cats.png' className='w-12 mt-4 ml-3 mr-4 border-solid border-4 border-warning-600 rounded-full'></img>
                  <span className='mt-7 -ml-2'>{props.user}</span>
              </div>
                <span className="ml-4 mt-4 text-2xl font-bold">{props.body}</span>
                <div className="flex flex-row mt-10 ml-5">
                    <img className="w-5 mr-2" src="/icons/finity-thumbsup.png"></img>
                    <img className="w-5 mr-2" src="/icons/finity-chats.png"></img>
                    <img className="w-5"src="/icons/finity-paperplanetilt.png"></img>
                </div>
        </div>
    </div>
    )  
}

export default Post