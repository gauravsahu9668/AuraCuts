export default function Role(props:any){
    return(
            <div>
            <div className={`${props.color} flex flex-col justify-center items-center rounded-3xl absolute w-1/4 h-1/2 ${props.size} hover:shadow-2xl transition delay-150 duration-250 ease-in-out -translate-y-1  hover:scale-105 hover:cursor-pointer `}>
                <img src={props.img} alt="" className="rounded-full size-32 absolute top-8 "/>
                <p className={`${props.hsize} translate-z-0 cursor-default text-slate-600 font-medium text-lg `}>{props.heading}</p>
                 <p className={`${props.bsize} translate-z-0 font-semibold cursor-default opacity-65`}>{props.body}</p>
            </div>

        </div>

    )
}