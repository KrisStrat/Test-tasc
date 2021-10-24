
class UrlObj {
  constructor(obj) {
    this.hash = obj.hash;
    this.pathname = obj.pathname;
    this.hostname = obj.hostname;
  }
}

let x = new UrlObj ('https://learn.javascript.ru');
console.log(x.hash);
console.log(x.pathname);
console.log(x.hostname);


//alternative answer

let x = new URL('https://learn.javascript.ru/class?fbclid=IwAR18OmAaYL4pDWdS3vvFSXV0w7xWVVUu9W7kire9pVd-fO2KMYotqHGqaZs');
function ParseUrl () {
  console.log(x.hash);
  console.log(x.hostname);
  console.log(x.pathname);
}

ParseUrl (x);
