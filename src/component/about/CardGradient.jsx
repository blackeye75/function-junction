import React from 'react'

const CardGradient = ({children}) => {
    return (
        <div className='w-full h-full' > <div className="relative">
            <div
                className="absolute -inset-2 rounded-lg bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-pink-600 via-indigo-600 to-fuchsia-600 opacity-50 blur-2xl"
            ></div>
            <div className="relative flex w-full h-64 items-center justify-center border border-zinc-700 rounded-lg bg-zinc-900 text-slate-300">
                {children}
            </div>
        </div></div>
    )
}

export default CardGradient