import React, {useState} from 'react'
import {v1} from 'uuid'
import GreetingContainer from './GreetingContainer'

// types
export type UserType = {
    _id: string // need to fix any  --DONE
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<UserType[]>([]) // need to fix any --DONE

    const addUserCallback = (name: string) => { // need to fix any --DONE
        const newUser= { //  --DONE
            _id: v1(),
            name:name,
        }
        setUsers([ ...users,newUser]) // need to fix --DONE
    }

    return (
        <div>
            <hr/>
            homeworks 33

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
