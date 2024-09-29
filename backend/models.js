const users = [
    {
        name: "rinaldo",
        email: "rinaldo@mail.com"
    },
    {
        name: "arthun",
        email: "arhur@mail.com"
    }
]

const providerDataArray = [
    {
        id: 101,
        name: "Provider One",
        type: "Fiber",
        speed: "500 Mbps",
        coverageArea: ["City A", "City B", "City C"],
        price: 49.99,
        ratings: 4.5,
        contact: {
            phone: "+1234567890",
            email: "contact@providerone.com",
            website: "https://www.providerone.com"
        },
        support: {
            phone: "+1234567899",
            email: "support@providerone.com"
        }
    },
    {
        id: 102,
        name: "Provider Two",
        type: "DSL",
        speed: "100 Mbps",
        coverageArea: ["City D", "City E"],
        price: 39.99,
        ratings: 4.0,
        contact: {
            phone: "+0987654321",
            email: "contact@providertwo.com",
            website: "https://www.providertwo.com"
        },
        support: {
            phone: "+0987654322",
            email: "support@providertwo.com"
        }
    },
    {
        id: 103,
        name: "Provider Three",
        type: "Satellite",
        speed: "50 Mbps",
        coverageArea: ["Rural Area X", "Rural Area Y"],
        price: 59.99,
        ratings: 3.8,
        contact: {
            phone: "+1122334455",
            email: "contact@providerthree.com",
            website: "https://www.providerthree.com"
        },
        support: {
            phone: "+1122334456",
            email: "support@providerthree.com"
        }
    }
];

module.exports = {
    users,
    providerDataArray
};
