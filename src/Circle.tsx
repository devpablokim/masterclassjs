import styled from "styled-components";

interface ContainerProps {
    bgColor: string;
}

const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    background-color: ${props => props.bgColor};
    border-radius: 100px;
`;

interface CircleProps {
    bgColor: string;
    borderColor?: string;
}

function Circle({ bgColor }: CircleProps) {
    return <Container bgColor={bgColor} />;
}

export default Circle;

interface playerShape {
    name: string;
    age: number;
}

const sayHello = (playerObj: playerShape) => "Hello ${playerObj.name} yor are ${playerObj.age} years old.";