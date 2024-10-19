export const storageService = {
    query,
    get,
    post,
    put,
    remove,
}

async function query(entityType, delay = 2000) {
    const entities = JSON.parse(localStorage.getItem(entityType)) || []
    await new Promise(resolve => setTimeout(resolve, delay))
    return entities
}

async function get(entityType, entityId) {
    const entities = await query(entityType)
    const entity = entities.find(entity => entity.id === entityId)
    if (!entity) throw new Error(`Get failed, cannot find entity with id: ${entityId} in: ${entityType}`)
    return entity
}

async function post(entityType, newEntity) {
    newEntity = {...newEntity, id: _makeId()}
    const entities = await query(entityType)
    entities.push(newEntity)
    _save(entityType, entities)
    return newEntity
}

async function put(entityType, updatedEntity) {
    const entities = await query(entityType)
    const idx = entities.findIndex(entity => entity.id === updatedEntity.id)
    if (idx < 0) throw new Error(`Update failed, cannot find entity with id: ${updatedEntity.id} in: ${entityType}`)
    entities[idx] = {...entities[idx], ...updatedEntity}
    _save(entityType, entities)
    return entities[idx]
}

async function remove(entityType, entityId) {
    const entities = await query(entityType)
    const idx = entities.findIndex(entity => entity.id === entityId)
    if (idx < 0) throw new Error(`Remove failed, cannot find entity with id: ${entityId} in: ${entityType}`)
    entities.splice(idx, 1)
    _save(entityType, entities)
}

// Private functions

function _save(entityType, entities) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}

function _makeId(length = 5) {
    let text = ''
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}