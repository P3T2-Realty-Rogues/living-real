const db = require('./connection');
const { User, Property, Maintenance } = require('../models');

db.once('open', async () => {
  await Property.deleteMany();

  const properties = await Property.insertMany([
    {
      propertyName: "Home 1",
      propertyType: "Single Family Home",
      streetAddress: "8 nowhere ave",
      city: "Austin",
      state: "Texas",
      zipCode: 1,
      sqFeet: 2000,
      numBathrooms: 2.5,
      numBedroom: 4,
      balcony: true,
      pool: false,
      rent: 2500,
      petDeposit: 300,
      renterDeposit: 100,
      appFee: 50,
      availability: true,
      directoryName: "home1",
      pictures: [
          "attic-office.jpg",
          "backyard.jpg",
          "bathroom1.jpg",
          "bathroom2.jpg",
          "bedroom1.jpg",
          "bedroom2.jpg",
          "kitchen.jpg",
          "livingroom.jpg"
      ],
      ownerInfo: {
        mortgage: 1200,
        propertyTaxes: 375,
        propertyInsurance: 250,
        tenant: [],
      },
    },
    {
      propertyName: "Home 2",
      propertyType: "duplex",
      streetAddress: "9 nowhere ave",
      city: "Austin",
      state: "Texas",
      zipCode: 2,
      sqFeet: 1000,
      numBathrooms: 25.1,
      numBedroom: 4,
      balcony: true,
      pool: true,
      rent: 200,
      petDeposit: 3100,
      renterDeposit: 1050,
      appFee: 350,
      availability: true,
      directoryName: "home2",
      pictures: [
        "backyard.jpg",
        "bathroom1.jpg",
        "bathroom2.jpg",
        "bedroom1.jpg",
        "bedroom2.jpg",
        "bedroom3.jpg",
        "game-room.jpg",
        "garage.jpg",
        "halfbath.jpg",
        "kitchen1.jpg",
        "livingroom.jpg"
      ],
      ownerInfo: {
        mortgage: 1250,
        propertyTaxes: 410,
        propertyInsurance: 315,
        tenant: [],
      },
    },
    {
      propertyName: "Home 3",
      propertyType: "loft",
      streetAddress: "10 nowhere ave",
      city: "Austin",
      state: "Texas",
      zipCode: 3,
      sqFeet: 4000,
      numBathrooms: 12.5,
      numBedroom: 1,
      balcony: false,
      pool: false,
      rent: 500,
      petDeposit: 200,
      renterDeposit: 100,
      appFee: 150,
      availability: true,
      directoryName: "home3",
      pictures: [
        "backyard.jpg",
        "bathroom1.jpg",
        "bathroom2.jpg",
        "bedroom1.jpg",
        "bedroom2.jpg",
        "bedroom3.jpg",
        "garage.jpg",
        "halfbath.jpg",
        "kitchen.jpg",
        "livingroom.jpg",
        "media-game-room.jpg"
      ],
      ownerInfo: {
        mortgage: 1050,
        propertyTaxes: 450,
        propertyInsurance: 300,
        tenant: [],
      },
    },
  ]);

  console.log('Properties seeded');

  await User.deleteMany();

  await User.create({
    firstName: "ted",
    lastName: "Admin",
    email: "ted@email.com",
    phoneNumber: "455-555-5555",
    password: "test1234",
    adminFlag: true,
    tenantData: {}
  });

  await User.create({
    firstName: "guy",
    lastName: "renter",
    email: "guy@email.com",
    phoneNumber: "555-555-5555",
    password: "test1234",
    adminFlag: false,
    tenantData: {
      activeTenant: true,
      leaseDate: "1/11/1111",
    },
  });

  console.log('users seeded');

  process.exit();
});
