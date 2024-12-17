import React from 'react'
import Lottie from 'react-lottie-player'
import LottieOne from '../../src/lottie/infography (1).json'
import LottieTwo from '../../src/lottie/mobile.json'

const ApiLottie = () => {
    return (
        <div className='flex flex-col justify-center items-center mx-auto w-full api-section'>
            <div className='w-full mx-auto max-w-[1220px] flex flex-col text-center items-center justify-center relative'>
                <Lottie className='w-full max-lg:hidden lg:block' loop animationData={LottieOne} play style={{ height: 640, }}/>
                <Lottie className='w-full max-w-xl max-lg:block lg:hidden' loop animationData={LottieTwo} play />
            </div>
        </div>
    )
}

export default ApiLottie