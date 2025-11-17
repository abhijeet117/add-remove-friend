const people = [
  {
    name: "Arjun Sharma",
    gender: "male",
    imgs: "https://plus.unsplash.com/premium_photo-1674128810658-b3dd02458779?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWVzdGhldGljJTIwYm95fGVufDB8fDB8fHww",
  },
  {
    name: "Rohit Patel",
    gender: "male",
    imgs: "https://images.unsplash.com/photo-1526116977494-90748acc0cad?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWVzdGhldGljJTIwYm95fGVufDB8fDB8fHww",
  },
  {
    name: "Vikram Singh",
    gender: "male",
    imgs: "https://unsplash.com/photos/silhouette-of-person-with-black-hair-4g0icUXh7FU",
  },
  {
    name: "Manish Gupta",
    gender: "male",
    imgs: "https://images.unsplash.com/photo-1479048266730-bbbfa1c246ac?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWVzdGhldGljJTIwYm95fGVufDB8fDB8fHww",
  },
  {
    name: "Hemant Joshi",
    gender: "male",
    imgs: "https://plus.unsplash.com/premium_photo-1674343617855-50adfbd6a48f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
  },
  {
    name: "Rahul Mehta",
    gender: "male",
    imgs: "https://plus.unsplash.com/premium_photo-1731385782756-a64b6d8a003c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
  },
  {
    name: "Amit Verma",
    gender: "male",
    imgs: "https://plus.unsplash.com/premium_photo-1760657044197-87f0114b2663?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
  },
  {
    name: "Siddharth Rao",
    gender: "male",
    imgs: "https://plus.unsplash.com/premium_photo-1760657044193-2dd541a51b67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMyfHx8ZW58MHx8fHx8",
  },
  {
    name: "Karan Iyer",
    gender: "male",
    imgs: "https://plus.unsplash.com/premium_photo-1674343618059-926174e2c9b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU5fHx8ZW58MHx8fHx8",
  },
  {
    name: "Sameer Khanna",
    gender: "male",
    imgs: "https://plus.unsplash.com/premium_photo-1731355246208-4eb2b30cbd93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDczfHx8ZW58MHx8fHx8",
  },
  {
    name: "Aishwarya Singh",
    gender: "female",
    imgs: "https://plus.unsplash.com/premium_photo-1674129331208-8074ae5f61cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
  },
  {
    name: "Priya Kapoor",
    gender: "female",
    imgs: "https://plus.unsplash.com/premium_photo-1731355900491-beebf2bea6dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
  },
  {
    name: "Ananya Sharma",
    gender: "female",
    imgs: "https://plus.unsplash.com/premium_photo-1674129670435-9a4fde1aa1ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
  },
  {
    name: "Radhika Patel",
    gender: "female",
    imgs: "https://plus.unsplash.com/premium_photo-1664541336945-52478892eeb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI3fHx8ZW58MHx8fHx8",
  },
  {
    name: "Saanvi Rao",
    gender: "female",
    imgs: "https://plus.unsplash.com/premium_photo-1670904480376-c244e5d557ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI5fHx8ZW58MHx8fHx8",
  },
  {
    name: "Sneha Mehta",
    gender: "female",
    imgs: "https://plus.unsplash.com/premium_photo-1732046304535-a875446f9ce2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM1fHx8ZW58MHx8fHx8",
  },
  {
    name: "Diya Verma",
    gender: "female",
    imgs: "https://plus.unsplash.com/premium_photo-1698405202949-1313de4a437d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM4fHx8ZW58MHx8fHx8",
  },
  {
    name: "Kavya Joshi",
    gender: "female",
    imgs: "https://plus.unsplash.com/premium_photo-1731263165066-7281e2fb06a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQzfHx8ZW58MHx8fHx8",
  },
  {
    name: "Nandini Iyer",
    gender: "female",
    imgs: "https://plus.unsplash.com/premium_photo-1750780148071-9661028dbbe4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU0fHx8ZW58MHx8fHx8",
  },
  {
    name: "Tara Khanna",
    gender: "female",
    imgs: "https://plus.unsplash.com/premium_photo-1731312363403-9cf1f70bdc9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU1fHx8ZW58MHx8fHx8",
  },

  {
    name: "Lakshmi Rao",
    gender: "female",
    imgs: "https://plus.unsplash.com/premium_photo-1674327105352-bc9be02b1ecd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDYwfHx8ZW58MHx8fHx8",
  },
  {
    name: "Meera Singh",
    gender: "female",
    imgs: "https://plus.unsplash.com/premium_photo-1742909971085-f2a46d79294b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDcxfHx8ZW58MHx8fHx8",
  },

  {
    name: "Yash Vardhan",
    gender: "male",
    imgs: "https://plus.unsplash.com/premium_photo-1738692725628-32e847b0b1d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDkxfHx8ZW58MHx8fHx8",
  },
  {
    name: "Ravi Kumar",
    gender: "male",
    imgs: "https://plus.unsplash.com/premium_photo-1738774437374-7a3ea5f50a47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwNHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Pankaj Sharma",
    gender: "male",
    imgs: "https://plus.unsplash.com/premium_photo-1667680760914-e2bea1e1e35d?q=80&w=1185&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

let card = document.querySelector(".card");
let img = document.querySelector("img");
let uName = document.querySelector("h2");

let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");

btn2.addEventListener("click", function () {
  let randomGuess = Math.floor(Math.random() * people.length);

  uName.innerHTML = `${people[randomGuess].name}`;

  img.src = `${people[randomGuess].imgs}`;
  uName.innerHTML = `${people[randomGuess].name}`;

  if(`${people[randomGuess].gender}` === "male") {
    card.style.border = '0.2rem solid #2964D6';
    img.style.border = '0.2rem solid #2964D6';
  } else {
    card.style.border = '0.2rem solid #cf6dfc';
    img.style.border = '0.2rem solid #cf6dfc';
  }
});


