import { Show, createEffect, createSignal } from 'solid-js'
import RequestButton from '../RequestButton'
import logo from '../assets/logo.svg'
import hamburguer from '../assets/icon-hamburger.svg'
import close from '../assets/icon-close.svg'
import './Navbar.css'


export default function Navbar() { 
    const [ toggle, setToggle ] = createSignal(false)
    createEffect(() => { 
        window.onresize = function() { 
            if (window.innerWidth > 815) { setToggle(false) }
        }
    } )


    return (
        <nav class='min-w-[100dvw] sticky top-0 z-10 bg-white'>
            <section>
                <img class='py-6' alt="logo" src={logo.src} />
                <NavList />
                <RequestButton />

                <img class='p-6 cursor-pointer' alt="hamburguer" src={toggle()? close.src : hamburguer.src}
                 onClick={ () => setToggle(!toggle()) } />
            </section>

            <Show when={toggle()}>
                <div class='bg-black/40 w-screen h-screen py-4 flex justify-center'>
                    <section class='w-11/12 h-fit bg-white'>
                        <NavList />
                    </section>
                </div>
            </Show>
        </nav>
    )
}


function NavList() { 

    return( 
        <ul>
            <li class='px-2 py-6 cursor-pointer text-center'>Home</li>
            <li class='px-2 py-6 cursor-pointer text-center'>About</li>
            <li class='px-2 py-6 cursor-pointer text-center'>Contact</li>
            <li class='px-2 py-6 cursor-pointer text-center'>Blog</li>
            <li class='px-2 py-6 cursor-pointer text-center'>Careers</li>
        </ul>
    )
}