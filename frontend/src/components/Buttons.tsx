export default function Buttons(props:any ):JSX.Element{
    return(
        <div className={`absolute ${props.bottom} ${props.left}`}>
            <a href={`${props.id}`} className={`inline-flex items-center font-display justify-center h-16  px-10 transition delay-50 duration-250 ease-in-out -translate-y-1 hover:scale-105
             text-xl font-semibold text-center text-gray-200 no-underline align-middle
              ${props.color} border-1 border-gray-600 border-solid cursor-pointer select-none shadow-md
            hover:shadow-2xl hover:text-white rounded-lg hover:border-white focus:shadow-xl focus:no-underline`}>{props.description}</a>
        </div>
    )
    
}