const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models");

exports.signup = async (req, res) => {
    try {
        const { email, password, role } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ email, password: hashedPassword, role });
        res.status(201).send({ message: "User created", user });
    } catch (err) {
        res.status(400).send(err);
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).send("Invalid credentials");
        }

        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET);
        res.send({ token });
    } catch (err) {
        res.status(400).send(err);
    }
};
