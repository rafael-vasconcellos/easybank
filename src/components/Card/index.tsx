import './Card.css'

export default function Card( {icon_src, title, text}: {icon_src: string, title: string, text: string} ) { 

    return( 
        <div class='w-72 my-10 flex flex-col gap-8'>
            <div class='flex'>
                <img src={icon_src} width={64} />
            </div>
            <h1 class='text-2xl'>{title}</h1>
            <p class='text-left text-base'>{text}</p>
        </div>
    )
}