export default function Home(){
    return <>
    <div className='lg:px-36 px-14 flex lg:flex-row flex-col lg:justify-between justify-center items-center my-28'>
        <div className='lg:flex-1 flex-1 flex flex-col justify-center items-center text-center gap-8'>
            <h1 className='text-7xl font-semibold opacity-90'>Awesome<br/> themes & plugins<br/> for WordPress</h1>
            <p className='text-2xl opacity-70 font-semibold'>Easily build a beautiful WordPress website with our premium themes and plugins.</p>
            <div className='flex gap-5'>
                <button className='py-4 px-9 rounded-md text-lg bg-indigo-600 text-white font-semibold'>Explore our products</button>
                <button className='py-4 px-9 rounded-md text-lg text-indigo-600 font-semibold'>Why choose us?</button>
            </div>
        </div>
        <div className='lg:flex-1'>
            <img src="https://websitedemos.net/digital-download-store-02/wp-content/uploads/sites/1068/2022/04/digital-download-store-hero-image.png" alt="" />
        </div>
    </div>
    </>
}