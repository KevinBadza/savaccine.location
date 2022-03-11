const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const VaccineRoutes = require('./routes/vaccineLocationRoutes');
const UserRoutes = require('./routes/userRoutes');

dotenv.config();
app.use(express.json());
mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB Database Connected');
  })
  .catch((error) => console.log(error));

app.use('/api/vaccinelocation', VaccineRoutes);
app.use('/api/users', UserRoutes);
app.listen(8800, () => {
  console.log('Backend Server is Running');
});
