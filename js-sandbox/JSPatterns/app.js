// Basic structure

(function() {
  // Declare private vars and functions

  return {
    // Declare public vars and functions
  }
})

// STANDARD MODULE PATTERN
const UIctrl = (function() {
  let text = 'Hello World';

  const changeText = function() {
    const element = document.querySelector('h1');
    element.textContent = text;
  }

  return {
    callChangeText: function() {
      changeText();
    }
  }
})();

UIctrl.callChangeText();

// REVEALING MODULE PATTERN
const itemCtrl = (function() {
  let data = [];

  function add(item) {
    data.push(item);
  }

  function get(id) {
    return data.find(item => item.id === id);
  }

  // "reveal" methods in the returned object literal
  return {
    add: add,
    get: get
  }
})();

itemCtrl.add({id: 1, name: 'John'});
itemCtrl.add({id: 2, name: 'Jim'});
itemCtrl.add({id: 3, name: 'James'});

// SINGLETON PATTERN
const Singleton = (function() {
  let instance;

  function createInstance() {
    // const object = new Object('Object instance');
    const object = {key: 'Azs726hxnuez86', id: 35};
    return object;
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance()
      }
      return instance;
    }
  }
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();
const instanceC = Singleton.getInstance();
const instanceD = Singleton.getInstance();
//console.log(instanceA === instanceD);

// FACTORY PATTERN
function MemberFactory() {
  this.createMember = function(name, type) {
    let member;
    if (type === 'simple') {
      member = new SimpleMembership(name);
    } else if (type === 'standard') {
      member = new StandardMembership(name);
    } else if (type === 'super') {
      member = new SuperMembership(name);
    }

    member.type = type;
    member.define = function() {
      console.log(`${this.name} ${this.type}: ${this.cost}`);
    }
    return member;
  }
}

const SimpleMembership = function(name) {
  this.name = name;
  this.cost = '$5';
}
const StandardMembership = function(name) {
  this.name = name;
  this.cost = '$15';
}
const SuperMembership = function(name) {
  this.name = name;
  this.cost = '$25';
}

const members = [];
const factory = new MemberFactory();
members.push(factory.createMember('Neil', 'simple'));
members.push(factory.createMember('Ned', 'super'));
members.push(factory.createMember('Noel', 'standard'));

// members.forEach(function(member) {
//   member.define();
// });

// OBSERVER PATTERN
// ES5 prototypical inheritance
// function EventObserver() {
//   this.observers = [];
// }

// EventObserver.prototype = {
//   subscribe: function(fn) {
//     this.observers.push(fn);
//     console.log(`You are now subscribed to ${fn.name}`);
//   },
//   unsubscribe: function(fn) {
//     this.observers = this.observers.filter(item => item !== fn);
//     console.log(`You are now unsubscribed from ${fn.name}`);
//   },
//   fire: function() {
//     this.observers.forEach(observer => observer.call());
//   }
// }

// ES6 classes!
class EventObserver {
  constructor() {
    this.observers = [];
  }
  
  subscribe(fn) {
      this.observers.push(fn);
      console.log(`You are now subscribed to ${fn.name}`);
    }

  unsubscribe(fn) {
      this.observers = this.observers.filter(item => item !== fn);
      console.log(`You are now unsubscribed from ${fn.name}`);
    }

  fire() {
      // this.observers.forEach(observer => observer.call());
      this.observers.forEach(observer => observer());
    }
}

// Click handlers
const getMilliseconds = () => 
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);

const getSeconds = () => 
  console.log(`Current Seconds: ${new Date().getSeconds()}`);


// Gather elements
const click = new EventObserver();
const subMS = document.querySelector('.sub-ms');
const unsubMS = document.querySelector('.unsub-ms');
const subS = document.querySelector('.sub-s');
const unsubS = document.querySelector('.unsub-s');
const fireBtn = document.querySelector('.fire');

// Event Listeners 
subMS.addEventListener('click', () => click.subscribe(getMilliseconds));
unsubMS.addEventListener('click', () => click.unsubscribe(getMilliseconds));
subS.addEventListener('click', () => click.subscribe(getSeconds));
unsubS.addEventListener('click', () => click.unsubscribe(getSeconds));
fireBtn.addEventListener('click', () => click.fire());

// MEDIATOR PATTERN
const User = function(name) {
  this.name = name;
  this.chatroom = null;
}

User.prototype = {
  send: function(message, to) {
    this.chatroom.send(message, this, to);
  },
  receive: function(message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
    
  }
}

const Chatroom = function() {
  let users = {};
  console.log(users);
  
  return {
    register: function(user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function(message, from, to) {
      if (to) {
        // Single user message
        to.receive(message, from);
      } else {
        // Mass message
        for (key in users) {
          if (users[key] !== from) {
            users[key].receive(message, from);
          }
        }
      }
    }
  }
}

const neil = new User('Neil');
const nancy = new User('Nancy');
const mim = new User('Mim');

const chatroom = new Chatroom();

chatroom.register(neil);
chatroom.register(nancy);
chatroom.register(mim);

neil.send('Hello Nancy', nancy);
nancy.send('Hello Mim', mim);
mim.send('Hello everyone');