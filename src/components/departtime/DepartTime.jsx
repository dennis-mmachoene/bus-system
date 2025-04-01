import React, { useState } from 'react'

const DepartTime = () => {
    const [departBus, setDepartBus] = useState('')

    const handleDepartBusChange = (e) => {
        setDepartBus(e.target.value);
    }
  return (
    <div className='w-full space-y-4'>
    {
        !departBus?
            (
                <div className='w-full grid-cols-2 gap-10'>
                    <div>
                        <label htmlFor="departbus" className="block mb-2 font-semibold">Depart Time</label>
                        <select
                            name='departbus'
                            id='departbus'
                            value={departBus}
                            onChange={handleDepartBusChange}
                            aria-label="Select Departure Location"
                            className='w-full appearance-none bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-11 rounded-md focus:outline-none'
                        >
                            <option value="">Select Departure Time</option>
                            <option value="location1">Location 1</option>
                            <option value="location2">Location 2</option>
                            <option value="location3">Location 3</option>
                        </select>
                    </div>
                </div>
            ) : (
                <div className="space-y-5">
                    <div className="w-full flex items-center gap-x-3">
                        <div className="w-fit text-base font-semibold">
                            Bus Depart at:- <span className="ml-1.5 font-medium">{departBus}</span>
                        </div>
                        
                        
                    </div>
                </div>
            )
    }
</div>
  )
}

export default DepartTime
