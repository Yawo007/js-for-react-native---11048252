function createUserProfiles(namesArray, modifiedNamesArray) {
    // Array to store user profiles
    let userProfiles = [];

    // Loop through each name in the namesArray
    for (let i = 0; i < namesArray.length; i++) {
        // Create a user profile object
        let userProfile = {
            // Original name from namesArray
            originalName: namesArray[i],
            // Modified name from modifiedNamesArray
            modifiedName: modifiedNamesArray[i],
            // Auto-incremented starting from 1
            id: i + 1
        };
        // Add the user profile object to the userProfiles array
        userProfiles.push(userProfile);
    }

    // Return the array of user profiles
    return userProfiles;
}
