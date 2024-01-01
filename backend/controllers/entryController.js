import asyncHandler from 'express-async-handler';

import Entry from '../models/entryModel.js';

// @desc    Fetch all entries
// @route   GET /api/journal
// @access  Private
const getEntries = asyncHandler(async (req, res) => {
    const entries = await Entry.find({ userId: req.user._id });
    res.json(entries);
});

// @desc    Fetch single entry
// @route   GET /api/journal/:id
// @access  Private
const getEntryById = asyncHandler(async (req, res) => {
    const entry = await Entry.findById(req.params.id);

    if (entry) {
        if (entry.userId.toString() !== req.user._id.toString()) {
            res.status(403);
            throw new Error('Not authorized');
        }
        res.json(entry);
    }
    else {
        res.status(404);
        throw new Error('Entry not found');
    }
});

// @desc    Create an entry
// @route   POST /api/journal/:userId
// @access  Private
const createEntry = asyncHandler(async (req, res) => {
    const { title, content } = req.body;

    const entry = new Entry({
        title,
        content,
        userId: req.user._id
    });

    const createdEntry = await entry.save();
    res.status(201).json(createdEntry);
});

// @desc    Update an entry
// @route   PUT /api/journal/:userId/:id
// @access  Private
const updateEntry = asyncHandler(async (req, res) => {
    const { title, content } = req.body;

    const entry = await Entry.findById(req.params.id);

    if (entry.userId !== req.user._id) {
        res.status(401);
        throw new Error('Not authorized');
    }

    if (entry) {
        entry.title = title;
        entry.content = content;

        const updatedEntry = await entry.save();
        res.json(updatedEntry);
    }
    else {
        res.status(404);
        throw new Error('Entry not found');
    }
});

// @desc    Delete an entry
// @route   DELETE /api/journal/:userId/entries/:id
// @access  Private
const deleteEntry = asyncHandler(async (req, res) => {
    const entry = await Entry.findByIdAndDelete(req.params.id);

    if (entry.userId !== req.user._id) {
        res.status(401);
        throw new Error('Not authorized');
    }

    if (entry) {
        res.json({ message: 'Entry removed' });
    }
    else {
        res.status(404);
        throw new Error('Entry not found');
    }
});

export {
    getEntries,
    getEntryById,
    createEntry,
    updateEntry,
    deleteEntry
};