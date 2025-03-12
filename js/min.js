const products = [
    {
        id: 1,
        name: "Wireless Mouse",
        img: "https://media.e-valy.com/cms/products/images/1817f4bc-dca4-403a-9dfb-789559e67179?h=250&w=250",
        price: 25.99,
        category: "Electronics",
        description: "Ergonomic wireless mouse with long battery life."
    },
    {
        id: 2,
        name: "Mechanical Keyboard",
        img: "https://media.e-valy.com/cms/products/images/6a416398-7ca9-450f-a5c0-651a98c5b868?h=250&w=250",
        price: 89.99,
        category: "Electronics",
        description: "RGB mechanical keyboard with blue switches."
    },
    {
        id: 3,
        name: "Bluetooth Speaker",
        img: "speaker.jpg",
        price: 49.99,
        category: "Audio",
        description: "Portable Bluetooth speaker with deep bass."
    },
    {
        id: 4,
        name: "Smart Watch",
        img: "smartwatch.jpg",
        price: 199.99,
        category: "Wearables",
        description: "Fitness tracking smart watch with heart rate monitor."
    },
    {
        id: 5,
        name: "Gaming Chair",
        img: "gamingchair.jpg",
        price: 159.99,
        category: "Furniture",
        description: "Ergonomic gaming chair with lumbar support."
    },
    {
        id: 6,
        name: "USB-C Hub",
        img: "usbhub.jpg",
        price: 29.99,
        category: "Accessories",
        description: "Multi-port USB-C hub with HDMI and USB 3.0."
    },
    {
        id: 7,
        name: "External Hard Drive",
        img: "harddrive.jpg",
        price: 119.99,
        category: "Storage",
        description: "2TB external hard drive with fast data transfer."
    },
    {
        id: 8,
        name: "Wireless Earbuds",
        img: "earbuds.jpg",
        price: 59.99,
        category: "Audio",
        description: "True wireless earbuds with noise cancellation."
    },
    {
        id: 9,
        name: "4K Monitor",
        img: "monitor.jpg",
        price: 299.99,
        category: "Electronics",
        description: "27-inch 4K UHD monitor with HDR support."
    },
    {
        id: 10,
        name: "Smartphone Stand",
        img: "phonestand.jpg",
        price: 15.99,
        category: "Accessories",
        description: "Adjustable smartphone stand for desk use."
    },
    {
        id: 11,
        name: "Wireless Charger",
        img: "wirelesscharger.jpg",
        price: 39.99,
        category: "Accessories",
        description: "Fast wireless charger for Qi-enabled devices."
    },
    {
        id: 12,
        name: "Portable Power Bank",
        img: "powerbank.jpg",
        price: 45.99,
        category: "Accessories",
        description: "10,000mAh portable power bank with fast charging."
    },
    {
        id: 13,
        name: "LED Desk Lamp",
        img: "desklamp.jpg",
        price: 22.99,
        category: "Furniture",
        description: "LED desk lamp with adjustable brightness."
    },
    {
        id: 14,
        name: "Wireless Gaming Controller",
        img: "controller.jpg",
        price: 69.99,
        category: "Gaming",
        description: "Wireless gaming controller with responsive buttons."
    },
    {
        id: 15,
        name: "Smart Home Camera",
        img: "camera.jpg",
        price: 79.99,
        category: "Smart Home",
        description: "Wi-Fi security camera with night vision."
    },
    {
        id: 16,
        name: "Laptop Cooling Pad",
        img: "coolingpad.jpg",
        price: 34.99,
        category: "Accessories",
        description: "Cooling pad for laptops with dual fans."
    },
    {
        id: 17,
        name: "Mechanical Pencil",
        img: "pencil.jpg",
        price: 9.99,
        category: "Stationery",
        description: "Premium mechanical pencil for writing and sketching."
    },
    {
        id: 18,
        name: "Bluetooth Headphones",
        img: "headphones.jpg",
        price: 119.99,
        category: "Audio",
        description: "Over-ear Bluetooth headphones with noise isolation."
    },
    {
        id: 19,
        name: "VR Headset",
        img: "vrheadset.jpg",
        price: 249.99,
        category: "Gaming",
        description: "Virtual reality headset with immersive experience."
    },
    {
        id: 20,
        name: "Adjustable Laptop Stand",
        img: "laptopstand.jpg",
        price: 44.99,
        category: "Accessories",
        description: "Ergonomic laptop stand for better posture."
    },
    {
        id: 21,
        name: "Smart LED Light Strip",
        img: "lightstrip.jpg",
        price: 29.99,
        category: "Smart Home",
        description: "Color-changing LED light strip with remote control."
    },
    {
        id: 22,
        name: "Wireless Presenter",
        img: "presenter.jpg",
        price: 24.99,
        category: "Office",
        description: "Wireless presenter with laser pointer."
    },
    {
        id: 23,
        name: "Mini Projector",
        img: "projector.jpg",
        price: 189.99,
        category: "Electronics",
        description: "Compact mini projector with 1080p support."
    },
    {
        id: 24,
        name: "Electric Kettle",
        img: "kettle.jpg",
        price: 39.99,
        category: "Kitchen",
        description: "Fast boiling electric kettle with auto shut-off."
    },
    {
        id: 25,
        name: "Noise Cancelling Ear Muffs",
        img: "earmuffs.jpg",
        price: 29.99,
        category: "Accessories",
        description: "Comfortable ear muffs with noise reduction."
    }
];


const showProducts = () => {
    for (const product of products) {
        const productContainer = document.getElementById('product-container');
        const div = document.createElement('div');
        div.innerHTML =
            `<div class="card card-compact bg-base-100 shadow rounded-md">
                        <figure>
                            <img src="https://media.e-valy.com/cms/products/images/e6ae201c-58da-49ca-af20-457bac0f0bb5?h=250&w=250"
                                alt="Shoes" />
                        </figure>
                        <div class="card-body">
                            <h2 class="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-end">
                                <button class="border border-rose-600 rounded-md py-2 px-3">Buy Now</button>
                            </div>
                        </div>
                    </div>`
                    
        productContainer.appendChild(div);
    }
}

showProducts();

