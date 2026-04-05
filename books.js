const books = [
{
id:1,
title:"Rich Dad Poor Dad",
author:"Robert T. Kiyosaki",
url:"https://imgs.search.brave.com/LVAATEFI-icPYpFRHnoRpSikkVuu7p0i62hiuWNPTTo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzYxc09HUEp5Mm9M/LmpwZw",
totalCopies:10,
availableCopies:7
},

{
id:2,
title:"Bhagavad Gita",
author:"Ved Vyasa",
url:"https://imgs.search.brave.com/79uKzDaEeJVd_V78Z7aCMCFYIl8C39tz0NOwyf7p70g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvYmhh/Z2F2YWQtZ2l0YS1h/cy1pdC1pcy1ib29r/LWNvdmVyLWt3N2ps/aGY2cmEyejk1bmku/anBn",
totalCopies:5,
availableCopies:0
},

{
id:3,
title:"48 Laws of Power",
author:"Robert Greene",
url:"https://imgs.search.brave.com/uQZmTEvlaYgGdnxZ5cZhoPeKQcaeGSbktMx8mZTqEIM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFQZkhlZkZxMUwu/anBn",
totalCopies:6,
availableCopies:5
},

{
id:4,
title:"Atomic Habits",
author:"James Clear",
url:"https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
totalCopies:8,
availableCopies:6
},

{
id:5,
title:"The Alchemist",
author:"Paulo Coelho",
url:"https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg",
totalCopies:7,
availableCopies:3
},

{
id:6,
title:"Think and Grow Rich",
author:"Napoleon Hill",
url:"https://m.media-amazon.com/images/I/71UypkUjStL.jpg",
totalCopies:6,
availableCopies:4
},

{
id:7,
title:"Ikigai",
author:"Hector Garcia",
url:"https://m.media-amazon.com/images/I/81l3rZK4lnL.jpg",
totalCopies:9,
availableCopies:7
},

{
id:8,
title:"Sapiens",
author:"Yuval Noah Harari",
url:"https://m.media-amazon.com/images/I/713jIoMO3UL.jpg",
totalCopies:5,
availableCopies:2
},

{
id:9,
title:"The Psychology of Money",
author:"Morgan Housel",
url:"https://m.media-amazon.com/images/I/71g2ednj0JL.jpg",
totalCopies:8,
availableCopies:6
},

{
id:10,
title:"Deep Work",
author:"Cal Newport",
url:"https://imgs.search.brave.com/oCTsirrD-HD_SrSfnKahexXJFKo36FysVOsFcsMhZB8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9rbm93/bGVkZ2Uud2hhcnRv/bi51cGVubi5lZHUv/d3AtY29udGVudC91/cGxvYWRzLzIwMTYv/MDEvTmV3cG9ydF9E/ZWVwV29ya19IQy5q/cGc",
totalCopies:6,
availableCopies:3
},

{
id:11,
title:"The Power of Now",
author:"Eckhart Tolle",
url:"https://imgs.search.brave.com/jFtgexu8a-xWy2W10mxm9WlxM8arYwziP9-oYDKmhQ8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTIuZmxpeGNh/cnQuY29tL2ltYWdl/LzgwMC8xMDcwL3hp/ZjBxL2Jvb2svci9l/L3kvdGhlLXBvd2Vy/LW9mLW5vdy1vcmln/aW5hbC1pbWFoYnYz/anpjd2VtYXloLmpw/ZWc_cT05MA",
totalCopies:4,
availableCopies:2
},

{
id:12,
title:"Can't Hurt Me",
author:"David Goggins",
url:"https://m.media-amazon.com/images/I/81gTRv2HXrL.jpg",
totalCopies:5,
availableCopies:3
},

{
id:13,
title:"The Subtle Art of Not Giving a F*ck",
author:"Mark Manson",
url:"https://m.media-amazon.com/images/I/71QKQ9mwV7L.jpg",
totalCopies:7,
availableCopies:5
},

{
id:14,
title:"Meditations",
author:"Marcus Aurelius",
url:"https://imgs.search.brave.com/5TGtkyUa9uw4hqQ7M1ToaKRWQnq02p_dVr3Ok02kNWg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxenZSMUVyTnZM/LmpwZw",
totalCopies:4,
availableCopies:2
},

{
id:15,
title:"Man's Search for Meaning",
author:"Viktor E. Frankl",
url:"https://imgs.search.brave.com/w0b2AyuQrxXhh5MGOBOVZzpu76xz8z9wZVnk6qMGQ1c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ydWtt/aW5pbTIuZmxpeGNh/cnQuY29tL2ltYWdl/LzI4MC8zNzAveGlm/MHEvYm9vay9mL20v/eC9tYW4tcy1zZWFy/Y2gtZm9yLW1lYW5p/bmctYnktdmlrdG9y/LWUtZnJhbmtsLW9y/aWdpbmFsLWltYWg5/bmpzaHp3a3NjM3Yu/anBlZz9xPTkw",
totalCopies:5,
availableCopies:4
}

];

module.exports = books;