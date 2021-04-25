import mongoose from 'mongoose';

// Creating a schema for what our API data will have
const entrySchema = mongoose.Schema({
    user: String,
    location: String,
    message: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const UfoEntries = mongoose.model('UfoEntries', entrySchema);

export default UfoEntries;