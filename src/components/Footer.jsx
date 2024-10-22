import { Link } from 'react-router-dom'


function FooterLink() {
    return (
        <>
            <ul>
                <li>
                    <Link to='/themes' className='text-lg opacity-90'>Themes</Link>
                </li>
                <li>
                    <Link to='/plugins' className='text-lg opacity-90'>Plugins</Link>
                </li>
                <li>
                    <Link to='/about' className='text-lg opacity-90'>About</Link>
                </li>
                <li>
                    <Link to='/contact' className='text-lg opacity-90'>Contact</Link>
                </li>
            </ul>
        </>
    )
}





function Footer() {
    return (
        <>
            <div className='mt-16 flex lg:px-36 px-14 gap-12 items-center md:justify-between flex-col md:flex-row flex-wrap'>
                <div>
                    <h2 className='text-2xl font-semibold'>Comapny</h2>
                    <FooterLink />
                </div>
                <div>
                    <h2 className='text-2xl font-semibold'>Products</h2>
                    <FooterLink />
                </div>
                <div>
                    <h2 className='text-2xl font-semibold'>
                        Terms
                    </h2>
                    <FooterLink />
                </div>
                <div>
                    <h2 className='text-2xl font-semibold'>Support</h2>
                    <FooterLink />
                </div>
            </div>
            <hr className='my-16' />
            <div className='flex md:flex-row flex-col items-center gap-12 lg:px-36 px-14 justify-between'>
                <h1 className='text-3xl font-semibold'>WVANTAGE</h1>
                <p>© 2024 Digital Download Store. Powered by Digital Download Store.</p>
            </div>
        </>
    )
}


export default Footer;