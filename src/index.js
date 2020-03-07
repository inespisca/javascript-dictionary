// api
var dictionary = [
    {
        word: "Apple",
        searchWord: "apple",
        def: "A round fruit with seeds at its center",
        rel: ["mango", "pear", "guava"]
    },
    {
        word: "Baby",
        searchWord: "baby",
        def: "The young one of a human",
        rel: ["child", "toddler", "teen"]
    },
    {
        word: "Car",
        searchWord: "car",
        def: "Transports people from place to place",
        rel: ["bus", "bicycle", "truck"]
    },
    {
        word: "Computer",
        searchWord: "computer",
        def: "An electronic device",
        rel: ["laptop", "tablet", "palmtop"]
    },
    {
        word: "Mosquito",
        searchWord: "mosquito",
        def: "An insect",
        rel: ["ant", "beetle", "butterfly"]
    },
];

// words for the sidebar
function init(){
    for (var i = 0; i < dictionary.length; i++) {
        document.getElementById('word_list').innerHTML += "<li onclick='show(" + i + ")'>" + dictionary[i].word + "</li>";
    }
}

// calls the init when the page loads
init();

// displays the content: word, its definition and the related words
function show(i){
    document.getElementById('word_text').innerHTML = dictionary[i].word;
    document.getElementById('definition').innerHTML = dictionary[i].def;
    document.getElementById('related').innerHTML = dictionary[i].rel;
}

// show first word when the page loads
show(0);

// search function
function search(){
    query = document.getElementById('search').value;
    if (query == "") {
        return;
    }
    found = -1;

    for (var i = 0; 1 < dictionary.length; i++) {
        if (query == dictionary[i].searchWord) {
            found = i;
            break;
        } else {
            document.getElementById('word_text').innerHTML = "Word not found";
            document.getElementById('definition').innerHTML = "Definition not found";
            document.getElementById('related').innerHTML = "Related words not found";
        }
    }
    
    if (found >= 0) {
        show(found);
    }
}