const { Router } = require('express')
const router = Router()

const { getRoles,putRoles,postRoles,patchRoles,deleteRoles } = require('../controllers/roles')

router.get('/', getRoles)
router.post('/', postRoles)
router.put('/', putRoles)
router.patch('/', patchRoles)
router.delete('/', deleteRoles)


module.exports = router