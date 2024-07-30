const { Schema, model } = require('mongoose');

const HospitalSchema = Schema({

    name: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'USERS'
    }
})

HospitalSchema.method('toJSON', function() {
    
    const { __v, ...object } = this.toObject();
	return object;

});

module.exports = model( 'HOSPITALS', HospitalSchema );