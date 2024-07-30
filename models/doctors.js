const { Schema, model } = require('mongoose');

const DoctorSchema = Schema({

    name: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'USERS',
        required: true
    },
    hospital: {
        type: Schema.Types.ObjectId,
        ref: 'HOSPITALS',
        required: true
    }
})

DoctorSchema.method('toJSON', function() {
    
    const { __v, ...object } = this.toObject();
	return object;

});

module.exports = model( 'DOCTORS', DoctorSchema );