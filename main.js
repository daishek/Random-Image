setInterval(async ()=>{
    await fetch('https://source.unsplash.com/random')
    .then(function(response) {
        console.log('try to change...');
        console.log(typeof(response.url));
        document.getElementById('bg').style.backgroundImage = `url(${response.url})`;
    })
    .catch(function(err) {
        console.log(err);
    });
}, 10000);