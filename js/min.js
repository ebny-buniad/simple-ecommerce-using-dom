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
        img: "https://media.e-valy.com/cms/products/images/cf8a054e-01fc-4ce8-81ef-f59d991b1478?h=250&w=250",
        price: 49.99,
        category: "Audio",
        description: "Portable Bluetooth speaker with deep bass."
    },
    {
        id: 4,
        name: "Smart Watch",
        img: "https://media.e-valy.com/cms/products/images/53cf61f4-2f1f-4a97-a03f-a81eef2b2b7f?h=250&w=250",
        price: 199.99,
        category: "Wearables",
        description: "Fitness tracking smart watch with heart rate monitor."
    },
    {
        id: 5,
        name: "Gaming Chair",
        img: "https://media.e-valy.com/cms/products/images/763673f8-bc5e-424f-a6ff-eb7893acee63?h=250&w=250",
        price: 159.99,
        category: "Furniture",
        description: "Ergonomic gaming chair with lumbar support."
    },
    {
        id: 6,
        name: "USB-C Hub",
        img: "https://media.e-valy.com/cms/products/images/0fb4070b-2f81-48b5-83f2-45fa1e0b9b42?h=250&w=250",
        price: 29.99,
        category: "Accessories",
        description: "Multi-port USB-C hub with HDMI and USB 3.0."
    },
    {
        id: 7,
        name: "External Hard Drive",
        img: "https://media.e-valy.com/cms/products/images/6caa6a74-022c-48f7-9987-0d69b2512f8a?h=250&w=250",
        price: 119.99,
        category: "Storage",
        description: "2TB external hard drive with fast data transfer."
    },
    {
        id: 8,
        name: "Wireless Earbuds",
        img: "https://media.e-valy.com/cms/products/images/317e4f73-806e-4370-8572-ed940efb3205?h=250&w=250",
        price: 59.99,
        category: "Audio",
        description: "True wireless earbuds with noise cancellation."
    },
    {
        id: 9,
        name: "4K Monitor",
        img: "https://media.e-valy.com/cms/products/images/48cfe370-94ae-4669-977a-da6e601f6e1f?h=250&w=250",
        price: 299.99,
        category: "Electronics",
        description: "27-inch 4K UHD monitor with HDR support."
    },
    {
        id: 10,
        name: "Smartphone Stand",
        img: "https://media.e-valy.com/cms/products/images/89beefb1-c935-491b-bc8a-746267e75b1b?h=250&w=250",
        price: 15.99,
        category: "Accessories",
        description: "Adjustable smartphone stand for desk use."
    },
    {
        id: 11,
        name: "Wireless Charger",
        img: "https://media.e-valy.com/cms/products/images/4926f205-fdf9-428d-a4b4-b9abd294c956?h=250&w=250",
        price: 39.99,
        category: "Accessories",
        description: "Fast wireless charger for Qi-enabled devices."
    },
    {
        id: 12,
        name: "Portable Power Bank",
        img: "https://media.e-valy.com/cms/products/images/96425ffa-913c-44ea-9430-b226820d9e06?h=250&w=250",
        price: 45.99,
        category: "Accessories",
        description: "10,000mAh portable power bank with fast charging."
    },
    {
        id: 13,
        name: "LED Desk Lamp",
        img: "https://media.e-valy.com/cms/products/images/498a98b0-72a9-4414-97ac-d5378b6d8454?h=250&w=250",
        price: 22.99,
        category: "Furniture",
        description: "LED desk lamp with adjustable brightness."
    },
    {
        id: 14,
        name: "Wireless Gaming Controller",
        img: "https://media.e-valy.com/cms/products/images/3d00dda5-856a-4c25-b721-a994dd2cecab?h=250&w=250",
        price: 69.99,
        category: "Gaming",
        description: "Wireless gaming controller with responsive buttons."
    },
    {
        id: 15,
        name: "Smart Home Camera",
        img: "https://media.e-valy.com/cms/products/images/b0f91915-b0a1-4121-9a09-b27a51db8fce?h=250&w=250",
        price: 79.99,
        category: "Smart Home",
        description: "Wi-Fi security camera with night vision."
    },
    {
        id: 16,
        name: "Laptop Cooling Pad",
        img: "https://media.e-valy.com/cms/products/images/fc256668-b4e9-4908-b3be-642fdd465fc9?h=250&w=250",
        price: 34.99,
        category: "Accessories",
        description: "Cooling pad for laptops with dual fans."
    },
    {
        id: 17,
        name: "Mechanical Pencil",
        img: "https://media.e-valy.com/cms/products/images/67d265a2-7b09-4cf0-a3fc-63ec20df2fe8?h=250&w=250",
        price: 9.99,
        category: "Stationery",
        description: "Premium mechanical pencil for writing and sketching."
    },
    {
        id: 18,
        name: "Bluetooth Headphones",
        img: "https://media.e-valy.com/cms/products/images/399435a2-540b-4c25-9741-dfe70ff99619?h=250&w=250",
        price: 119.99,
        category: "Audio",
        description: "Over-ear Bluetooth headphones with noise isolation."
    },
    {
        id: 19,
        name: "VR Headset",
        img: "https://media.e-valy.com/cms/products/images/0d26b500-6e3d-46db-a409-0c159a1a2cb5?h=250&w=250",
        price: 249.99,
        category: "Gaming",
        description: "Virtual reality headset with immersive experience."
    },
    {
        id: 20,
        name: "Adjustable Laptop Stand",
        img: "https://media.e-valy.com/cms/products/images/a8da0566-d904-4e15-95d0-f741f53b95d2?h=250&w=250",
        price: 44.99,
        category: "Accessories",
        description: "Ergonomic laptop stand for better posture."
    }
];

let cardCount = 0;
let totalSum = 0;

function addToCart(price) {
    cardCount++;
    totalSum = totalSum + price;

    document.getElementById("cardTotal").innerText = cardCount;
    document.getElementById("cardCount").innerText = cardCount;
    document.getElementById("totalSum").innerText = totalSum.toFixed(2);

}

const showProducts = () => {
    for (const product of products) {
        const productContainer = document.getElementById('product-container');
        const div = document.createElement('div');
        div.innerHTML =
            `<div class="card card-compact bg-base-100 shadow rounded-md">
                        <figure>
                            <img class="w-56 h-56" src="${product.img}" alt="" />
                        </figure>
                        <div class="card-body">
                            <h2 class="card-title text-[18px]">${product.name}</h2>
                            <p>Price: ${product.price}</P>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-end">
                                <button onclick="addToCart(${product.price})" class="border border-rose-600 rounded-md py-2 px-3">Buy Now</button>
                            </div>
                        </div>
                    </div>`
        productContainer.appendChild(div);
    }
    document.getElementById("cardTotal").innerText = cardCount;
    document.getElementById("cardCount").innerText = cardCount;
    document.getElementById("totalSum").innerText = totalSum;

}

showProducts();



