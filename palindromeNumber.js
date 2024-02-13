function pal(a) {
    const n = a.toString().split('').reverse().join('')
    Math.floor(n) === a ? console.log('wins'):console.log('loses')
}

pal(6669)
pal(878878787)
pal(121)
pal(1221)