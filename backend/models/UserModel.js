const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');


// --- SCHEMA --- //
//creating schemas
const Schema = mongoose.Schema;

//creating activity schema
const activitySchema = new Schema(
    {
        name: { type: String, required: true },
        date: { type: Date, required: true },
        duration: {
            type: Number,
            required: true,
            min: 1, 
            max: 1440, 
            validate : {
                validator : Number.isInteger,
                message   : 'This must be an integer value'
            } 
        },
        calories: {
            type: Number,
            required: true,
            min: 1,
            max: 999,
            validate : {
                validator : Number.isInteger,
                message   : 'This must be an integer value'
            }
        }
    }
)

//creating meal schema
const mealSchema = new Schema({
    name: { type: String, required: true },
    date: { type: Date, required: true },
    calories: {
        type: Number,
        required: true,
        min: 1,
        max: 999,
        validate : {
            validator : Number.isInteger,
            message   : 'This must be an integer value'
        }
    },
    carbs: {
        type: Number,
        min: 1,
        max: 999,
        validate : {
            validator : Number.isInteger,
            message   : 'This must be an integer value'
        }
    },
    fats: {
        type: Number,
        min: 1,
        max: 999,
        validate : {
            validator : Number.isInteger,
            message   : 'This must be an integer value'
        }
    },
    proteins: {
        type: Number,
        min: 1,
        max: 999,
        validate : {
            validator : Number.isInteger,
            message   : 'This must be an integer value'
        }
    }
})
//creating schema for user
const userSchema = new Schema(
    {
        email:          { type: String, required: true, unique: true },
        password:       { type: String, required: true },
        birthDate:      { type: Date },
        firstName:      { type: String },
        lastName:       { type: String },
        weight:         { type: Number, min: 1, max: 999, validate : { validator : Number.isInteger, message   : 'This must be an integer value'} },
        height:         { type: Number, min: 1, max: 300, validate : { validator : Number.isInteger, message   : 'This must be an integer value'} },
        gender:         { type: String },
        profilePhoto:   {type: String, default: '..\\frontend\\public\\uploads\\profile-placeholder-01.png' },
        meals:          { type: [mealSchema], default: undefined },
        activities:     { type: [activitySchema], default: undefined }
    },
);


// --- REGISTER --- //
//making a static method on User to register them - register method
//apparently you cannot use arrow function '() => {}' when creating a method, only regular function 'function() {}',
//otherwise you cannot use 'this'
userSchema.statics.register = async function(email, password) {
    //--- VALIDATING --- ///
    if (!email || !password ) {
        throw Error('All fields must be filled.');
    }
    if (!validator.isEmail(email)) {
        throw Error('Please provide a valid e-mail address.');
    }
    //validator default options for password
    //{ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1, 
    //returnScore: false, pointsPerUnique: 1, pointsPerRepeat: 0.5, pointsForContainingLower: 10, 
    //pointsForContainingUpper: 10, pointsForContainingNumber: 10, pointsForContainingSymbol: 10 }
    if (!validator.isStrongPassword(password)) {
        throw Error('Please provide a password consisting of at least 8 characters, with at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 symbol.')
    }
    //checking if this email exists in the database
    const exist = await this.findOne({ email })
    if (exist) {
        throw Error('E-mail already in use.');
    };
    //hashing password using bcrypt
    //adding additional layer not to hash the same passwords in the same way
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    //creating a new user with email, verified age and hashed password
    const user = await this.create({ 
        email: email, 
        password: hash
    });
    return user 
}

// --- LOGIN --- //
//making a static method on User to login
userSchema.statics.login = async function(email, password) {
    //making sure both email&passwords are provided
    if (!email || !password) {
        throw Error('All fields must be filled.')
    };
    //checking if the user exists in the database
    const user = await this.findOne({ email });
    if (!user) {
        throw Error('Incorrect email')
    };
    //checking password & email - comparing input password with encrypted user password
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        throw Error('Invalid login credentials.')
    };
    return user
};


// --- MODEL EXPORT --- //
//creating a model from schema
module.exports = mongoose.model('User', userSchema);