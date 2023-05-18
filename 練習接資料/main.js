const URL = 'https://datacenter.taichung.gov.tw/swagger/OpenData/cbe0185d-f012-45f1-92c1-06ea1875a710';

document.getElementById('btn').addEventListener('click',() => {
        fetch(URL)
        .then((Response) =>{
            return Response.json();
        })
        .then((data) =>{
            let cont = Math.floor(Math.random()*17);
            console.log(cont);
            document.getElementById('name').innerHTML = data[cont]['名稱'];
            document.getElementById('tel').innerHTML = data[cont]['電話'];
            document.getElementById('phone').innerHTML = data[cont]['行動電話'];
            document.getElementById('time').innerHTML = data[cont]['營業時間'];
            document.getElementById('web').innerHTML = data[cont]['網站'];
            document.getElementById('address').innerHTML = data[cont]['地址或地號'];
            console.log(data);
        })
        .catch((err) =>{
            console.log('失敗',err);
        })
        })