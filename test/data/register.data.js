const newUser = {
  firstName: 'John',
  lastName: 'Smith',
  email: `${Math.random()}test1@test.com`,
  password: 'qwerty12345',
  phone: '14021234567',
  about: 'about',
  goals: 'goals',
  engLevel: 'Zero'
};

const page = {
  reg: {
    title: 'Progress Monitor',
    h1: 'User Register',
    desc: 'Profiles with fictitious or dummy data will be deleted.',
    btnTxt: 'Submit'
  },
  login: {
    title: 'Progress Monitor',
    h1: 'User Login'
  },
  conf: {
    title: 'Progress Monitor',
    h1: 'You are a new user'
  },
};

module.exports = { newUser, page };
