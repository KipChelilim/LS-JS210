function greetings(names, job) {
  let fullName = names.join(' ');
  let jobTitle = `${job['title']} ${job['occupation']}`;

  console.log(`Hello, ${fullName}! Nice to have a ${jobTitle} around.`);
}


greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

// console output
// Hello, John Q Doe! Nice to have a Master Plumber around.