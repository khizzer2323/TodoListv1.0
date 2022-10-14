

module.exports.getDate = ()=> {
    const today = new Date();
    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'

    }
    let day = today.toLocaleDateString("en-US", options);
    return day;
}

// here i am using shortcut in the upper function the working is same but this is a little bit shorter to write.
exports.getDay = ()=> {
    const today = new Date();
    let options = {
        weekday: 'long'
    }

    // to make code shorter you can simply write return today.toLocalDateString("eng-us",options)
    let day = today.toLocaleDateString("en-US", options);
    return day;

}