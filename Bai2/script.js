var footballClub = [{
        name: "Arsenal",
        points: 99,
        GD: 45
    },
    {
        name: "Chelsea",
        points : 75,
        GD: 39
    },
    {
        name: "Manchester United",
        points : 60,
        GD: 29
    },
    {
        name: "Chelsea",
        points : 88,
        GD: 39
    },
    
];


let arr = [];
for(let i =0; i < footballClub.length; i++) {
    arr.push(footballClub[i].name);
}
var repeatName = arr.filter((item, index) => arr.indexOf(item) !== index);

for(let i =0; i < footballClub.length; i++) {
    if(arr[i] === repeatName) {
        var index = arr.indexOf(repeatName);
        arr.splice(index, 1);
    }
}
