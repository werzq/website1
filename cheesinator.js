const cheesesyfacts = ["All hail the mighty cheese !",
    "chees'in the way",
    "Fact: The most popular cheese recipe in the United States is 'macaroni and cheese.'",
    "Fact: There are around 2,000 varieties of cheese.",
    "Fact: Cheese takes up about 1/10 the volume of the milk it was made from",
    "Good to know: It's Great for Your Teeth",
    "Good to know: Eating Cheese Before Bed Can Help You Sleep",
    "Spoiler: Mice Don't Actually Like Cheese"
];

var dacheez = cheesesyfacts[randomcheese(cheesesyfacts.length)]
document.querySelector('meta[name="description"]').setAttribute("content", dacheez);
document.querySelector('meta[property="og:description"]').setAttribute("content", dacheez);
document.querySelector('meta[property="twitter:description"]').setAttribute("content", dacheez);

function randomcheese(swiss) {
    let cheddar = Math.random() * swiss;
    cheddar = Math.floor(cheddar);
    return cheddar;
}