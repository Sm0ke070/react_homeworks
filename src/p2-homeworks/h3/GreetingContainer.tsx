import React, {useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";
import {futimes} from "fs";

type GreetingContainerPropsType = {
    users: UserType[],// need to fix any  --DONE
    addUserCallback: (name: string) => void, // need to fix any  --DONE
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any  --DONE
    const [error, setError] = useState<string>('') // need to fix any  --DONE

    const setNameCallback = (e: any) => { // need to fix any
        if (e.currentTarget.value !== ' ') {
            addUserCallback(name)
            setName(e.currentTarget.value)
            setError('')
        } else setError('ERROR')
    }

    const addUser = () => {
        if (name !== '') {
            alert(`Hello ${name}!`)
            setTotalUsers(totalUsers+1)
        }// need to fix  --DONE
        setName('')
    }

    const [totalUsers, setTotalUsers] = useState(0)
     // need to fix  --DONE

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
