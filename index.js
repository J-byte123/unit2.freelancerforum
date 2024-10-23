const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

// Initial freelancers
const initialFreelancers = [
  { name: "Alice", occupation: "writer", price: 30 },
  { name: "Bob", occupation: "teacher", price: 50 },
];

// Combine initial freelancers with the original list
let allFreelancers = [...freelancers, ...initialFreelancers];

// Function to calculate and display the average price
function updateAveragePrice() {
  const total = allFreelancers.reduce(
    (sum, freelancer) => sum + freelancer.price,
    0
  );
  const average = total / allFreelancers.length;
  document.getElementById(
    "average-price"
  ).textContent = `Average Starting Price: $${average.toFixed(2)}`;
}

// Function to display freelancers on the page
function displayFreelancers() {
  const freelancerList = document.getElementById("freelancer-list");
  freelancerList.innerHTML = ""; // Clear existing list
  allFreelancers.forEach((freelancer) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${freelancer.name} - ${freelancer.occupation} - $${freelancer.price}`;
    freelancerList.appendChild(listItem);
  });
}

// Function to add a new freelancer
function addFreelancer(name, occupation, price) {
  allFreelancers.push({ name, occupation, price });
  displayFreelancers();
  updateAveragePrice();
}

// Initial display
displayFreelancers();
updateAveragePrice();

// Simulate adding new freelancers every few seconds
setInterval(() => {
  const newFreelancer = { name: "Carol", occupation: "programmer", price: 70 };
  addFreelancer(
    newFreelancer.name,
    newFreelancer.occupation,
    newFreelancer.price
  );
}, 5000); // Adjust the interval as needed
