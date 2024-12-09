
export default function Points(props:any){
    return(
        <div className={`absolute font-serif left-32 ${props.size}`}>
            <div className="flex flex-row items-center space-x-3 text-NavyBlue">
               {props.icon}
               {props.heading}
            </div>
            {props.body}
        </div>
    )
}