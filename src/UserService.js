// UserService.js
// service functions, to do REST calls

// sample data
const sampleUser = {
    id: -1,
    first: "Bob",
    last: "Smith",
    userName: "bobby123",
    email: "bsmith@test.com",
    bio: "Hi, I'm just a normal guy named bob, I'm super fun I swear...",
    projects: [1, 2]
};

// functions
export const getSampleUser = id => {
    return new Promise((resolve, reject) => {
        if (+id === sampleUser.id) {
            resolve(sampleUser);
        } else {
            reject(new Error("Could not load user"));
        }
    });
};
