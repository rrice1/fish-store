// Filter fish that are "on sale"

// Add fish to "Basket"

//Load fish
$.get('../db/fishes.json')
.done(()=> {
    console.log(data);
})
.fail((error) =>{
    console.error({error});
});