import React from 'react'

type GreetingsProps = {
    name: string;
    mark: string;
    optional?: string;
    onClick: (name: string) => void; // 아무것도 리턴하지 않는다는 함수를 의미합니다.
  };

const Greetings: React.FC<GreetingsProps> = ({name, mark, optional, onClick}) => {
    const handleClick = () => {
        onClick(name);
    }

    return (
        <div>
            Hello, {name} {mark}
            {optional && <p>optional</p>}
            <div>
                <button onClick={handleClick}>Click me</button>
            </div>
        </div>

    )
}

Greetings.defaultProps = {
    mark: '!'
}



export default Greetings
