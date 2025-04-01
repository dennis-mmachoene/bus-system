import React from 'react'

const Checkout = () => {
    return (
        <div className='w-full lg:px-28 md:px-16 sm:px-7 px-4 mt-[13ch] mb-[8ch] space-y-10'>
            <div className="grid grid-cols-5 gap-16 items-start">
                <div className="col-span-3 space-y-7 pr-20">
                    <h2 className="text-xl text-neutral-800 dark:text-neutral-100 font-medium">
                        Passenger Information
                    </h2>

                    <form className="space-y-6">
                        <div>
                            <label htmlFor="fullname" className="block mb-2 font-semibold">Full Name</label>
                            <input
                                type='text'
                                id='fullname'
                                name='fullname'
                                placeholder='e.g. John Doe'
                                className='w-full bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 rounded-md focus:outline-none'
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 font-semibold">Emaik Address</label>
                            <input
                                type='text'
                                id='email'
                                name='email'

                                placeholder='e.g. johndoe@example.com'
                                className='w-full bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 rounded-md focus:outline-none'
                            />
                            <small className='block mt-1 text-xs text-neutral-500 dark:text-neutral-600 font-normal'>
                                You'll get your tickets via email
                            </small>
                        </div>
                        <div>
                            <label htmlFor="phone" className="block mb-2 font-semibold">Phone Number</label>
                            <input
                                type='number'
                                id='phone'
                                name='phone'

                                placeholder='e.g. +1234567890'
                                className='w-full bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 rounded-md focus:outline-none'
                            />
                        </div>
                    </form>
                </div>
                <div className="col-span-2 space-y-8">
                    <div className="bg-neutral-200/50 dark:bg-neutral-900/70 rounded-md py-5 px-7">
                    <h2 className="text-xl text-center text-neutral-800 dark:text-neutral-100 font-medium border-neutral-200 dark:border-neutral-800/40 pb-3 mb-4">
                       Your booking status
                    </h2>
                    <div className="space-y-8 pb-3">
                        <div className="space-y-4"></div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
