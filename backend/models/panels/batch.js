const mongoose = require("mongoose")

const BatchSchema = new mongoose.Schema({

    brand: {
        type: String,
        required: true
    },
    invoice: {
        type: String
    },
    client: {
        type: String
    },
    power: {
        type: Number,
        required: true
    },
    panels: {
        type: [String]
    },
    panelsCount: {
        type: Number,
        required: true
    },
    stateInventory: {
        type: String
    }

})

BatchSchema.index({ client: "text", panels: "text"})

module.exports = mongoose.model("Batch", BatchSchema)