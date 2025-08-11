document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: "p001", name: "Smartphone X" },
        { id: "p002", name: "Laptop Pro" },
        { id: "p003", name: "Wireless Headphones" },
        { id: "p004", name: "Smartwatch 2" }
    ];

    const select = document.getElementById("productName");

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        select.appendChild(option);
    });
});
