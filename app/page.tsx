import Image from "next/image"

import { PiTelevisionSimpleBold as Television, PiBookOpen as Book } from "react-icons/pi"

import style from "./home.module.css"

const Home = () => {
    return (
      <main className = { "h-screen" }>
        <div className = { "flex flex-col sm:items-start justify-center gap-8 xl:gap-12 h-full px-8 sm:px-16 lg:px-28 xl:px-44" }>
          <div className = { "flex flex-col gap-1" }>
            <h4 className = { "text-lg sm:text-xl xl:text-3xl font-bold text-ram opacity-75" }>
              Re:ゼロから始める異世界生活
            </h4>
            <h1 className = { "text-4xl sm:text-5xl xl:text-7xl font-bold text-white opacity-75" }>
              Re:Zero <br/>
              Kara Hajimeru <br/>
              Isekai Seikatsu
            </h1>
          </div>
          
          <div className = { "flex flex-col gap-8" }>
            <a className = { `${style.linkButton} text-rem border-rem shadow-rem hover:bg-rem` }>
              <Television size = { 50 }/>
              Anime Episodes
            </a>
            
            <a className = { `${style.linkButton} text-ram border-ram shadow-ram hover:bg-ram` }>
              <Book size = { 50 }/>
              Novel Chapters
            </a>
          </div> 
        </div>
      </main>
    )
}

export default Home;