// $("button.continue")
//   .html("Next Step...")
//   .on("click", () => {
//     console.log("continue");
//   })
//   .addClass("red");

// var hiddenBox = $("#banner-message");
// $("#button-container button").on("click", function (event) {
//   hiddenBox.show();
// });

class MyQuery {
  constructor(query) {
    this.domElements = document.querySelectorAll(query);  
  }

  html(innerHTML) {
    this.domElements.forEach((element) => {
      element.innerHTML = innerHTML;
    })
    return this;
  }
  on(eventType, cb) {
    this.domElements.forEach((element) => {
      element.addEventListener(eventType, cb);
    })
    return this;
  }
  show() {
    this.domElements.forEach((element) => {
      // this.domElements.style.display = "block";
      element.style.removeProperty("display");
    })
    return this;
  }
  addClass(className) {
    this.domElements.forEach((element) => {
      element.classList.add(className);
    });
    return this;
  }


  before(htmlString) {
    const classNameMatchedElements = document.querySelectorAll("." + this.domElements[0].className);
    classNameMatchedElements.forEach((element) => {
      element.insertAdjacentHTML('beforebegin', htmlString);
    });
    return this;
  }

  after(htmlString) {
    const classNameMatchedElements = document.querySelectorAll("." + this.domElements[0].className);
    classNameMatchedElements.forEach((element) => {
      element.insertAdjacentHTML('afterend', htmlString);
    });
    return this;
  }

  prepend(htmlString) {
    const classNameMatchedElements = document.querySelectorAll("." + this.domElements[0].className);
    classNameMatchedElements.forEach((element) => {
      element.insertAdjacentHTML('afterbegin', htmlString);
    });
    return this;
  }

  append(htmlString) {
    const classNameMatchedElements = document.querySelectorAll("." + this.domElements[0].className);
    classNameMatchedElements.forEach((element) => {
      element.insertAdjacentHTML('beforeend', htmlString);
    });
    return this;
  }
}

const $$ = (query) => {
  // const domElem = document.querySelector(query);

  // const jQueryObj = {
  //   html: (innerHTML) => {
  //     domElem.innerHTML = innerHTML
  //     return jQueryObj;
  //   },
  //   on: (eventType, cb) => {
  //     domElem.addEventListener(eventType, cb);
  //     return jQueryObj;
  //   },
  //   show: () => {
  //     // domElem.style.display = "block";
  //     domElem.style.removeProperty("display");
  //     return jQueryObj;
  //   },
  //   addClass: (className) => {
  //     domElem.classList.add(className);
  //     return jQueryObj;
  //   }
  // }

  // return jQueryObj;
  return new MyQuery(query);
}


// $(".inner").before("<p>before</p>");
$$(".inner").before("<p>before</p>");

// $(".inner").after("<p>after</p>");
$$(".inner").after("<p>after</p>");

// $(".inner").prepend("<p>prepend</p>");
$$(".inner").prepend("<p>prepend</p>");

// $(".inner").append("<p>append</p>");
$$(".inner").append("<p>append</p>");


// $$.ajax = (requestObj) => {
//   const {url, data, success} = requestObj;
  
//   if (data !== undefined) {
//     fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(data),
//     })
//       .then((res) => res.json())
//       .then(success);
//   } else {
//     fetch(url)
//       .then((res) => res.json())
//       .then(success);
//   }
// }

// $$.ajax({
//   url: "https://jsonplaceholder.typicode.com/posts",
//   // data: {
//   //   userId: 1,
//   //   title: "Songhan Yu",
//   //   body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
//   // },
//   success: (result) => {
//     console.log(result);
//   },
// });


// $$( "button.continue ")
//   .html("Next Step...")
//   .on("click", ()=> {
//     console.log("continue");
//   })
//   .addClass("red")

// let hiddenBox = $("#banner-message");
// $$("#button-container button").on("click", function(event) {
//   hiddenBox.show();
//   // console.log("event clicked")
// });


const continueBtn = $$("button.continue")
  .html("Next Step...")
  .on("click", () => {
    console.log("continue");
  })
  .addClass("red");

const hiddenBox = $$("#banner-message");
const clickBtn = $$("#button-container button").on("click", function (event) {
  hiddenBox.show();
  // console.log("event clicked")
});



// Homework:
// 1. Recreate Jquery on your own
// 2. add three new methods from the API documentation
// https://stackoverflow.com/questions/14846506/append-prepend-after-and-before#:~:text=before()%20.-,.,The%20vice%2Dversa%20is%20for%20.
// 
// after(htmlString) {
//   const parser = new DOMParser();
//   const htmlElement = parser.parseFromString(htmlString, "text/html").body.firstChild;
//   const classNameMatchedElements = document.querySelectorAll("." + this.domElements.className);
//   classNameMatchedElements.forEach((element) => {
//     // console.log(element);
//     // console.log(element.parentNode);
//     // console.log(element.nextSibling);
//     element.parentNode.insertBefore(htmlElement.cloneNode(true), element.nextSibling);  // use parentNode.insertBefore to insert a cloned version of the new HTML element after it. The insertBefore method takes two arguments: the new element to insert, and the reference node (in this case, the next sibling of the current element). 
//   });
//   return this;
// }
