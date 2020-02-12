module.exports = {
  firstName: 'Bob',
  lastName: 'Smith',
  phone: '13471234567',
  password: 'qwerty12345',
  engLevel: 'Zero',
  generateRandomEmailAddress : function() {
    const emailAddress = "test_" + Math.random().toString().replace('0.', '') + "@testing.com";
    return emailAddress;
  },
  generateRandomString : function() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  },
};
