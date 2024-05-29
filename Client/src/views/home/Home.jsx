import React from 'react'

function Home() {

  let runningBattle = [
    {
      profile: "https://avatar.iran.liara.run/public/11",
      name: "AUjdYh",
      entry_fee: 500,
      price: 1000
    }
  ]

  return (
    <>
    <div className='xl:grid xl:grid-cols-2 p-5 gap-2'>

      <div>

        <div className=' flex  justify-between py-5 bg-rose-50 rounded-2xl font-bold text-gray-700 px-10'>
          <p> Open Battles</p>
          <picture>
          <source
            srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f911/512.webp"
            type="image/webp"
          />
          <img
            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f911/512.gif"
            alt="🤑"
            width={28}
            height={28}
          />
        </picture>

        </div>

        <div className='flex justify-around items-center border rounded-xl py-4 mt-2'>
          <div className=' flex justify-around items-center gap-2'>
            <img className='size-12' src="https://avatar.iran.liara.run/public/12" alt="" />
            <p>mqoqVv</p>
          </div>
          <div className='text-center'>
            <img className='size-10' src="https://static.vecteezy.com/system/resources/previews/022/949/509/non_2x/vs-versus-letters-logo-icon-isolated-on-white-background-vs-versus-symbol-for-confrontation-or-opposition-design-concept-vector.jpg" alt="" />
            <p>500</p>
          </div>
          <div className='text-center flex justify-center items-center'>            
            <button className='text-center py-2 px-5 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold rounded-xl'>
              Play
            </button>
          </div>
        </div>

        <div className='flex justify-around items-center border rounded-xl py-4 mt-2'>
          <div className=' flex justify-around items-center gap-2'>
            <img className='size-12' src="https://avatar.iran.liara.run/public/12" alt="" />
            <p>mqoqVv</p>
          </div>
          <div className='text-center'>
            <img className='size-10' src="https://static.vecteezy.com/system/resources/previews/022/949/509/non_2x/vs-versus-letters-logo-icon-isolated-on-white-background-vs-versus-symbol-for-confrontation-or-opposition-design-concept-vector.jpg" alt="" />
            <p>500</p>
          </div>
          <div className='text-center flex justify-center items-center'>            
            <button className='text-center py-2 px-5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl'>
              Start
            </button>
          </div>
        </div>

        <div className='flex justify-around items-center border rounded-xl py-4 mt-2'>
          <div className=' flex justify-around items-center gap-2'>
            <img className='size-12' src="https://avatar.iran.liara.run/public/12" alt="" />
            <p>mqoqVv</p>
          </div>
          <div className='text-center'>
            <img className='size-10' src="https://static.vecteezy.com/system/resources/previews/022/949/509/non_2x/vs-versus-letters-logo-icon-isolated-on-white-background-vs-versus-symbol-for-confrontation-or-opposition-design-concept-vector.jpg" alt="" />
            <p>500</p>
          </div>
          <div className='text-center flex justify-center items-center'>            
            <button className='text-center py-2 px-5 bg-rose-600 hover:bg-rose-700 text-white font-semibold rounded-xl'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>

            </button>
          </div>
        </div>

      </div>

      <div>
        <div className='flex  justify-between py-5 bg-rose-50 rounded-2xl font-bold text-gray-700 px-10 mt-5 xl:mt-0'>
          <p>Running Battles </p>
          <picture>
          <source
            srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f3b2/512.webp"
            type="image/webp"
          />
          <img
            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f3b2/512.gif"
            alt="🎲"
            width={28}
            height={28}
          />
        </picture>


        </div>

        <div className='flex justify-around items-center border rounded-xl py-4 mt-2'>
          <div className=' flex justify-around items-center gap-2'>
            <img className='size-12' src="https://avatar.iran.liara.run/public/12" alt="" />
            <p>mqoqVv</p>
          </div>
          <div className='text-center'>
            <img className='size-10' src="https://static.vecteezy.com/system/resources/previews/022/949/509/non_2x/vs-versus-letters-logo-icon-isolated-on-white-background-vs-versus-symbol-for-confrontation-or-opposition-design-concept-vector.jpg" alt="" />
            <p>1000</p>
          </div>
          <div className=' flex justify-around items-center gap-2'>
            <p>mqoqVv</p>
            <img className='size-12' src="https://avatar.iran.liara.run/public/11" alt="" />           
          </div>

        </div>

      </div>
    

    </div>
    </>
  )
}

export default Home