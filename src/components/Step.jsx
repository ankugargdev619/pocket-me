export const Step = (props) => {
    return <div className="w-full flex flex-col items-center">
        <div>
            <div className="text-xl">{props.title}</div>
            <div className="w-60 overflow-hidden flex">
                {props.imgs.map((entry,idx)=>(
                    <img src={entry} />
                ))}
            </div>
        </div>
    </div>
}