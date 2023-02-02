import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Main() {
    return (
        <div className="container mx-auto px-4 text-white mt-10 mb-10">
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 p-4 text-center">
                    <p className="text-3xl text-primary mb-10 text-left font-montserrat ml-10">О себе</p>
                    <p className="text-left">Обо мне: Я высококвалифицированный программист с опытом работы в технологиях PHP, JavaScript и .NET. Я занимаюсь разработкой высококачественных проектов, используя современные методы и инструменты. Моя цель – сделать ваши идеи реальностью за счет моего профессионализма и усердия.</p>
                </div>
                <div className="w-full md:w-1/2 p-4">
                    <div className={'flex'}>
                        <svg className="h-20 w-20 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                        </svg>
                        <div>
                            <p style={{fontSize: '25px'}} className="text-lg font-montserrat items-center mt-5 ml-5">25</p>
                            <p className={'ml-3 text-gray-500'}>Рекомендаций</p>
                        </div>

                        <svg className="h-20 w-20 ml-20 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                        <div>
                            <p style={{fontSize: '25px'}} className="text-lg font-montserrat items-center mt-5 ml-5">3423</p>
                            <p className={'ml-3 text-gray-500'}>Готовых проектов</p>
                        </div>
                    </div>
                    <div className={'text-left my-4'}>
                        <p>Я работаю в области .NET-разработки уже несколько лет, и у меня есть множество успешных проектов в своем портфолио. Посмотреть открытые проекты можно в моём Github.</p>
                        <button className="my-4 bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            <FontAwesomeIcon icon={faGithub} className="mr-2" />
                            <a href="https://github.com/Pampers01">GitHub</a>
                        </button>
                    </div>
                </div>
            </div>
            <hr className="w-full border-1 border-l-blue-900 my-5"></hr>
        </div>
    );
}
export default Main
