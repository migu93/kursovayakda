import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { DiReact } from 'react-icons/di';
import { FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { DiJavascript1 } from 'react-icons/di'
import { DiNodejsSmall } from 'react-icons/di'
import { SiAdobephotoshop } from 'react-icons/si'
import { SiPostgresql } from 'react-icons/si'
import { FiFigma } from 'react-icons/fi'
import { SiAdobeaftereffects } from 'react-icons/si'
import { DiVisualstudio } from 'react-icons/di'
import { SiPostman } from 'react-icons/si'
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
                        <p className='text-3xl text-primary'>React</p>
                    </div>
                    <div className={'w-1/5 lift-block'}>
                        <FaBootstrap size={152} className='text-primary' style={{display: 'inline-block'}}/>
                        <p className='text-3xl text-primary'>Bootstrap 5</p>
                    </div>
                    <div className={'w-1/5 lift-block'}>
                        <SiTailwindcss size={152} className='text-primary' style={{display: 'inline-block'}}/>
                        <p className='text-3xl text-primary'>Tailwind</p>
                    </div>
                    <div className={'w-1/5 lift-block'}>
                        <DiJavascript1 size={152} className='text-primary' style={{display: 'inline-block'}}/>
                        <p className='text-3xl text-primary'>JavaScript</p>
                    </div>
                    <div className={'w-1/5 lift-block'}>
                        <DiNodejsSmall size={152} className='text-primary' style={{display: 'inline-block'}}/>
                        <p className='text-3xl text-primary'>Node JS</p>
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
            <p className='text-3xl my-20'>Дополнительные навыки</p>

            <div className="flex">
                <div className="flex flex-wrap -mx-6">
                    <div className="w-full w-1/3 px-6 py-4">
                        <div className="bg-white rounded-lg backgroundCard shadow-md p-6" style={{height: 250}}>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <SiAdobephotoshop className="text-black mb-4" style={{ fontSize: 35 }} />
                                <p className='mb-4 mx-4 text-white '>Adobe Photoshop</p>
                            </div>
                            <p className="text-black mb-4">
                                Как среднестатистический пользователь Photoshop, я имею некоторый опыт работы с программой и знаете, как применять базовые функции, такие как коррекция цвета, изменение размера изображения, добавление текста и т.д.
                            </p>
                        </div>
                    </div>
                    <div className="w-full w-1/3 px-6 py-4">
                        <div className="bg-white rounded-lg backgroundCard shadow-md p-6" style={{height: 250}}>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <FiFigma className="text-black mb-4" style={{ fontSize: 35 }} />
                                <p className='mb-4 mx-4 text-white'>Figma</p>
                            </div>
                            <p className="text-black mb-4">
                                У меня есть некоторый опыт работы с программой с Figma и знаю, как создавать простые макеты, использовать базовые элементы интерфейса и компоновать элементы в единый дизайн.
                            </p>
                        </div>
                    </div>

                    <div className="w-full w-1/3 px-6 py-4">
                        <div className="bg-white rounded-lg backgroundCard shadow-md p-6" style={{height: 250}}>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <SiAdobeaftereffects className="text-black mb-4" style={{ fontSize: 35 }} />
                                <p className='mb-4 mx-4 text-white'>Adobe After effects</p>
                            </div>
                            <p className="text-black mb-4">
                                Я имею некоторый опыт работы с программой с Figma и знаю, как создавать простые макеты, использовать базовые элементы интерфейса и компоновать элементы в единый дизайн.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex">
                <div className="flex flex-wrap -mx-6">
                    <div className="w-full w-1/3 px-6 py-4">
                        <div className="bg-white rounded-lg backgroundCard shadow-md p-6" style={{height: 250}}>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <SiPostgresql className="text-black mb-4" style={{ fontSize: 35 }} />
                                <p className='mb-4 mx-4 text-white '>PostgresSQL</p>
                            </div>
                            <p className="text-black mb-4">
                                Я имею базовые знания и навыки работы с этой открытой и широко используемой системой управления базами данных.
                            </p>
                        </div>
                    </div>
                    <div className="w-full w-1/3 px-6 py-4">
                        <div className="bg-white rounded-lg backgroundCard shadow-md p-6" style={{height: 250}}>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <DiVisualstudio className="text-black mb-4" style={{ fontSize: 35 }} />
                                <p className='mb-4 mx-4 text-white'>Visual Studio</p>
                            </div>
                            <p className="text-black mb-4">
                                Ловко разбираюсь в интерфейсе данной IDE, эффективно использую многие возможности среды разработки, которые ускоряют решение рутинных задач.
                            </p>
                        </div>
                    </div>

                    <div className="w-full w-1/3 px-6 py-4">
                        <div className="bg-white rounded-lg backgroundCard shadow-md p-6" style={{height: 250}}>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <SiPostman className="text-black mb-4" style={{ fontSize: 35 }} />
                                <p className='mb-4 mx-4 text-white'>Postman</p>
                            </div>
                            <p className="text-black mb-4">
                                Неоднократно в ходе выполнения учебных проектов использовал эту утилиту для проверки правильности работы back-end составляющей сайта.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <p className='text-3xl my-20'>Связаться со мной</p>
            <div className='mx-auto w-1/2'>
                <form className='text-center'>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <input type="text" id="first_name"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Имя"/>
                        </div>
                        <div>

                            <input type="text" id="last_name"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Фамилия" />
                        </div>
                        <div>
                            <input type="text" id="company"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Компания" />
                        </div>
                        <div>
                            <input type="tel" id="phone"
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Телефон" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="email" id="email"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="gololenkova.top@company.com"/>
                    </div>

                    <button type="submit"
                            className="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Отправить
                    </button>
                </form>
            </div>
        </div>
    );
}
export default Main
