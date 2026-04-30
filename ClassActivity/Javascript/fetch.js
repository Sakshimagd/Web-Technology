//imp
//fetch is a built in js method used to make HTTP requets
//fetch method return promises

//syntax:return promises
// fetch('url')

fetch("https://Jsonplaceholder.typicode.com/users/3")
    .then((response) =>{
        return response.json()
    })
    .then((data) =>{
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    
})

//activity - understand all above code 
//1.async await ex with fetch method, 3. fetch user display names in html list, 4. fetch post show only first 5 records,5.create a fake promise manually resolve after 3 sec reject after 3 sec
//Interview questions - what is promise in json,what is promise status,diff bet callback and promises,what is fetch method in js, what does fetch return,why do we use response .json,diff bet then and catch,diff bet async await ,what is promise chaning

