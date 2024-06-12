import type { JSX } from "solid-js/jsx-runtime";

export default function RequestButton( {class: classProps}: JSX.ButtonHTMLAttributes<HTMLButtonElement> ) { 

    return ( 
        <button class={`w-fit text-white font-bold text-base px-8 py-3 rounded-full ${classProps}`}>Request Invite</button>
    )
}