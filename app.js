


const url = 'https://api.coincap.io/v2/assets?limit=10'


function fetchData(){
    axios.get(url).then(function(response){
        //const res = response;
        //const data = response.data;
        const dataData = response.data.data;

        for(let i =0; i < dataData.length; i++){
            console.log(`${i+1}. ${dataData[i].name}: $${dataData[i].priceUsd}`);
        }
        //console.log(res);
        //console.log(data);
        console.log(dataData);
        /*if (data.length > 0){
            console.log('data exists');
        }
        else{
            console.log ('no data');
        }*/
    }).catch(function (error){
        console.log(error)
    });
}

fetchData();

const interval = setInterval(fetchData, 5000);
/*var people = [
    { name: "John", age: 30, city: "New York" },
    { name: "Alice", age: 25, city: "Los Angeles" },
    { name: "Bob", age: 35, city: "Chicago" },
    { name: "Eva", age: 28, city: "San Francisco" }
];

for (const element of people){
    console.log(people[0]);
}*/