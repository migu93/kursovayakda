import photo from './photo_blue.jpg';
function Header() {
    return (
        <header className='text-white items-center font-montserrat justify-center flex'>
            <div className="flex container">
                <div className="w-1/2 p-4 text-left">
                    <h1 className="text-2xl text-primary">Кооль Дмитрий</h1>
                    <h2 className='text-4xl'>Квалифицированный .NET разработчик</h2>
                </div>
            </div>
        </header>
    );
}
export default Header
