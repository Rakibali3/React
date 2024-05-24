const { createContext } = require("react");

const userContext = createContext({
    userInfo : "Default User"
})

export default userContext;