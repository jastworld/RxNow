export const initialState = {
    profile: {
        user: {
            name: 'John Doe',
            email: 'john.doe@gmail.com',
            address: '1 Heaven\'s  Gate, Brooklyn, NY, 11233',
            phone: '+2348012345678',
            dob: 'Thu Dec 08 1994',
            language: 'english',
            image_url: 'https://i.huffpost.com/gen/1233007/thumbs/o-BUSINESSMAN-ON-CELL-PHONE-facebook.jpg',
        },
        isFetchingProfile: false,
        profileError: false,
    },
    pcp: {
        pcpInfo: {
            name: 'James Doe',
            email: 'jdoe@hospital.com',
            phone: '000000000',
            specialization: 'Family Medicine',
            hospital: 'St. James',
            hospitalAddress: '14 Nicole\'s Rd, Stony Brook, NY',
        },
        pcpError: false,
        isFetchingPCP: false,
    },
    auth: {
        isFetching: false,
        isLoggedIn: false,
        token: '',
        _id: '',
        error: false,
    },
    healthIssues: {
        isFetchingHealthInfo: false,
        healthInfoError: false,
        healthList: [
            {
                id: 1,
                name: 'High Blood Pressure',
            },
            {
                id: 2,
                name: 'Diabetes',
            },
        ],
    },
    nextOfKin: {
        info: {
            name: 'Alexa Doe',
            email: 'adoe@gmail.com',
            phone: '+2345678890845',
            address: '1 Heaven\'s  Gate, Brooklyn, NY, 11233',
        },
        isFetching: false,
        error: false,
    },
};
