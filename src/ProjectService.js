// ProjectService.js
// service functions, to do REST calls

// sample data
const sampleProjects = [
    {
        id: 1,
        title: "Foo bar",
        summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        creator: "bobby123",
        content:
            "> This is a sample project\n\n- item1\n- item2\n  - *subitem1*\n\nEst adipisicing commodo id sit esse in ea consequat consequat qui consectetur amet qui.\n\nPariatur cillum et fugiat do sit exercitation incididunt adipisicing amet ex Lorem qui consectetur amet.",
        tags: "software hardware",
        collaborators: "bsmith@example.com"
    },
    {
        id: 2,
        title: "My Project2",
        summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        creator: "tomboy124",
        content:
            "> This is a sample project\n\n- item1\n- item2\n  - *subitem1*",
        tags: "software hardware",
        collaborators: "bsmith@example.com"
    },
    {
        id: 3,
        title: "My Project3",
        summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        creator: "bobby123",
        content:
            "> This is a sample project\n\n- item1\n- item2\n  - *subitem1*",
        tags: "software hardware",
        collaborators: "bsmith@example.com"
    },
    {
        id: 4,
        title: "My Project4",
        summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        creator: "bobby123",
        content:
            "> This is a sample project\n\n- item1\n- item2\n  - *subitem1*",
        tags: "software hardware",
        collaborators: "bsmith@example.com"
    },
    {
        id: 5,
        title: "My Project5",
        summary:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        creator: "bobby123",
        content:
            "> This is a sample project\n\n- item1\n- item2\n  - *subitem1*",
        tags: "software hardware",
        collaborators: "bsmith@example.com"
    }
];

// functions
export const getSampleProjects = () => {
    return new Promise((resolve, reject) => {
        sampleProjects
            ? resolve(sampleProjects)
            : reject(new Error("Could not load projects"));
    });
};

export const getSampleProject = id => {
    return new Promise((resolve, reject) => {
        if (sampleProjects) {
            sampleProjects.forEach(project => {
                if (+id === project.id) {
                    resolve(project);
                }
            });
        } else {
            reject(new Error("Could not load projects"));
        }
    });
};
