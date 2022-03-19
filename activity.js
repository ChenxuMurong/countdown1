
/* Beginner Challenge */

/* Do all of these using proper ES6 syntax
Using the following array of objects,
(1) Write an arrow function that adds a new entry to bookList
(2) Write an arrow function that removes a specific book from the bookList
(3) Write an arrow function that lists out all the books or all the authors in the book list */

const bookList = [
    { title: "Don Quixote", author: "Miguel de Cervantes" },
    { title: "Ulysses", author: "James Joyce" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "Moby Dick", author: "Herman Melville" },
  ];

  const addEntryToBookList = (book) => {bookList.push(book)};
  const removeEntryToBookList = (book) => {bookList.splice(bookList.indexOf(book),1)};
  const listOutBookList = () => {
      for (book in bookList){
            console.log(`${book.title} by ${book.author}`);
      }
  };

  /* Intermediate Challenge */
  
  /* (4) Write a one-line arrow function that takes in a number and returns a string stating whether the
    number is positive or negative using a ternary operator (assume the number will never be zero) */
  
  const positiveOrNegative = (num) => {num > 0? "positive" : "negative"};

  /* (5) Write a switch statement for a 'day' variable that prints out something based off of what day of
    the week it is
    i.e. if it's Monday, print "good luck" or wednesday print "hump day" or friday print "party" */
  const dayOfTheWeekComment = (day) => {
      switch (day) {
          case "Monday":
              console.log("good luck");
              break;
          case "Tuesday":
              console.log("keep working");
              break;
          case "Wednesday":
              console.log("hump day");
              break;
          case "Thursday":
              console.log("happy day");
              break;
          case "Friday":
              console.log("Party");
              break;
          case "Saturday":
              console.log("keep partying");
              break;
          case "Sunday":
              console.log("party harder before work");
              break;
                  
          default:
              console.log("Please give me a valid day of the week");
              break;
      }
  }
  /* (6) Write an arrow function that takes in a number, and uses a for loop to return the sum of every
    number from 1 up to that number
    ex. sumUp(7) = 28 */
  
  const addUpTo = (num) => {
      let result = 0;
      for (let i = 1; i <= num; i++){
        result += i;
      }
      console.log(result);
  }

  /* Harder Challenge */

  /* (7) Write an arrow function that converts the temperature from Celsius to Fahrenheit and then tells
    me what I should wear accordingly */
    const tempWearRecommendation = (tempInCelsius) => {
      console.log(`${tempInCelsius*1.8+32} F`);
      if (tempInCelsius < -10){
          console.log("Wear at least a coat, a woolen sweater, warm pants, and a pair of boots.");
      }
      else if (tempInCelsius <= 0 && tempInCelsius > -10){
          console.log("Wear at least a woolen sweater, warm shirts, warm pants, and a pair of boots.");
      }
      else if (tempInCelsius <= 10 && tempInCelsius > 0){
          console.log("Wear at least a tracksuit, a shirt, and warm pants.");
      }
      else if (tempInCelsius <= 20 && tempInCelsius > 10){
          console.log("Wear a tshirt if its hot outside. Otherwise wear a shirt with long sleeves just to stay warm. Wear cool pants.");
      }
      else if (tempInCelsius <= 30 && tempInCelsius > 20){
          console.log("Wear tshirt and shorts or skirts.");
        }
        else{
          console.log("Going out not advised due to the heat.");
      }
  };

//   tempWearRecommendation(32);

  /* (8) Write a function that takes in an array and prints out the amount of truthy values in that array
    using .forEach() */
  
  const exampleArray = ["Hello, world!", 8, null, false, "", "0", -22];

  const numberOfTruthyValues = (arr) => {
      let num = 0;
      arr.forEach(element => {
          if (element)
            num++;
      });
      console.log(num);
  }
  
  /* (9) Using the map function and arrow syntax, return an array of object that contain a fullName field
    and an averageGrade field representing the letter grade that corresponds to their GPA */
  
  const attendance = [
    { firstName: "Clay", lastName: "Tondreau", gpa: 4.0 },
    { firstName: "Tucker", lastName: "Wilson", gpa: 2.0 },
    { firstName: "Eliza", lastName: "Tobin", gpa: 3.7 },
    { firstName: "Sofia", lastName: "Ackerman", gpa: 1.1 },
    { firstName: "Thomas", lastName: "Beddow", gpa: 2.3 },
    { firstName: "Jackson", lastName: "Wolf", gpa: 4.0 },
    { firstName: "Jared", lastName: "Nguyen", gpa: 4.0 },
  ];

  /* Hardest Challenge (Don't do this without completing harder challenges) */

  /* Write a function that solves the "every number eventually equals 4" puzzle. The output should be
    an array of the path you took to make it equal four
    ex/ [11, 6, 3, 5, 4], [19, 8, 5, 4] or [252, 18, 8, 5, 4]
    For context: https://puzzling.stackexchange.com/questions/29137/every-number-eventually-equals-4 */