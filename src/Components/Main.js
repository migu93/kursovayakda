import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { DiReact } from 'react-icons/di';
import { FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { DiJavascript1 } from 'react-icons/di'
import { DiNodejsSmall } from 'react-icons/di'
import photo from "./photo_blue.jpg";
function Main() {
    return (
        <div className="container mx-auto px-4 text-white mt-10 mb-10">
            <p className="text-3xl font-montserrat">О себе</p>
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 p-4 text-center">
                    <div className='flex justify-center'>
                        <img src={photo} alt="" className='w-1/2 m-3 drop-shadow-2xl'/>
                    </div>
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
                        <p className="text-left my-4">Я высококвалифицированный программист с опытом работы в технологиях PHP, JavaScript и .NET. Я занимаюсь разработкой высококачественных проектов, используя современные методы и инструменты. Моя цель – сделать ваши идеи реальностью за счет моего профессионализма и усердия.</p>
                        <p>Я работаю в области .NET-разработки уже несколько лет, и у меня есть множество успешных проектов в своем портфолио. Посмотреть открытые проекты можно в моём Github.</p>
                        <button className="my-4 bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            <FontAwesomeIcon icon={faGithub} className="mr-2" />
                            <a href="https://github.com/Pampers01">GitHub</a>
                        </button>
                    </div>
                </div>
            </div>
            <hr className="w-full border-1 my-5"></hr>

            <div>
                <h1 className={'text-4xl my-20 font-montserrat'}>Опыт работы c <b className='text-primary'>5</b> востребоваными технологиями</h1>
                <div className={'flex'} style={{textAlign: 'center'}}>
                    <div className={'w-1/5 lift-block'}>
                        <DiReact size={152} className='text-primary' style={{display: 'inline-block'}}/>
                        <p className='text-3xl'>React</p>
                    </div>
                    <div className={'w-1/5 lift-block'}>
                        <FaBootstrap size={152} className='text-primary' style={{display: 'inline-block'}}/>
                        <p className='text-3xl'>Bootstrap 5</p>
                    </div>
                    <div className={'w-1/5 lift-block'}>
                        <SiTailwindcss size={152} className='text-primary' style={{display: 'inline-block'}}/>
                        <p className='text-3xl'>Tailwind</p>
                    </div>
                    <div className={'w-1/5 lift-block'}>
                        <DiJavascript1 size={152} className='text-primary' style={{display: 'inline-block'}}/>
                        <p className='text-3xl'>JavaScript</p>
                    </div>
                    <div className={'w-1/5 lift-block'}>
                        <DiNodejsSmall size={152} className='text-primary' style={{display: 'inline-block'}}/>
                        <p className='text-3xl'>Node JS</p>
                    </div>
                </div>
            </div>

            <p className='text-3xl my-20'>Умения и навыки</p>
            <div className='font-montserrat flex'>
                <div className='w-1/2'>
                    <div className='flex text-1xl justify-center'>
                        <p className='text-left mx-5 my-2'>UX/UI Дизайн</p>
                        <p className='text-right mx-5 my-2 text-primary'>50%</p>
                    </div>
                    <div className="relative h-10 bg-black h-3 mb-5">
                        <div className="bg-primary h-full w-1/2"></div>
                    </div>

                    <div className='flex text-1xl justify-center'>
                        <p className='text-left mx-5 my-2'>Разработка приложений WPF</p>
                        <p className='text-right mx-5 my-2 text-primary'>60%</p>
                    </div>
                    <div className="relative h-10 bg-black h-3 mb-5">
                        <div className="bg-primary h-full w-3/5"></div>
                    </div>

                    <div className='flex text-1xl justify-center'>
                        <p className='text-left mx-5 my-2'>CSS / SCSS</p>
                        <p className='text-right mx-5 my-2 text-primary'>80%</p>
                    </div>
                    <div className="relative h-10 bg-black h-3 mb-5">
                        <div className="bg-primary h-full w-4/5"></div>
                    </div>

                    <div className='flex text-1xl justify-center'>
                        <p className='text-left mx-5 my-2'>Backend на PHP</p>
                        <p className='text-right mx-5 my-2 text-primary'>50%</p>
                    </div>
                    <div className="relative h-10 bg-black h-3 mb-5">
                        <div className="bg-primary h-full w-1/2"></div>
                    </div>
                </div>
                <div className='w-1/2 px-10' style={{display: 'flex', alignItems: 'center'}}>
                    <p>"Мой опыт" - это раздел, который показывает мою компетенцию в определенных областях разработки. Я имеете средний уровень знаний в UX/UI дизайне (50%) и backend на PHP (50%). Вы имеете хорошие навыки в разработке приложений WPF (60%) и CSS/SCSS (80%).</p>
                </div>
            </div>
        </div>
    );
}
export default Main
