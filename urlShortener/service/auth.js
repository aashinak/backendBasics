const sessioIdToUserMap = new Map()

const setUser = (id, user) => {
    sessioIdToUserMap.set(id, user)
}

const getUser = (id) => {
   return sessioIdToUserMap.get(id)
}

export { setUser, getUser}
