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
    {
        name: "A",
        points : 88,
        GD: 39
    }
    
];

// trả về array đội bóng không lặp
var arr = [];
var arr2 = []

for(let i =0; i < footballClub.length; i++) {
    arr.push(footballClub[i].name);
}
console.log(arr);

var repeatName = arr.filter((item, index) => arr.indexOf(item) !== index);
for(let i =0; i < arr.length; i++) {
    if(repeatName.includes(arr[i]) == false) {
        arr2.push(arr[i]);
    }
}
var arrFinal = arr2.concat(repeatName);
console.log(arrFinal);

// sắp xếp các câu lạc bộ theo điểm
footballClub.sort(function (club1, club2) {
    return club1.points - club2.points;
});
console.log(footballClub);


