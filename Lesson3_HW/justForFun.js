//не домашка))
//фільтр по списку
let arr = [
    {name: 'Metallica', album: 'Black Album', year: 1991},
    {name: 'Dream Theater', album: 'Images and Words', year: 1992},
    {name: 'Pantera', album: 'Cowboys From Hell', year: 1992},
    {name: 'Pantera', album: 'The Great Southern Trendkill', year: 1991},
    {name: 'Dream Theater', album: 'Falling Into Infinity', year: 1997},
    {name: 'Alice Cooper', album: 'Hey Stupid', year: 1991},
    {name: 'Architects', album: 'the classic symptoms of a broken spirit', year: 2022},
    {name: 'Dream Theater', album: 'Octavarium', year: 2001},
    {name: 'Dream Theater', album: 'Metropolis 2', year: 1999}
]
for (let i = 0; i < arr.length; i++) {
    let band = arr[i];
    if (band.name === 'Dream Theater') {
        console.log(`${band.name} ${band.album} ${band.year} )`);
    }
}
