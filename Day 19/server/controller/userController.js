const name='user'

const addUser=(req,res)=>{
    res.send(`${name} added successfully`)
}
const viewUser=(req,res)=>{
    res.send(`${name} viewed successfully`)
}
const updateUser=(req,res)=>{
    res.send(`${name} updated successfully`)
}
const deleteUser=(req,res)=>{
    res.send(`${name} deleted successfully`)
}

export {addUser,viewUser,updateUser,deleteUser}