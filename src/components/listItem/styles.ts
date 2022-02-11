import styled from 'styled-components';

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div(({ done }: ContainerProps)=>(
    `
    border: 5px solid 	#F5F5F5;
    display: flex;
    background-color: transparent;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;

    input {
        
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }

    label {
      
        color: 	#F5F5F5;
        text-decoration: ${done ? 'line-through' : 'initial'};
    }

`
));