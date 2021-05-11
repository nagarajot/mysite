import React from 'react'

const UserContext = React.createContext()
const UserProvider = UserContext.createProvider
const UserConsumer = UserContext.createConsumer

export { UserProvider, UserConsumer }




