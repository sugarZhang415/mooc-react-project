import React, { FC } from 'react';

interface IHelloProps {
    message:string;
}

// const Hello = (props: IHelloProps) => {
//     return <h2>{props.message}</h2>
// }

const Hello: FC<IHelloProps> = (props) => {
    return <h2>{props.message}</h2>
}

export default Hello;