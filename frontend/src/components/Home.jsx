function Home() {
    return (
        <div className='flex px-14 lg:px-36 lg:flex-row flex-col lg:justify-between justify-center items-center my-28'>
            <div className='lg:flex-1 flex-1 flex flex-col justify-center gap-8'>
                <h1 className='text-7xl font-bold opacity-90'>Awesome themes & plugins for WordPress</h1>
                <p className='text-2xl font-semibold opacity-70'>Easily build a beautiful WordPress website with our premium themes and plugins.</p>
                <div className='flex gap-5'>
                    <button className='py-4 px-9 rounded-md text-white bg-indigo-600 font-semibold'>Explore our products</button>
                    <button className='py-4 px-9 rounded-md text-indigo-600 font-semibold'>Why choose us?</button>
                </div>
            </div>
            <div className='lg:flex-1'>
                <img src="https://websitedemos.net/digital-download-store-02/wp-content/uploads/sites/1068/2022/04/digital-download-store-hero-image.png" alt="" />
            </div>
        </div>
    )
}


export default Home;