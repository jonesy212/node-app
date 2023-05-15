const db = require('../../data/db-config')

module.exports = {
    find,
    findById,
    findAllById,
    add,
    remove
}

const table = 'users'

function remove(id){
    return db(table)
    .where({user_id:id})
    .delete()
}

function add(table){
    return db(table)
    .insert(user)
    .then(find())
}


function findAllById(id) {
    return db(table)
        .where({ user_id: id })
}


    router.delete('/:id', (req, res) => {
        const { id } = req.params
        
        db.remove(id)
        .then(p => {
            res.status(201).json({ message: '', ...e })
            res.status(400).json({ message: '' })
        })
    })

