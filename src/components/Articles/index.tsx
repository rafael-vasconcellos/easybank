import ArticleCard from "../ArticleCard"
import imageA from '../assets/image-currency.jpg'
import imageB from '../assets/image-restaurant.jpg'
import imageC from '../assets/image-plane.jpg'
import imageD from '../assets/image-confetti.jpg'
import './Articles.css'


export default function Articles( {title}: {title: string} ) { 
    const articles = [ 
        { 
            image: imageA,
            author: "Claire Robinson",
            title: "Receive money in any currency with no fees",
            textPreview: "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"
        }, { 
            image: imageB,
            author: "Wilson Hutton",
            title: "Treat yourself without worrying about money",
            textPreview: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"
        }, { 
            image: imageC,
            author: "Wilson Hutton",
            title: "Take your Easybank card wherever you go",
            textPreview: "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …"
        }, { 
            image: imageD,
            author: "Claire Robinson",
            title: "Our invite-only Beta accounts are now live!",
            textPreview: "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..."
        }
    ]

    return( 
        <section class="my-14 pl-[5vw]">
            <h1 class="text-3xl py-4 mb-6">{title}</h1>
            <div class="flex gap-6 flex-wrap">
                { articles.map(article => <ArticleCard author={article.author} title={article.title} textPreview={article.textPreview} imageSrc={article.image.src} />) }
            </div>
        </section>
    )
}