import React from "react";

type SquareProps = {
    isChanceOfX: boolean;
    setIsChanceOfX: (value: boolean) => void;
    value: string
    setValue:(value: string) => void;
}

const Square:React.FC<SquareProps>=(props)=>{
    const {isChanceOfX, setIsChanceOfX,value,setValue} = props;
    // const [value, setValue] = useState(" ");

    const handleClick = () => {
        if(value !== " ") {
            return;
        }
        setValue(isChanceOfX ? "X" : "O");
        setIsChanceOfX(!isChanceOfX);
    }

    return(

        <div onClick={handleClick} style={{width: '100px', height: '100px', border: '1px solid black'}}
             className="pt-4 m-0 float-left">
            <span className="h1">{value}</span>
        </div>
    )
}
export default Square;