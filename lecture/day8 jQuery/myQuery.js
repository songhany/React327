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
    this.domElem = document.querySelector(query);  
  }

  html(innerHTML) {
    this.domElem.innerHTML = innerHTML
    return this;
  }
  on(eventType, cb) {
    this.domElem.addEventListener(eventType, cb);
    return this;
  }
  show() {
    // domElem.style.display = "block";
    this.domElem.style.removeProperty("display");
    return this;
  }
  addClass(className) {
    this.domElem.classList.add(className);
    return this;
  }
}

const $$ = (query) => {
  const domElem = document.querySelector(query);

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

$$.ajax = (requestObj) => {
  const {url, data, success} = requestObj;
  
  if (data !== undefined) {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(success);
  } else {
    fetch(url)
      .then((res) => res.json())
      .then(success);
  }
}

$$.ajax({
  url: "https://jsonplaceholder.typicode.com/posts",
  // data: {
  //   userId: 1,
  //   title: "Songhan Yu",
  //   body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  // },
  success: (result) => {
    console.log(result);
  },
});

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


// const continueBtn = $$("button.continue")
//   .html("Next Step...")
//   .on("click", () => {
//     console.log("continue");
//   })
//   .addClass("red");

// const hiddenBox = $$("#banner-message");
// const clickBtn = $$("#button-container button").on("click", function (event) {
//   hiddenBox.show();
//   // console.log("event clicked")
// });


// Homework:
// 1. Recreate Jquery on your own
// 2. add three new methods from the API documentation