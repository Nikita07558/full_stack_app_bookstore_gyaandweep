import User from "../model/user.model.js";

export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const createdUser = new User({
      fullname,
      email,
      password, // Storing plain text password (not recommended for real applications)
    });

    await createdUser.save();
    res.status(201).json({ message: "User created successfully" ,
      user:{
        _id:createdUser._id,
        fullname:createdUser.fullname,
        email:createdUser.email,
      },
    });
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    // Check if user exists and if the password matches exactly as stored (in plain text)
    if (!user || user.password !== password) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    res.status(200).json({
      message: "Login successful",
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
      },
    });
  } catch (error) {
    
    console.log("Error: " + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
