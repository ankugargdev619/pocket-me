import { RightArrow } from "../icons/RightArrow"

export const Point = (props) => {
    return <>
        <div className="flex gap-4 items-center py-2">
            <RightArrow  className="w-10" />
            <div className="text-xl md:text-2xl">{props.description}</div>
        </div>
    </>
}