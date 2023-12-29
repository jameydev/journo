import mongoose from 'mongoose';

const entrySchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

const Entry = mongoose.model('Entry', entrySchema);

export default Entry;