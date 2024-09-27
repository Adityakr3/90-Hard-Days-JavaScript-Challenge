async function fetchData() {
    try {
        const res = await fetch('https://api.slingacademy.com/v1/sample-data/users?offset=15&limit=99')
        const data = await res.json();
        console.log(data);
        
    } catch (error) {
        console.log(error);
    }
 }
 
 fetchData();
 