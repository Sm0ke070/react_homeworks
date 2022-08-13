import React, {ChangeEvent, useState} from 'react'
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

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        const trimmedName = e.currentTarget.value.trim()
        if (trimmedName) {
            setName(trimmedName)
            setError('')
        } else {
            setName('')
            setError('ERROR')
        }
    }
    // if (e.currentTarget.value !== ' ') {
    //     addUserCallback(name)
    //     setName(e.currentTarget.value)
    //     setError('')
    // } else setError('ERROR')


    const addUser = () => {
        addUserCallback(name)
        alert(`Hello ${name}!`)
        setName('')

    }
    const totalUsers = users.length
    //const [totalUsers, setTotalUsers] = useState(0)
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
