function FooterLink() {
    return <>
        <ul className=''>
            <li><a href="" className='hover:text-indigo-600 text-lg opacity-90'>Themes</a></li>
            <li><a href="" className='hover:text-indigo-600 text-lg opacity-90'>Plugins</a></li>
            <li><a href="" className='hover:text-indigo-600 text-lg opacity-90'>About</a></li>
            <li><a href="" className='hover:text-indigo-600 text-lg opacity-90'>Contact</a></li>
        </ul>
        </>
}


export default function Footer() {
    return <div>
        <div className='flex md:flex-row flex-col lg:px-36 px-14 md:justify-between items-center gap-12 flex-wrap'>
            <div className='flex flex-col gap-12'>
                <h2 className='text-2xl font-semibold'>Company</h2>
                <FooterLink/>
            </div>
            <div className='flex flex-col gap-12'>
                <h2 className='text-2xl font-semibold'>Products</h2>
                <FooterLink/>
            </div>
            <div className='flex flex-col gap-12'>
                <h2 className='text-2xl font-semibold'>Terms</h2>
                <FooterLink/>
            </div>
            <div className='flex flex-col gap-12'>
                <h2 className='text-2xl font-semibold'>Support</h2>
                <FooterLink/>
            </div>
        </div>
        <hr className='my-16'/>
        <div className='flex md:flex-row flex-col items-center gap-12 lg:px-36 px-14 justify-between'>
            <h1 className='text-3xl font-semibold'>WVANTAGE</h1>
            <p>© 2024 Digital Download Store. Powered by Digital Download Store.</p>
        </div>
    </div>
}