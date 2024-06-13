import RequestButton from '../RequestButton'
import './Header.css'

export default function Header() { 
    // <img class='absolute -right-28 -top-28' src={phones.src} />
    return ( 
        <header class="min-h-[100vh] h-fit w-screen relative">
            <section class="h-full ml-[7vw] py-28">
                <div class='flex flex-col gap-10'>
                    <h1 class='text-6xl'>Next generation digital banking</h1>
                    <h2>
                        Take your financial life online. Your Easybank account will be a one-stop-shop 
                        for spending, saving, budgeting, investing, and much more.
                    </h2>
                    <RequestButton />
                </div>
            </section>

            <div class='image'></div>
        </header>
    )
}