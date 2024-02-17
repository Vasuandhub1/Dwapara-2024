import React from 'react'

function ScheduleCard({avatar , goal , promise , available , learningType}) {
  return (
    <div className='p-4 flex justify-center items-center'>
      <div class="flex  container font-serif lg:w-[30rem] sm:w-[18rem] rounded-xl bg-[#C4DEFD]">
  <div class="flex-none w-33 h-20  relative">
    <img src={avatar} className='object-cover h-5 flex justify-center items-center m-4'  alt="" class=" w-full absolute top-4 right-6  h-full object-cover rounded-lg"  loading="lazy" />
  </div>
  <form class="flex-auto p-6">
    <div class="flex items-center flex-col">
      <h1 class="w-full  mb-3 text-2xl text-center leading-none text-slate-900">
          {goal}
      </h1>
     <div className='flex justify-center items-center gap-x-3.5 '>
     <div class=" text-lg font-medium text-slate-500">
        {promise+" Months"}
      </div>
      <div class=" text-lg font-medium text-slate-500">
        {learningType}
      </div>
      <div class="text-xs leading-6 font-medium uppercase text-slate-500">
       {available + " hours"}
      </div>
     </div>
    </div>
    {/* <div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
      <div class="space-x-1 flex text-sm font-medium">
        <label>
          <input class="sr-only peer" name="size" type="radio" value="xs" checked />
          <div class="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
            XS
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="s" />
          <div class="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
            S
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="m" />
          <div class="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
            M
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="l" />
          <div class="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
            L
          </div>
        </label>
        <label>
          <input class="sr-only peer" name="size" type="radio" value="xl" />
          <div class="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
            XL
          </div>
        </label>
      </div>
    </div>
    <div class="flex space-x-4 mb-5 text-sm font-medium">
      <div class="flex-auto flex space-x-4 pr-4">
        <button class="flex-none w-1/2 h-12 uppercase font-medium tracking-wider bg-slate-900 text-white" type="submit">
          Buy now
        </button>
        <button class="flex-none w-1/2 h-12 uppercase font-medium tracking-wider border border-slate-200 text-slate-900" type="button">
          Add to bag
        </button>
      </div>
      <button class="flex-none flex items-center justify-center w-12 h-12 text-slate-300 border border-slate-200" type="button" aria-label="Like">
        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      </button>
    </div> */}
    {/* <p class="text-sm text-slate-500">
      Free shipping on all continental US orders.
    </p> */}
  </form>
</div>
    </div>
  )
}

export default ScheduleCard
