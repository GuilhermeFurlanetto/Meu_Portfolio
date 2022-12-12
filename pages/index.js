import {useState} from 'react'
import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillGithub, AiFillFacebook, AiFillLinkedin, AiFillInstagram} from 'react-icons/ai'
import Image from 'next/image'
import deved from '../public/guilherme-image.jpeg'
import html from '../public/html.png'
import css from '../public/css.png'
import javascript from '../public/javascript.png'
import react from '../public/react.png'
import jquery from '../public/jquery.png'
import node from '../public/node.png'
import tailwindcss from '../public/tailwindcss.png'
import web1 from '../public/web1.png'
import portfolio from '../public/portfoliologo.png'

export default function Home() {

  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Portfolio do Gui</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=' bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className=' min-h-screen'>
          <nav className=' py-10 mb-12 flex justify-between'>
            <div>
              <Image src={portfolio} className='dark:text-white'/>
            </div>
            <ul className=' flex items-center'>
              <li className='text-xl font-burtons dark:text-white'>
                <a className='px-3 cursor-pointer' href='#'>INICIO</a>
                <a className='px-3 cursor-pointer' href='#habilidades'>HABILIDADES</a>
                <a className='px-3 pr-10 cursor-pointer' href='#portfolio'>PORTFOLIO</a>
              </li>
              <li>
                <BsFillMoonStarsFill onClick={() => {setDarkMode(!darkMode)}} className=' cursor-pointer text-2xl dark:text-white'/>
              </li>
            </ul>
          </nav>
          <div className=' text-center py-3'>
            <h2 className=' text-5xl py-2 text-amber-600 font-medium md:text-6xl'>Guilherme de Lima Furlanetto</h2>
            <h3 className=' text-2xl py-2 md:text-3xl dark:text-white'>Desenvolvedor e Designer</h3>
            <p className=' text-md py-5 leading-8 text-gray-800 md:text-xl mx-w-lg mx-auto dark:text-slate-400'>Sou Técnico em Desenvolvimento de Sistemas, me especializo em criação de sites mas ainda não trabalho na área, estou sempre aprendendo e programando projetos praticos para
              aperfeiçoar meu desenvolvimento Web. </p>
          </div>
          <div className=' text-5xl flex justify-center gap-16 py-3 text-gray-800 dark:text-slate-400'>
            <a href='https://github.com/GuilhermeFurlanetto' target='_blank'><AiFillGithub/></a>
            <a href='https://www.facebook.com/profile.php?id=100008393790800' target='_blank'><AiFillFacebook/></a>
            <a href='https://www.instagram.com/gui_lima_furlanetto/' target='_blank'><AiFillInstagram/></a>
            <a href='https://www.linkedin.com/in/guilherme-de-lima-furlanetto-325a091a4/' target='_blank'><AiFillLinkedin/></a>
          </div>
          <div className='relative mx-auto rounded-full w-40 h-40 mt-20 md:h-96 md:w-96 mb-10'>
            <Image src={deved} />
          </div>
        </section>

        <section>
          <div id='habilidades'>
            <h3 className=' text-3xl py-3 mt-60 dark:text-white'> Minhas Habilidades</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-slate-400'>Venho aprimorando minhas habilidades de Front-End e Designer com cursos online, vendo tutoriais no Youtube, 
              fazendo projetos práticos sempre e tentando inovar.
            </p>
          </div>
          <div className='lg:flex lg:flex-wrap gap-40 '>
            <div className='  shadow-lg py-3 px-10 rounded-xl my-5 lg:w-2/5'>
              <Image src={html} width={100} height={100}/>
              <h2 className=' text-lg font-medium pt-8 pb-2 dark:text-white'>HTML</h2>
              <p className='py-3 dark:text-slate-400'>HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores.</p>              
            </div>

            <div className='  shadow-lg py-3 px-10 rounded-xl my-5 lg:w-2/5'>
              <Image src={css} width={100} height={100}/>
              <h2 className=' text-lg font-medium pt-8 pb-2 dark:text-white'>CSS</h2>
              <p className='py-3 dark:text-slate-400'>Cascading Style Sheets é um mecanismo para adicionar o Design a um documento web. O código CSS pode ser aplicado diretamente nas tags ou ficar contido dentro das tags style.</p>
            </div>

            <div className='  shadow-lg py-3 px-10 rounded-xl my-5 lg:w-2/5'>
              <Image src={javascript} width={100} height={100}/>
              <h2 className=' text-lg font-medium pt-8 pb-2 dark:text-white'>JAVASCRIPT</h2>
              <p className='py-3 dark:text-slate-400'>JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.</p>
            </div>

            <div className='  shadow-lg py-3 px-10 rounded-xl my-5 lg:w-2/5'>
              <Image src={react} width={100} height={100}/>
              <h2 className=' text-lg font-medium pt-8 pb-2 dark:text-white'>REACT</h2>
              <p className='py-3 dark:text-slate-400'>O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.</p>
            </div>

            <div className='  shadow-lg py-3 px-10 rounded-xl my-5 lg:w-2/5'>
              <Image src={jquery} width={100} height={100}/>
              <h2 className=' text-lg font-medium pt-8 pb-2 dark:text-white'>JQUERY</h2>
              <p className='py-3 dark:text-slate-400'>jQuery é uma biblioteca livre que contém funções da linguagem de programação JavaScript que interage com páginas em HTML, desenvolvida para simplificar os scripts executados/interpretados no navegador de internet do usuário. </p>
            </div>

            <div className='  shadow-lg py-3 px-10 rounded-xl my-5 lg:w-2/5'>
              <Image src={node} width={100} height={100}/>
              <h2 className=' text-lg font-medium pt-8 pb-2 dark:text-white'>NODE</h2>
              <p className='py-3 dark:text-slate-400'>Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.</p>
            </div>

            <div className='  shadow-lg py-3 px-10 rounded-xl my-5 lg:w-2/5'>
              <Image src={tailwindcss} width={100} height={100}/>
              <h2 className=' text-lg font-medium pt-8 pb-2 dark:text-white'>TAILWINDCSS</h2>
              <p className='py-3 dark:text-slate-400'>Tailwind CSS é uma estrutura CSS de código aberto. A principal característica desta biblioteca é que, ao contrário de outros frameworks CSS como o Bootstrap, ela não fornece uma série de classes predefinidas para elementos como botões ou tabelas. Em vez disso, ela cria uma lista de classes CSS "utilitárias" que podem ser usadas para estilizar cada elemento misturando e combinando</p>
            </div>
            
          </div>
        </section>
        <section>
          <div id='portfolio'>
            <h3 className=' text-3xl py-3 dark:text-white'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-slate-400'>
              Estes são alguns dos meus projetos que venho fazendo e praticando.
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <a href='https://project-flix-prime.netlify.app/' target='_blank'><Image src={web1} className=' rounded-lg object-cover' width={'100%'} height={'100%'} layout='responsive' /></a>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
