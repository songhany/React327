class CounterModel {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count += 1;
  }

  decrement() {
    this.count -= 1;
  }
}

class CounterView {
  constructor() {
    this.count = document.querySelector(".counter__count");
    this.plusBtn = document.querySelector(".counter__plus");
    this.minusBtn = document.querySelector(".counter__minus");
  }

  updateCount(newCount) {
    this.count.innerText = newCount;
  }
}

class CounterController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.init();
  }

  init() {
    this.setupAddEvents();
    this.setupMinusEvents();
  }

  setupAddEvents() {
    this.view.plusBtn.addEventListener("click", (e) => {
      this.addCount();
    });
  }

  setupMinusEvents() {
    this.view.minusBtn.addEventListener("click", (e) => {
      this.minusCount();
    });
  }

  addCount() {
    this.model.increment();
    this.view.updateCount(this.model.count);
  }

  minusCount() {
    this.model.decrement();
    this.view.updateCount(this.model.count);
  }
}


const model = new CounterModel();
const view = new CounterView();
const controller = new CounterController(model, view);
