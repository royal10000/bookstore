import multer from 'multer'
import ApiError from '../utils/ApiError.js'
const path = 'src/storage'
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path)
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "_" + file.originalname)
    }
})

const upload = multer({
    storage,
    limits: {
        fileSize: 8 * 1024 * 1024
    },
    fileFilter: (req, file, cb) => {
        if (!file.mimetype.startsWith('image/')) {
            return cb(new ApiError(400, 'uploaded file is not eligible to be image'))
        }
        cb(null, true)
    },

})

const videoUpload = multer()

export default upload
export { multer }