import React, {useState} from "react";

const Experience = () => {

    const [bgStyle, setBgStyle] = useState({});

    const handleMouseMove = (e) => {

        console.log("E",e)

        const { clientX, clientY, currentTarget } = e;
        const { left, top } = currentTarget.getBoundingClientRect();
        const x = clientX - left;
        const y = clientY - top;
        setBgStyle({
            background: `radial-gradient(circle at ${x}px ${y}px, rgba(0, 100, 0, 0.1), transparent 70%)`
        });
    };

    return (
        <div className={" experiences"}  onMouseMove={handleMouseMove} style={bgStyle}>
            <div className="period">
                <h4>2023-2024</h4>
            </div>
            <div className="content">
                <h3>Frontend Web Developer</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam asperiores error et, ex
                    exercitationem laborum molestias natus odio quo rerum tempora tempore vero? A iure non officiis
                    pariatur quod saepe ut voluptates. Deleniti fuga illum nobis nostrum nulla obcaecati odit, quae
                    quaerat repellat sequi similique unde veritatis vitae voluptate?
                </p>
            </div>
        </div>
    )
}

export default Experience