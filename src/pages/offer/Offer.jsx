import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Save from '../../assets/save.png'
import { FaCopy } from 'react-icons/fa6'

const OfferCard = ({ title, code, expiry }) => {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(code)
            .then(() => {
                setCopied(true)
                setTimeout(() => setCopied(false), 2000)
            })
            .catch((err) => console.log('Failed to copy', err))
    }

    return (
        <div className="w-full h-auto rounded-xl bg-zinc-200/30 dark:bg-zinc-800/20 p-8 flex items-center gap-x-3 shadow-md">
            <img src={Save} alt="Save image" className="w-52 aspect-[2/1] object-contain object-center" />
            <div className="flex flex-1 flex-col space-y-5">
                <h1 className="text-xl font-semibold text-neutral-800 dark:text-neutral-50">{title}</h1>
                <div className="flex items-center gap-x-5">
                    <div className="w-fit border border-dashed px-4 py-1 border-neutral-300 dark:border-neutral-800 bg-violet-500/10 dark:bg-violet-800/5 rounded-md p-3">
                        {copied ? <span className="text-green-600">Copied</span> : <span className="text-green-600">{code}</span>}
                    </div>
                    <button onClick={handleCopy} className="text-xl text-violet-600"><FaCopy /></button>
                </div>
                <p className="text-sm text-neutral-400 dark:text-neutral-600 font-normal">Valid until: <span className="text-sm font-medium">{expiry}</span></p>
            </div>
        </div>
    )
}

const Offer = () => {
    const offers = [
        { title: "Get 40% off on your first booking", code: "GTECH08", expiry: "21st June" },
        { title: "Get 50% off on your next purchase", code: "SAVE50", expiry: "30th June" }
    ]

    return (
        <div className='w-full lg:px-28 md:px-16 sm:px-7 px-4 mb-[8ch]'>
            <div className="w-full items-center flex justify-between">
                <h1 className="text-2xl font-medium mb-6">Special Offer</h1>
                <Link to={'/offer'} className='text-violet-600'>View All</Link>
            </div>

            <div className="grid grid-cols-2 gap-16">
                {offers.map((offer, index) => (
                    <OfferCard key={index} {...offer} />
                ))}
            </div>
        </div>
    )
}

export default Offer;
