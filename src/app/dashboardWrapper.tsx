import React from 'react'


const dashboardWrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='flex min-h-screen w-full bg-gray-50 text-gray-900'>
        {/*sidebar*/}
        sidbar
        <main className={'flex w-full flex-col bg-gray-50 dark:bgdark-bg md:pl-64'}>
            {/* navbar */}
            navbar
            {children}
        </main>
    </div>
    
    
  )
}

export default dashboardWrapper