const quotes = ['live life, be brave', 'love yourself', 'you can do it', 'keep it up'];


function random(){
    return quotes[Math.floor(Math.random() * quotes.length)];
}
const randomQuotes = random;

module.exports = {
    randomQuotes,
};