const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Connect to MongoDB Atlas
console.log('1')
mongoose.connect('mongodb+srv://Cluster50760:Monik123@cluster0.qr7qv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true });
console.log('2')

// Define the user schema
const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    email: String,
    age: Number
  });
  
  // Create the user model
  const User = mongoose.model('User', userSchema);
  
  // Add static user data
  const users = [
    { _id: new mongoose.Types.ObjectId(), name: 'John Doe', email: 'johndoe@email.com', age: 30 },
    { _id: new mongoose.Types.ObjectId(), name: 'Jane Smith', email: 'janesmith@email.com', age: 25 },
    { _id: new mongoose.Types.ObjectId(), name: 'Bob Johnson', email: 'bobjohnson@email.com', age: 20 }
  ];
  
  User.insertMany(users)
    .then(() => {
      console.log('Users added successfully',users);

    })
    .catch((error) => {
      console.error('Error adding users:', error);
    });
  
  // GET endpoint to retrieve user data by ID
  app.get('/users/:id', async (req, res) => {
    try {
      const userId = req.params.id;
      if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).send({ error: 'Invalid user ID' });
      }
  
      const user = await User.findOne({ _id: userId, age: { $gt: 21 } });
      if (!user) {
        return res.status(404).send({ error: 'User not found' });
      }
  
      res.json(user);
    } catch (error) {
      res.status(500).send({ error: 'Internal Server Error' });
    }
  });
  
  // Start the server
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });