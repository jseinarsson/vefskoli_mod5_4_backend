import UfoEntries from '../models/ufoEntries.js'

// RETRIEVE ENTRIES FROM DATABASE
export const getEntries = async (req, res) => {
    try {
        const entryData = await UfoEntries.find();

        res.status(200).json(entryData);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// CREATE NEW ENTRY
export const createEntry = async (req, res) => {
    const entry = req.body;
    const newEntry = new UfoEntries(entry);

    try {
        await newEntry.save();

        res.status(201).json(newEntry);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}