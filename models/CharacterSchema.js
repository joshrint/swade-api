//Character Schema for MongoDB
const mongoose = require('mongoose');

const CharacterSchema = new mongoose.Schema({
    player: String,
    name: String,
    alias: String,
    rank: String,
    languages:String,
    faction:String,

    pace:Number,
    parry:Number,
    toughness:Number,
    reason:Number,
    status:Number,

    agility:Number,
    smarts:Number,
    spirit:Number,
    strength:Number,
    vigor:Number,
    
    skills: [{name:String, rank:Number}],

    gear: [String],
    
    hinderances: [{name:String, description:String}],
    edges:[{name:String, description:String}],

    rippertech:[{name:String, benefit:String}],

    powers:[{name:String, pp:String, range:String, dur:String, effect:String}],

    weapons:[{name:String, range:String, damage:String, ap:String,rof:String, wt:String, notes:String}]

});

module.exports = Character = mongoose.model('character', CharacterSchema);