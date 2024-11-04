import React from 'react'

export const Hero = () => {
  return (
    <div class="relative flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8">
    <div class="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
        <div class="text-left">
            <h2 class="text-5xl leading-10 tracking-tight text-black sm:text-3xl sm:leading-none md:text-3xl">
                Lindungi Ternak Anda dengan Pintar!
            </h2>
            <h2
                class="text-4xl font-bold leading-10 tracking-tight text-black sm:text-3xl sm:leading-none md:text-3xl">
                Agromind AI
                <span class="font-bold text-black">to the Future</span>
            </h2>
            <p class="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Deteksi dini penyakit sapi anda dengan akurat dan cepat. Website kami membantu peternak mengenali gejala-gejala penyakit pada sapi, sehingga tindakan pencegahan dan pengobatan dapat dilakukan lebih awal. Kesehatan ternak, keuntungan melimpah.
            </p>
            <div class="mt-5 sm:flex md:mt-8">
                <div class="rounded-md shadow"><a href=""
                        class="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-black transition duration-150 ease-in-out bg-yellow-500 border border-transparent rounded-3xl hover:bg-yellow-600 focus:outline-none focus:shadow-outline-blue md:py-4 md:text-lg md:px-10">
                        Getting started !
                    </a></div>
                </div>
            </div>
        </div>
        <div class="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
            <div class="relative w-full p-3 rounded  md:p-8">
                <div class="rounded-lg text-black w-full">
                    <img src="https://picsum.photos/400/300" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero