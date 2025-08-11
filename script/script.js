var notyf = new Notyf({
    duration: 2000, // 2 seconds
    position: { x: 'right', y: 'bottom' },
    dismissible: true
});

var vm = new Vue({
    el: '#app',
    data: {
        searchQuery: "",
        sizeValuesForDrpDwn: [
            'சரம்', 'கிலோ', 'கிராம்', 'மில்லி லிட்டர்', 'பெரியது', 'சிறியது', 'பாக்ஸ்', 'பெரிய பாக்ஸ்', 'சிறிய பாக்ஸ்'
        ],
        selectedProducts: [],
        mainProducts: [
            { id: 1, product: 'Sensodent-K Toothpaste', size: '', qty: '1', imageUrl: 'images/products/1.jpg', tamilName: 'Sensodent-K Toothpaste' },
            { id: 2, product: 'Closeup Toothpaste', size: '', qty: '1', imageUrl: 'images/products/2.jpg', tamilName: 'Closeup Toothpaste' },
            { id: 3, product: 'Mysore Sandal Soap', size: '', qty: '1', imageUrl: 'images/products/3.jpg', tamilName: 'Mysore Sandal சோப்பு' },
            { id: 4, product: 'All Clear Shampoo', size: '', qty: '1', imageUrl: 'images/products/4.jpg', tamilName: 'All Clear Shampoo' },
            { id: 5, product: 'Rin Soap', size: '', qty: '1', imageUrl: 'images/products/5.jpg', tamilName: 'Rin சோப்பு' },
            { id: 6, product: 'Almond', size: '', qty: '1', imageUrl: 'images/products/6.jpg', tamilName: 'பாதாம்' },
            { id: 7, product: 'Cashewnut', size: '', qty: '1', imageUrl: 'images/products/7.jpg', tamilName: 'முந்திரி' },
            { id: 8, product: 'Rin soap Powder', size: '', qty: '1', imageUrl: 'images/products/8.jpg', tamilName: 'Rin சோப்பு தூள்' },
            { id: 9, product: 'Turmeric powder', size: '', qty: '1', imageUrl: 'images/products/9.jpg', tamilName: 'மஞ்சள் தூள்' },
            { id: 10, product: 'GRB Ghee', size: '', qty: '1', imageUrl: 'images/products/10.jpg', tamilName: 'நெய்' },
            { id: 11, product: 'USHA Oil', size: '', qty: '1', imageUrl: 'images/products/11.jpg', tamilName: 'உஷா ஆயில்' },
            { id: 12, product: 'Vim Soap', size: '', qty: '1', imageUrl: 'images/products/12.jpg', tamilName: 'Vim சோப்பு' },
            { id: 13, product: 'Hamam soap', size: '', qty: '1', imageUrl: 'images/products/13.jpg', tamilName: 'Hamam சோப்பு' },
            { id: 14, product: 'Chick white Shampoo', size: '', qty: '1', imageUrl: 'images/products/14.jpg', tamilName: 'Chick white Shampoo' },
            { id: 15, product: 'Roasted Gram', size: '', qty: '1', imageUrl: 'images/products/15.jpg', tamilName: 'பொட்டுகடலை' },
            { id: 16, product: 'Stay free', size: '', qty: '1', imageUrl: 'images/products/16.jpg', tamilName: 'Stay free' },
            { id: 17, product: 'Narasus coffee powder', size: '', qty: '1', imageUrl: 'images/products/17.jpg', tamilName: 'Narasus காபி தூள்' },
            { id: 18, product: 'AASHIRVADA ATTA', size: '', qty: '1', imageUrl: 'images/products/18.jpg', tamilName: 'கோதுமை மாவு' },
            { id: 19, product: 'Mustard', size: '', qty: '1', imageUrl: 'images/products/19.jpg', tamilName: 'கடுகு' },
            { id: 20, product: 'LG asafoetida', size: '', qty: '1', imageUrl: 'images/products/20.jpg', tamilName: 'LG பெருங்காயம்' },
            { id: 21, product: 'pigeon pea', size: '', qty: '1', imageUrl: 'images/products/21.jpg', tamilName: 'துவரம் பருப்பு' },
            { id: 22, product: 'Johnson baby powder', size: '', qty: '1', imageUrl: 'images/products/22.jpg', tamilName: 'Johnson baby powder' },
            { id: 23, product: 'Johnson baby soap', size: '', qty: '1', imageUrl: 'images/products/23.jpg', tamilName: 'Johnson baby சோப்பு' },
            { id: 24, product: 'Gram flour', size: '', qty: '1', imageUrl: 'images/products/24.jpg', tamilName: 'கடலை மாவு' },
            { id: 25, product: 'moong dal', size: '', qty: '1', imageUrl: 'images/products/25.jpg', tamilName: 'பாசிபருப்பு' },
            { id: 26, product: 'Groundnut', size: '', qty: '1', imageUrl: 'images/products/26.jpg', tamilName: 'நிலக்கடலை' },
            { id: 27, product: 'wheat Rava', size: '', qty: '1', imageUrl: 'images/products/27.jpg', tamilName: 'கோதுமை ரவை' },
            { id: 28, product: 'Black Rice', size: '', qty: '1', imageUrl: 'images/products/28.jpg', tamilName: 'கருப்பு கவுனி அரிசி' },
            { id: 29, product: 'Rava', size: '', qty: '1', imageUrl: 'images/products/29.jpg', tamilName: 'ரவை' },
            { id: 30, product: 'Uma semiya', size: '', qty: '1', imageUrl: 'images/products/30.jpg', tamilName: 'சேமியா' },
            { id: 31, product: 'Corn flour', size: '', qty: '1', imageUrl: 'images/products/31.jpg', tamilName: 'கார்ன் பிளவர்' },
            { id: 32, product: 'Maida', size: '', qty: '1', imageUrl: 'images/products/32.jpg', tamilName: 'மைதா மாவு' },
            { id: 33, product: 'Rice flour', size: '', qty: '1', imageUrl: 'images/products/33.jpg', tamilName: 'அரிசி மாவு' },
            { id: 34, product: 'Muyal castor oil', size: '', qty: '1', imageUrl: 'images/products/34.jpg', tamilName: 'முயல் விளக்கெண்ணெய்' },
            { id: 35, product: 'Vicco turmeric', size: '', qty: '1', imageUrl: 'images/products/35.jpg', tamilName: 'Vicco turmeric' },
            { id: 36, product: 'Sakthi curry masala', size: '', qty: '1', imageUrl: 'images/products/36.jpg', tamilName: 'கறி மசால் பொடி' },
            { id: 37, product: 'Sakthi chicken masala', size: '', qty: '1', imageUrl: 'images/products/37.jpg', tamilName: 'சிக்கன் மசாலா தூள்' },
            { id: 38, product: 'Sakthi Mutton masala', size: '', qty: '1', imageUrl: 'images/products/38.jpg', tamilName: 'மட்டன் மசாலா தூள்' },
            { id: 39, product: 'Sakthi Biriyani masala', size: '', qty: '1', imageUrl: 'images/products/39.jpg', tamilName: 'பிரியாணி மசாலா தூள்' },
            { id: 40, product: 'Green Gram', size: '', qty: '1', imageUrl: 'images/products/40.jpg', tamilName: 'பச்சை பயிறு' },
            { id: 41, product: 'Green Peas', size: '', qty: '1', imageUrl: 'images/products/41.jpg', tamilName: 'பச்சை பட்டாணி' },
            { id: 42, product: 'White peas', size: '', qty: '1', imageUrl: 'images/products/42.jpg', tamilName: 'வெள்ளை பட்டாணி' },
            { id: 43, product: 'black beans', size: '', qty: '1', imageUrl: 'images/products/43.jpg', tamilName: 'கருப்பு பீன்ஸ்' },
            { id: 44, product: 'White chickpeas', size: '', qty: '1', imageUrl: 'images/products/44.jpg', tamilName: 'பெரிய வெள்ளை மூக்கடலை' },
            { id: 45, product: 'Red chickpeas', size: '', qty: '1', imageUrl: 'images/products/45.jpg', tamilName: 'சிறிய சிவப்பு மூக்கடலை' },
            { id: 46, product: 'VVD Coconut Oil', size: '', qty: '1', imageUrl: 'images/products/46.jpg', tamilName: 'VVD தேங்காய் எண்ணெய்' },
            { id: 47, product: 'Cardamom', size: '', qty: '1', imageUrl: 'images/products/47.jpg', tamilName: 'ஏலக்காய்' },
            { id: 48, product: 'Garlic', size: '', qty: '1', imageUrl: 'images/products/48.jpg', tamilName: 'பூண்டு' },
            { id: 49, product: 'Dettol', size: '', qty: '1', imageUrl: 'images/products/49.jpg', tamilName: 'Dettol' },
            { id: 50, product: 'Pithambari', size: '', qty: '1', imageUrl: 'images/products/50.jpg', tamilName: 'Pithambari' },
            { id: 51, product: 'Deepam Oil', size: '', qty: '1', imageUrl: 'images/products/51.jpg', tamilName: 'தீபம் எண்ணெய்' },
            { id: 52, product: 'Broken Urad dhal', size: '', qty: '1', imageUrl: 'images/products/52.jpg', tamilName: 'உடைத்த உளுத்தம் பருப்பு' },
            { id: 53, product: 'Urd dhal', size: '', qty: '1', imageUrl: 'images/products/53.jpg', tamilName: 'உளுத்தம் பருப்பு' },
            { id: 54, product: 'Tamarind', size: '', qty: '1', imageUrl: 'images/products/54.jpg', tamilName: 'புளி' },
            { id: 55, product: 'Rock salt', size: '', qty: '1', imageUrl: 'images/products/55.jpg', tamilName: 'கல் உப்பு' },
            { id: 56, product: 'Powder salt', size: '', qty: '1', imageUrl: 'images/products/56.jpg', tamilName: 'தூள் உப்பு' },
            { id: 57, product: 'Bengal gram dal', size: '', qty: '1', imageUrl: 'images/products/57.jpg', tamilName: 'கள்ளப்பருப்பு' },
            { id: 58, product: 'Poha', size: '', qty: '1', imageUrl: 'images/products/58.jpg', tamilName: 'அவுல்' },
            { id: 59, product: 'Green Rice', size: '', qty: '1', imageUrl: 'images/products/59.jpg', tamilName: 'பச்சரிசி' },
            { id: 60, product: 'Gokul Santol Powder', size: '', qty: '1', imageUrl: 'images/products/60.jpg', tamilName: 'Gokul Santol Powder' },
            { id: 61, product: 'Spinz BB Powder', size: '', qty: '1', imageUrl: 'images/products/61.jpg', tamilName: 'Spinz BB Powder' },
            { id: 62, product: 'VIP Hair Colour Dye', size: '', qty: '1', imageUrl: 'images/products/62.jpg', tamilName: 'VIP Hair Colour Dye' },
            { id: 63, product: 'Bay Leaf', size: '', qty: '1', imageUrl: 'images/products/63.jpg', tamilName: 'பிரியாணி இலை' },
            { id: 64, product: 'cinnamon', size: '', qty: '1', imageUrl: 'images/products/64.jpg', tamilName: 'பட்டை' },
            { id: 65, product: 'Clove', size: '', qty: '1', imageUrl: 'images/products/65.jpg', tamilName: 'லவங்கம்' },
            { id: 66, product: 'Star Anise', size: '', qty: '1', imageUrl: 'images/products/66.jpg', tamilName: 'அன்னாசிப் பூ' },
            { id: 67, product: 'Black Stone Flower', size: '', qty: '1', imageUrl: 'images/products/67.jpg', tamilName: 'கல்பசி' },
            { id: 68, product: 'Coriander Seeds', size: '', qty: '1', imageUrl: 'images/products/68.jpg', tamilName: 'தனியா' },
            { id: 69, product: 'Harpic Red', size: '', qty: '1', imageUrl: 'images/products/69.jpg', tamilName: 'Harpic Red' },
            { id: 70, product: 'Harpic Blue', size: '', qty: '1', imageUrl: 'images/products/70.jpg', tamilName: 'Harpic Blue' },
            { id: 71, product: 'Dried Red Chili', size: '', qty: '1', imageUrl: 'images/products/71.jpg', tamilName: 'வரமிளகாய்' },
            { id: 72, product: 'Dry Coriander', size: '', qty: '1', imageUrl: 'images/products/72.jpg', tamilName: 'வர கொத்தமல்லி' },
            { id: 73, product: 'Moggu', size: '', qty: '1', imageUrl: 'images/products/73.jpg', tamilName: 'மராத்தி மொக்கு' },
            { id: 74, product: 'Kasa Kasa', size: '', qty: '1', imageUrl: 'images/products/74.jpg', tamilName: 'கச கசா' },
            { id: 75, product: 'Narasus Tea Powder', size: '', qty: '1', imageUrl: 'images/products/75.jpg', tamilName: 'நரசுஸ் டீ தூள்' },
            { id: 76, product: 'Anise', size: '', qty: '1', imageUrl: 'images/products/76.jpg', tamilName: 'சோம்பு' },
            { id: 77, product: 'Chilli Powder', size: '', qty: '1', imageUrl: 'images/products/77.jpg', tamilName: 'மிளகாய் தூள்' },
            { id: 78, product: 'Pepper', size: '', qty: '1', imageUrl: 'images/products/78.jpg', tamilName: 'மிளகு' },
            { id: 79, product: 'Cumin', size: '', qty: '1', imageUrl: 'images/products/79.jpg', tamilName: 'சீரகம்' },
            { id: 80, product: 'Jaggeryr', size: '', qty: '1', imageUrl: 'images/products/80.jpg', tamilName: 'வெல்லம்' },
            { id: 81, product: 'White sesame', size: '', qty: '1', imageUrl: 'images/products/81.jpg', tamilName: 'வெள்ளை எள்ளு' },
            { id: 82, product: 'Incense Stick', size: '', qty: '1', imageUrl: 'images/products/82.jpg', tamilName: 'ஊதுபத்தி' },
            { id: 83, product: 'Red Cow Peas', size: '', qty: '1', imageUrl: 'images/products/83.jpg', tamilName: 'தட்டப்பயிறு' },
            { id: 84, product: 'Comfort', size: '', qty: '1', imageUrl: 'images/products/84.jpg', tamilName: 'Comfort' },
        ]
    },
    created() {
        // Load cart from localStorage
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            this.selectedProducts = JSON.parse(savedCart);
        }
    },
    watch: {
        // Whenever cart changes, save to localStorage
        selectedProducts: {
            handler(newVal) {
                localStorage.setItem('cart', JSON.stringify(newVal));
            },
            deep: true
        }
    },
    computed: {
        filteredProducts() {
            if (!this.searchQuery) return this.mainProducts;
            return this.mainProducts.filter(p =>
                p.product.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                p.tamilName.includes(this.searchQuery)
            );
        },
        cartCount() {
            return this.selectedProducts.length;
        },
        totalProductCount() {
            return this.mainProducts.length;
        }
    },
    methods: {
        clearAll() {
            this.selectedProducts = [];
            localStorage.removeItem('cart');
            window.location.reload();
            notyf.success('Cart cleared successfully');
        },
        redirectToProductListPage() {
            window.open('productview.html', '_blank');
        },
        incrementQty(product) {
            const parsed = this.parseQty(product.qty);
            product.qty = (parsed + 1).toString();
            this.syncQtyWithCart(product);
        },
        decrementQty(product) {
            const parsed = this.parseQty(product.qty);
            if (parsed > 1) {
                product.qty = (parsed - 1).toString();
                this.syncQtyWithCart(product);
            }
        },
        handleQtyInput(event, product) {
            const input = event.target.value.trim();

            const isFraction = /^(\d+)\s*\/\s*(\d+)$/.test(input);
            const isDecimal = /^(\d+(\.\d+)?)$/.test(input);

            if (input === '') {
                product.qty = '1'; // fallback if empty
            } else if (isFraction || isDecimal) {
                product.qty = input;
            } else {
                notyf.error('Invalid quantity format. Use numbers or fractions like 1/2');
                product.qty = '1';
            }

            this.syncQtyWithCart(product);
        },
        syncQtyWithCart(product) {
            const existing = this.selectedProducts.find(p => p.id === product.id);
            if (existing) {
                existing.qty = product.qty;
            }
        },
        syncSizeWithCart(product) {
            const existing = this.selectedProducts.find(p => p.id === product.id);
            if (existing) {
                existing.size = product.size;
                notyf.success(`Size updated for "${product.product}"`);
            }
        },
        updateSize(product) {
            // This method is kept if needed separately
            this.syncSizeWithCart(product);
        },
        addToCart(product) {
            let existing = this.selectedProducts.find(p => p.id === product.id);

            if (existing) {
                existing.qty = product.qty;
                existing.size = product.size;
                notyf.success(`Updated quantity/size for "${product.product}"`);
            } else {
                this.selectedProducts.push({
                    id: product.id,
                    name: product.tamilName,
                    size: product.size,
                    qty: product.qty,
                    imageUrl: product.imageUrl
                });
                notyf.success(`"${product.product}" added to cart`);
            }
        },
        removeFromCart(id) {
            let productInCart = this.selectedProducts.find(p => p.id === id);

            if (productInCart) {
                this.selectedProducts = this.selectedProducts.filter(p => p.id !== id);

                // Reset qty and size in mainProducts (to reset the UI)
                const productInMain = this.mainProducts.find(p => p.id === id);
                if (productInMain) {
                    productInMain.qty = '1';
                    productInMain.size = '';
                }

                notyf.error(`"${productInCart.name}" removed from cart`);
            } else {
                notyf.error(`Product not found in cart`);
            }
        },
        isInCart(id) {
            return this.selectedProducts.some(p => p.id === id);
        },
        parseQty(qtyStr) {
            if (typeof qtyStr !== 'string') return Number(qtyStr) || 1;

            if (qtyStr.includes('/')) {
                const [num, denom] = qtyStr.split('/').map(Number);
                if (!isNaN(num) && !isNaN(denom) && denom !== 0) {
                    return num / denom;
                }
            }
            const parsed = parseFloat(qtyStr);
            return isNaN(parsed) ? 1 : parsed;
        },
        generatePDF: function () {
            const monthName = moment().format('MMMM').toUpperCase();

            const container = document.createElement("div");
            container.classList.add("container");

            const style = document.createElement("style");
            style.textContent = `
                .container {
                    width: 100%;
                    height: auto;
                    overflow: visible !important;
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                }
                table tr{
                    border-bottom:1px solid lightgrey;
                }
                table th, table td {
                    text-align: left;
                    font-size: 14px;
                    padding: 10px 5px;
                }
                @page {
                    margin-top: 40px !important;
                }
                body {
                    -webkit-print-color-adjust: exact;
                    print-color-adjust: exact;
                }
            `;
            document.head.appendChild(style);

            // ✅ Sample JSON data
            const products = this.selectedProducts;

            const table = document.createElement("table");
            const thead = document.createElement("thead");
            thead.innerHTML = `
                <tr>
                    <th style='width:5%;'>Sl.No</th>
                    <th style='width:60%;'>Product</th>
                    <th style='width:10%;'>Qty / Size</th>
                    <th style='width:10%;'>Size</th>
                    <th style='width:15%;'>Price</th>
                </tr>
            `;
            table.appendChild(thead);

            const tbody = document.createElement("tbody");

            products.forEach((item, index) => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${item.name}</td>
                    <td>${item.qty}</td>
                    <td>${item.size}</td>
                    <td></td>
                `;
                tbody.appendChild(row);
            });

            table.appendChild(tbody);
            container.appendChild(table);

            html2pdf()
                .from(container)
                .set({
                    margin: [10, 10, 10, 10], // top, right, bottom, left
                    filename: `Grocery_List_(${monthName}).pdf`,
                    image: { type: 'jpeg', quality: 1 },
                   html2canvas: { scale: 2, useCORS: true, scrollY: 0 },
                    jsPDF: { unit: 'mm', format: 'a3', orientation: 'portrait' }
                })
                .save();
        },
    },
});
