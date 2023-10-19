import React from 'react'

const Marquee = () => {
  return (
    <>
        <hr className="h-px  bg-gray-200 border-1 dark:bg-gray-700"/>
            <div className='overflow-x-hidden whitespace-nowrap'>
                <div className="py-6 animate-marquee inline-block">
                    <span className="text-4xl mx-4">A man can’t have enough basement swag   —  A man can’t have enough basement swag   —</span>
                    <span className="text-4xl mx-4">A man can’t have enough basement swag   —  A man can’t have enough basement swag   —</span>
                </div>
                <div className="py-6 animate-marquee inline-block">
                    <span className="text-4xl mx-4">A man can’t have enough basement swag   —  A man can’t have enough basement swag   —</span>
                    <span className="text-4xl mx-4">A man can’t have enough basement swag   —  A man can’t have enough basement swag   —</span>
                </div>
            </div>
        <hr className="h-px  bg-gray-200 border-1 dark:bg-gray-700"/>
    </>
  )
}

export default Marquee