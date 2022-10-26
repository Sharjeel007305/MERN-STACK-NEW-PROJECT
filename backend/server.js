const  express = require ("express")
const dotenv = require ('dotenv')
const mongoose = require  ('mongoose');

const SeedRouter = require ("./routes/SeedRoute")
const carRouter = require ("./routes/carsRoute");
const userRouter = require("./routes/userRoute");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/seed/', SeedRouter ),
app.use('/api/cars/', carRouter ),
app.use('/api/users/', userRouter ),


//Connect to DB
dotenv.config();
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("Connected to DB")
}).catch((error) => {
    console.log(error.message)
})

//Create Port
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server at : http://localhost: ${port}`);
})