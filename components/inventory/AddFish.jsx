import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'

export default class AddFish extends Component {
    constructor(props){
        super(props);
        this.state = {
            authenticated: 0,
            allFishes:  [
                {
                    fishName: "Pacific Halibut",
                    fishPrice: 17.24,
                    fishDescription: "Everyones favorite white fish. We will cut it to the size you need and ship it.",
                    status: "available",
                    imageUrl: "https://i.istockimg.com/file_thumbview_approve/36248396/5/stock-photo-36248396-blackened-cajun-sea-bass.jpg"
                },
                {
                    fishName: "Lobster",
                    fishPrice: 32.00,
                    fishDescription: "These tender, mouth-watering beauties are a fantastic hit at any dinner party.",
                    status: "available",
                    imageUrl: "https://i.istockimg.com/file_thumbview_approve/32135274/5/stock-photo-32135274-cooked-lobster.jpg"
                },
                {
                    fishName: "Sea Scallops",
                    fishPrice: 16.84,
                    fishDescription: "Big, sweet and tender. True dry-pack scallops from the icey waters of Alaska. About 8-10 per pound",
                    status: "unavailable",
                    imageUrl: "https://i.istockimg.com/file_thumbview_approve/58624176/5/stock-photo-58624176-scallops-on-black-stone-plate.jpg"
                },
                {
                    fishName: "Mahi Mahi",
                    fishPrice: 11.29,
                    fishDescription: "Lean flesh with a mild, sweet flavor profile, moderately firm texture and large, moist flakes.",
                    status: "available",
                    imageUrl: "https://i.istockimg.com/file_thumbview_approve/12556651/5/stock-photo-12556651-mahimahi.jpg"
                },
                {
                    fishName: "King Crab",
                    fishPrice: 42.34,
                    fishDescription: "Crack these open and enjoy them plain or with one of our cocktail sauces",
                    status: "available",
                    imageUrl: "https://i.istockimg.com/file_thumbview_approve/18294110/5/stock-photo-18294110-king-crab-legs.jpg"
                },
                {
                    fishName: "Atlantic Salmon",
                    fishPrice: 14.53,
                    fishDescription: "This flaky, oily salmon is truly the king of the sea. Bake it, grill it, broil it...as good as it gets!",
                    status: "available",
                    imageUrl: "https://i.istockimg.com/file_thumbview_approve/56241842/5/stock-photo-56241842-salmon-fish.jpg"
                },
                {
                    fishName: "Oysters",
                    fishPrice: 25.43,
                    fishDescription: "A soft plump oyster with a sweet salty flavor and a clean finish.",
                    status: "available",
                    imageUrl: "https://i.istockimg.com/file_thumbview_approve/58626682/5/stock-photo-58626682-fresh-oysters-on-a-black-stone-plate-top-view.jpg"
                },
                {
                    fishName: "Mussels",
                    fishPrice: 4.25,
                    fishDescription: "The best mussels from the Pacific Northwest with a full-flavored and complex taste.",
                    status: "available",
                    imageUrl: "https://i.istockimg.com/file_thumbview_approve/40450406/5/stock-photo-40450406-steamed-mussels.jpg"
                },
                {
                    fishName: "Jumbo Prawns",
                    fishPrice: 22.50,
                    fishDescription: "With 21-25 two bite prawns in each pound, these sweet morsels are perfect for shish-kabobs.",
                    status: "available",
                    imageUrl: "https://i.istockimg.com/file_thumbview_approve/67121439/5/stock-photo-67121439-fresh-tiger-shrimp-on-ice-on-a-black-stone-table.jpg"
                }
            ]
        };

        this.loadSampleFishes = this.loadSampleFishes.bind(this);
    }

    render() {
        return (
            <div>
                <form className="fish-edit" onSubmit={(e) => this.handleAddItemClick(e)}>
                    <input type="text" ref="fishName" placeholder="Fish Name" />
                    <input type="number" ref="fishPrice" placeholder="Fish Price" />
                    <select ref="status">
                        <option value="available">Fresh!</option>
                        <option value="unavailable">Sold Out!</option>
                    </select>
                    <textarea type="text" ref="fishDescription" placeholder="Desc"></textarea>
                    <input type="text" ref="imageUrl" placeholder="URL to Image" />
                    <button type="submit">+ Add Item</button>
                </form>
                <button onClick={this.loadSampleFishes}>Load Sample Fishes</button>
            </div>
        )
    }

    handleAddItemClick(e) {
        e.preventDefault()
        const {fishName, fishPrice, fishDescription, status, imageUrl} = this.refs

        imageUrl.value = imageUrl.value ? imageUrl.value : "assets/css/images/default.png"
        fishPrice.value = fishPrice.value ? fishPrice.value : 0.00

        let data = {
            fishName: fishName.value.trim(),
            fishPrice: fishPrice.value.trim(),
            fishDescription: fishDescription.value.trim(),
            status: status.value.trim(),
            imageUrl: imageUrl.value.trim(),
        }
        this.props.onAddClick(data)
    }

    loadSampleFishes() {
        this.state.allFishes.map(fish => {
            this.props.onAddClick({
                fishName: fish.fishName,
                fishPrice: fish.fishPrice,
                fishDescription: fish.fishDescription,
                status: fish.status,
                imageUrl: fish.imageUrl
            })
        })
    }
}
