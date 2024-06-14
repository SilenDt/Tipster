function Restaurant(name, location, rating) {
    this.name = name;
    this.location = location;
    this.rating = rating;
}

Restaurant.prototype.greet = function() {
    return `Hello from ${this.name}, ${this.location}! Our rating: ${this.rating}`;
};

module.exports = Restaurant