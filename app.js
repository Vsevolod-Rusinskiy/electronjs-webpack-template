const express = require('express') ;
const path = require('path') ;
const dotenv = require('dotenv') ;
const cors = require('cors') ;
const multer = require('multer') 


dotenv.config();
const PORT = process.env.SERVER_PORT || 3000;
const app = express();
app.use(cors({
    origin: '*'
}));


app.use(express.static(path.resolve() + "/public"));

app.use(express.json());
 
//--------------

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({storage: storage, limits: {fileSize: 10000000}}).single("filedata");
app.use(upload);

app.get('/', (req, res) => res.send('API, v1.0.0 - All Systems Go'));
app.all('*', (req, res) => res.status(404).send('Route does not exist on the server'));
app.listen(PORT, () => console.log(`Server running on: ${PORT}`));
