const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/chemistry-portfolio";

const UserSchema = new mongoose.Schema(
    {
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        name: { type: String, required: true },
        role: { type: String, enum: ["user", "admin"], default: "user" }
    },
    { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

async function createAdmin() {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("Connected to MongoDB at " + MONGODB_URI);

        rl.question("Enter Admin Email: ", (email) => {
            rl.question("Enter Admin Password: ", (password) => {
                rl.question("Enter Admin Name: ", async (name) => {

                    try {
                        const existingUser = await User.findOne({ email });
                        if (existingUser) {
                            console.log("User already exists!");
                            process.exit(1);
                        }

                        const hashedPassword = await bcrypt.hash(password, 10);
                        const user = await User.create({
                            email,
                            password: hashedPassword,
                            name,
                            role: "admin",
                        });

                        console.log("Admin user created successfully:", user.email);
                        process.exit(0);
                    } catch (error) {
                        console.error("Error creating user:", error);
                        process.exit(1);
                    }
                });
            });
        });

    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1);
    }
}

createAdmin();
