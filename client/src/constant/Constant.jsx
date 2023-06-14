export const BOOK_CATEGORY = [
    { key : "All", id : 14 },
    { key : "Action and Adventure", id : 1},
    { key : "Biography", id : 2},
    { key : "Business/Economics", id : 3},
    { key : "Classic", id : 4}, 
    { key : "Coding", id : 5},
    { key : "Computer&Internet", id : 6},
    { key : "Crime", id : 7},
    { key : "Drama", id : 8},
    { key : "History", id : 9},
    { key : "Novels", id : 10},
    { key : "Poems", id : 11},
    { key : "Self-Improvement", id : 12},
    { key : "Romance", id : 13}
];

export const BOOK_AUTHOR = [
    { key : "Chetan Bhagat", id : 1},
    { key : "Mark Manson", id : 2},
    { key : "Walter Isaacon", id : 3},
    { key : "Karan Bajaj", id : 4},
    { key : "Matthew Pollard", id : 5},
    { key : "Leil Lowndndes", id : 6},
];

export const BOOK_PUBLISHER = [
    { key : "McGrowHill",  id : 1},
    { key : "Php",  id : 2},
    { key : "Jaico Publishing House",  id : 3},
    { key : "Westland Publications",  id : 4},
    { key : "Roli Books",  id : 5},
]

export const SHIPPING_DETAILS = {
    firstName : "",
    lastName : "",
    gender : "",
    email : "",
    flatNo : "",
    societyName : "",
    streetName : "",
    pinCode : 0,
    city : "",
    street : ""
}

export const SHIPPING_ERROR = {
    firstNameError : false,
    lastNameError : false,
    genderError : false,
    emailError : false,
    flatNoError : false,
    societyNameError : false,
    streetNameError : false,
    pinCodeError : false,
    cityError : false,
    stateError : false
}

export const SHIPPING_ERROR_TEXT = {
    firstNameText : "Please enter your firstname",
    lastNameText : "Please enter your lastname",
    genderText : "Please select your gender",
    emailText : "Please enter your email",
    flatText : "Please enter your flat details",
    societyText : "Please enter your society details",
    streetText : "Please enter your street details",
    pinCodeText : "Please enter your pincode number",
    cityText : "Please select your city",
    stateText : "Please select your state"
}