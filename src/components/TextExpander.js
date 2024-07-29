import {useState} from "react";

export default function TextExpander({ className="",children,collapsedNumWords=50,expandButtonText="Show More",collapseButtonText="Show Less",buttonColor="#180161"}) {

    const [press,setPress]=useState(false)

    const onPress=()=>{
        setPress(!press)
    }

    return (

        <div className={className}>

            {press?<>
                    <span>{children }</span>
                    <Button onClick={onPress} isCollapse={press} color={buttonColor} expandButtonText={expandButtonText} collapseButtonText={collapseButtonText} />
                </>

                :
                collapsedNumWords?
                    <>
                        {children.substr(0,collapsedNumWords)}
                        ......
                        <Button onClick={onPress}  isCollapse={press} color={buttonColor} expandButtonText={expandButtonText} collapseButtonText={collapseButtonText}/>
                    </>:
                    children
            }

        </div>

        // <div>{children}</div>
    );
}

const Button=({color ,onClick,expandButtonText,collapseButtonText,isCollapse})=>{

    console.log(isCollapse)

    const buttonStyles={
        color:color
    }

    return(
            <button onClick={onClick} style={buttonStyles}>{isCollapse?collapseButtonText:expandButtonText}</button>
    )
}