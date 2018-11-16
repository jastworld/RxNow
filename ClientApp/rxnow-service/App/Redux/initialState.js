export const initialState = {
    profile: {
        hospital: {
            name: 'Ajayi Hospital',
            email: 'ajayihospital@gmail.com',
            phone: '3459083023',
            address: 'Heaven Plaza',
            language: 'Enlish',
            image_url: 'https://i2.wp.com/media.premiumtimesng.com/wp-content/files/2017/02/National-Hospital.jpg',
            ambulanceCount: 10,
            availableStaff: 3,
            availability: [
                { Sunday: '0-23' },
                { Monday: '0-23' },
                { Tuesday: '0-23' },
                { Wednesday: '0-23' },
                { Thursday: '0-23' },
                { Friday: '0-23' },
                { Saturday: '0-23' },
            ]
        },
        isFetchingProfile: false,
        profileError: false,
    },
    patient: {
        profile: {
            name: 'Peter Gitt',
            address: 'One hell of a place',
            distanceAway: '8 miles',

        },
        reason: 'Pregancy',
        destination: {
            name: 'Gabby Hospital',
            address: '12 Main Street, LA, NIG', 
        },
        pcp: {
            name: 'Dr. James Jude',
            hospital: 'XYZ tech',
            address: 'Some place in Lagos',
            phone: '33456778645',
            email: 'jj@jj.jj',
        }
    },
    serviceProvider: {},
};
