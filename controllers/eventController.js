const { Event } = require("../models");

exports.createEvent = async (req, res) => {
    try {
        if (req.user.role !== "admin") return res.status(403).send("Forbidden");
        const event = await Event.create(req.body);
        res.status(201).send(event);
    } catch (err) {
        res.status(400).send(err);
    }
};

exports.getEvents = async (req, res) => {
    try {
        const events = await Event.findAll();
        res.send(events);
    } catch (err) {
        res.status(400).send(err);
    }
};
