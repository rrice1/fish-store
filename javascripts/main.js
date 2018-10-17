// Filter fish that are "on sale"

// Add fish to "Basket"

const writeFishes = (arrayOfFishes) => {
    let newString = '';
arrayOfFishes.forEach((fish) => {
    newString += `<div class="${fish.onSale ? 'on-sale' : ''} fish card col-md-6 col-md-offset-3">
    <div class="thumbnail">
        <img src="${fish.imageSoure}" alt="" width="40%">
        <div class="caption">
            <h3 id="thumbnail-label">${fish.name}</h3>
            <p>$
                <span class="price">${fish.basePrice}</span>
            </p>
        </div>
        <div class="caption card-footer">
            <button class="add btn btn-danger">Add To Basket</button>
        </div>
    </div>
</div>`
});
// Write to the available div
$("#available").append(newString);

}
    $("body").on('click', 'button.add',(e)=>{
        const fishToMove = $(e.target).closest('.fish'); //adding the $() makes it work in IE
        $("#snagged").append(fishToMove); //append is not copying and pasting, it's cut and paste
        $(e.target).text('Remove from Basket').addClass('remove').removeClass('add');
        });
    $("body").on('click','button.remove',(e)=>{
        const fishToMove = $(e.target).closest('.fish'); //adding the $() makes it work in IE
        $("#available").append(fishToMove); //append is not copying and pasting, it's cut and paste
        $(e.target).text('Add To Basket').addClass('add').removeClass('remove');
        });

        $("#show-sale").click(()=>{
            $(".fish").not(".on-sale").toggle();
        })

//Load fish
$.get('../db/fishes.json')
.done((data)=> {
    console.log(data);
    writeFishes(data.fishes);
})
.fail((error) =>{
    console.error({error});
});
