import './ArticleCard.css'


export default function Article( {author, title, textPreview, imageSrc}: {author: string, title: string, textPreview: string, imageSrc: string} ) { 

    return (
        <section class='w-fit bg-white'>
            <img class='mb-2 max-h-[200px]' src={imageSrc} width={300} />
            <div class='w-[300px] p-6'>
                <span class='text-xs'>By {author}</span>
                <h1 class='text-xl my-2 cursor-pointer'>{title}</h1>
                <p class='text-base'>{textPreview}</p>
            </div>
        </section>
    )
}