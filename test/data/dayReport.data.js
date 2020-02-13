module.exports = {
  header: 'Create day report',
  marks: 'Marks to your daily report',
  morale: '9',
  hours: '9',
  generateRandomString : function() {
    return `Testing ${Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)} Testing`;
  },
};
