import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import Bus1 from '../../assets/bus1.png'
import Bus2 from '../../assets/bus.png'
import Bus3 from '../../assets/bus5.png'
import Bus4 from '../../assets/bus4.png'
import Bus5 from '../../assets/bus7.png'
import Bus6 from '../../assets/bus6.png'

const buses = [
    { id: 1, image: Bus1, type: 'Tourist Bus', capacity: 60 },
    { id: 2, image: Bus2, type: 'Private Bus', capacity: 45 },
    { id: 3, image: Bus3, type: 'Luxury Bus', capacity: 30 },
    { id: 4, image: Bus4, type: 'Deluxe Bus', capacity: 40 },
    { id: 5, image: Bus5, type: 'Government Bus', capacity: 50 },
    { id: 6, image: Bus6, type: 'School Bus', capacity: 35 }
]

const Bus = () => {
    return (
        <div className='space-y-14 w-full lg:px-28 md:px-16 sm:px-7 px-4 mb-[8ch] mt-[13ch]'>
            <div className="w-full grid grid-cols-6 gap-14 bg-neutral-200/60 dark:bg-neutral-900/40 rounded-md px-6 py-5 items-center justify-between">
                <div className="flex items-center gap-x-2 col-span-2">
                    <label htmlFor="busSearch" className="sr-only">Search Buses</label>
                    <input
                        type='text'
                        id='busSearch'
                        name='busSearch'
                        placeholder='Search buses...'
                        className='w-full bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 rounded-md focus:outline-none'
                    />
                    <button className="bg-violet-600 h-11 px-4 rounded-md text-base text-neutral-50 font-normal">
                        <FaSearch />
                    </button>
                </div>
                <div className="col-span-2"></div>
                <div className="col-span-2">
                    <label htmlFor="busType" className="sr-only">Filter by Type</label>
                    <select
                        id="busType"
                        className='w-full appearance-none bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 rounded-md focus:outline-none'
                    >
                        <option value="">Select Bus Type</option>
                        {buses.map(bus => (
                            <option key={bus.id} value={bus.type.toLowerCase().replace(' ', '')}>{bus.type}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {buses.map(bus => (
                    <Link key={bus.id} to={`/bus/bus-details`} className='w-full bg-neutral-200/60 block dark:bg-neutral-900/40 rounded-xl p-4 hover:shadow-lg'>
                        <img src={bus.image} alt={bus.type} className="w-full aspect-video object-contain object-center" />
                        <div className="px-3 py-4 space-y-2">
                            <div className="flex items-center justify-between">
                                <h1 className="text-xl font-semibold text-neutral-800 dark:text-neutral-50">{bus.type}</h1>
                                <p className="text-sm font-normal text-neutral-800 dark:text-neutral-50">{bus.capacity} passengers</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Bus;
