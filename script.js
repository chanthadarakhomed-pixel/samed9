
const $ = (selector) => document.querySelector(selector);

const translations = {
  km: {
    home: "ទំព័រដើម",
    products: "ទំនិញ",
    about: "អំពីយើង",
    admin: "គ្រប់គ្រង",
    welcome: "សូមស្វាគមន៍មកកាន់ SellYou",
    heroTitle: "ទិញទំនិញងាយស្រួល តម្លៃសមរម្យ",
    heroDesc: "ស្វែងរកទំនិញដែលអ្នកចូលចិត្តនៅទីនេះ។",
    shopNow: "ទិញឥឡូវនេះ",
    ourCollection: "ទំនិញរបស់យើង",
    featuredProducts: "ទំនិញពេញនិយម",
    search: "ស្វែងរកទំនិញ...",
    allCategories: "គ្រប់ប្រភេទ",
    fashion: "ម៉ូដ",
    electronics: "គ្រឿងអេឡិចត្រូនិក",
    accessories: "គ្រឿងបន្ថែម",
    aboutTitle: "អំពី SellYou",
    aboutDesc: "SellYou ជាហាងអនឡាញដែលធ្វើឱ្យការទិញទំនិញកាន់តែងាយស្រួល។",
    rights: "រក្សាសិទ្ធិគ្រប់យ៉ាង។",
    orderTitle: "បញ្ជាទិញទំនិញ",
    customerName: "ឈ្មោះអតិថិជន",
    phone: "លេខទូរស័ព្ទ",
    address: "អាសយដ្ឋានដឹកជញ្ជូន",
    product: "ទំនិញ",
    quantity: "ចំនួន",
    total: "សរុប",
    payment: "វិធីបង់ប្រាក់",
    cod: "បង់ប្រាក់ពេលទទួលទំនិញ",
    bank: "ផ្ទេរប្រាក់តាមធនាគារ",
    submitOrder: "បញ្ជាក់ការបញ្ជាទិញ",
    adminDashboard: "ផ្ទាំងគ្រប់គ្រង",
    orders: "ការបញ្ជាទិញ",
    revenue: "ចំណូល",
    manageProducts: "គ្រប់គ្រងទំនិញ",
    productName: "ឈ្មោះទំនិញ",
    price: "តម្លៃ ($)",
    category: "ប្រភេទ",
    imageUrl: "URL រូបភាព",
    addProduct: "បន្ថែមទំនិញ",
    editProduct: "កែប្រែ",
    deleteProduct: "លុប",
    orderHistory: "ប្រវត្តិការបញ្ជាទិញ",
    export: "ទាញយកការបញ្ជាទិញជា JSON",
    buy: "ទិញ",
    noProducts: "មិនមានទំនិញទេ។",
    noOrders: "មិនទាន់មានការបញ្ជាទិញទេ។",
    orderSuccess: "ការបញ្ជាទិញបានរក្សាទុក!",
    productSaved: "បានរក្សាទុកទំនិញ!",
    productDeleted: "បានលុបទំនិញ!",
    confirmDelete: "តើអ្នកពិតជាចង់លុបទំនិញនេះមែនទេ?",
    order: "ការបញ្ជាទិញ",
    customer: "អតិថិជន",
    status: "ស្ថានភាព",
    pending: "កំពុងរង់ចាំ",
    cancel: "បោះបង់",
    orderCancelled: "បានបោះបង់ការបញ្ជាទិញ។",
    enterValidPrice: "សូមបញ្ចូលតម្លៃឱ្យបានត្រឹមត្រូវ។",
    exported: "បាននាំចេញទិន្នន័យ។"
  },

  en: {
    home: "Home",
    products: "Products",
    about: "About",
    admin: "Admin",
    welcome: "WELCOME TO SELLYOU",
    heroTitle: "Shop Easily, Pay Less",
    heroDesc: "Discover products you love, all in one place.",
    shopNow: "Shop Now",
    ourCollection: "OUR COLLECTION",
    featuredProducts: "Featured Products",
    search: "Search products...",
    allCategories: "All Categories",
    fashion: "Fashion",
    electronics: "Electronics",
    accessories: "Accessories",
    aboutTitle: "About SellYou",
    aboutDesc: "SellYou makes shopping online easy and convenient.",
    rights: "All rights reserved.",
    orderTitle: "Place an Order",
    customerName: "Customer Name",
    phone: "Phone Number",
    address: "Delivery Address",
    product: "Product",
    quantity: "Quantity",
    total: "Total",
    payment: "Payment Method",
    cod: "Cash on Delivery",
    bank: "Bank Transfer",
    submitOrder: "Confirm Order",
    adminDashboard: "Admin Dashboard",
    orders: "Orders",
    revenue: "Revenue",
    manageProducts: "Manage Products",
    productName: "Product Name",
    price: "Price ($)",
    category: "Category",
    imageUrl: "Image URL",
    addProduct: "Add Product",
    editProduct: "Edit",
    deleteProduct: "Delete",
    orderHistory: "Order History",
    export: "Export Orders as JSON",
    buy: "Buy Now",
    noProducts: "No products found.",
    noOrders: "No orders yet.",
    orderSuccess: "Order saved successfully!",
    productSaved: "Product saved!",
    productDeleted: "Product deleted!",
    confirmDelete: "Are you sure you want to delete this product?",
    order: "Order",
    customer: "Customer",
    status: "Status",
    pending: "Pending",
    cancel: "Cancel",
    orderCancelled: "Order cancelled.",
    enterValidPrice: "Please enter a valid price.",
    exported: "Data exported."
  }
};

const categoryNames = {
  Fashion: { km: "ម៉ូដ", en: "Fashion" },
  Electronics: { km: "គ្រឿងអេឡិចត្រូនិក", en: "Electronics" },
  Accessories: { km: "គ្រឿងបន្ថែម", en: "Accessories" }
};

const defaultProducts = [
  {
    id: 1,
    name: "Classic T-Shirt",
    price: 12,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=700"
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: 35,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700"
  },
  {
    id: 3,
    name: "Stylish Watch",
    price: 28,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700"
  },
  {
    id: 4,
    name: "Sneakers",
    price: 42,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700"
  },
  {
    id: 5,
    name: "Smart Camera",
    price: 60,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=700"
  },
  {
    id: 6,
    name: "Travel Bag",
    price: 25,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700"
  }
];

function loadData(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch (error) {
    console.error("Could not read saved data:", error);
    return fallback;
  }
}

let products = loadData("sellyou_products", defaultProducts);
let orders = loadData("sellyou_orders", []);
let language = localStorage.getItem("sellyou_language") || "km";
let selectedProductId = null;
let toastTimer;

function saveProducts() {
  localStorage.setItem("sellyou_products", JSON.stringify(products));
}

function saveOrders() {
  localStorage.setItem("sellyou_orders", JSON.stringify(orders));
}

function t(key) {
  return translations[language][key] || key;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function money(amount) {
  return "$" + Number(amount).toFixed(2);
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

function applyLanguage() {
  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[language][key]) {
      element.textContent = translations[language][key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    element.placeholder = t(key);
  });

  $("#languageBtn").textContent = language === "km" ? "English" : "ខ្មែរ";

  // Update category options while preserving the selected value.
  const categoryFilter = $("#categoryFilter");
  const oldFilter = categoryFilter.value;

  categoryFilter.querySelectorAll("option").forEach((option) => {
    const key = option.dataset.i18n;
    if (key) option.textContent = t(key);
  });

  categoryFilter.value = oldFilter;

  $("#newProductCategory").querySelectorAll("option").forEach((option) => {
    const key = option.dataset.i18n;
    if (key) option.textContent = t(key);
  });

  renderProducts();
  renderAdminProducts();
  renderOrders();
  updateStats();

  if (selectedProductId !== null) {
    updateOrderTotal();
  }
}

function renderProducts() {
  const grid = $("#productGrid");
  const search = $("#searchInput").value.trim().toLowerCase();
  const category = $("#categoryFilter").value;

  const filtered = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search);

    const matchesCategory = category === "all" || product.category === category;
    return matchesSearch && matchesCategory;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<p class="empty-state">${escapeHTML(t("noProducts"))}</p>`;
    return;
  }

  grid.innerHTML = filtered.map((product) => {
    const image = product.image || "";
    const categoryName = categoryNames[product.category]?.[language] || product.category;

    return `
      <article class="product-card">
        <img
          class="product-image"
          src="${escapeHTML(image)}"
          alt="${escapeHTML(product.name)}"
          loading="lazy"
          onerror="this.onerror=null;this.src='https://placehold.co/600x400?text=SellYou'"
        >
        <div class="product-info">
          <p class="product-category">${escapeHTML(categoryName)}</p>
          <h3>${escapeHTML(product.name)}</h3>
          <div class="product-bottom">
            <span class="product-price">${money(product.price)}</span>
            <button class="buy-btn" data-buy="${product.id}">
              ${escapeHTML(t("buy"))}
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function openOrder(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  selectedProductId = productId;
  $("#orderProduct").value = product.name;
  $("#orderQuantity").value = 1;
  $("#orderModal").classList.remove("hidden");
  updateOrderTotal();
}

function closeOrder() {
  $("#orderModal").classList.add("hidden");
  $("#orderForm").reset();
  selectedProductId = null;
}

function updateOrderTotal() {
  const product = products.find((item) => item.id === selectedProductId);
  const quantity = Math.max(1, Number($("#orderQuantity").value) || 1);
  $("#orderTotal").textContent = money(product ? product.price * quantity : 0);
}

$("#productGrid").addEventListener("click", (event) => {
  const button = event.target.closest("[data-buy]");
  if (button) openOrder(Number(button.dataset.buy));
});

$("#searchInput").addEventListener("input", renderProducts);
$("#categoryFilter").addEventListener("change", renderProducts);
$("#orderQuantity").addEventListener("input", updateOrderTotal);

$("#closeOrder").addEventListener("click", closeOrder);

$("#orderModal").addEventListener("click", (event) => {
  if (event.target === $("#orderModal")) closeOrder();
});

$("#orderForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const product = products.find((item) => item.id === selectedProductId);
  if (!product) return;

  const quantity = Math.max(1, Number($("#orderQuantity").value) || 1);

  const order = {
    id: Date.now(),
    customer: $("#customerName").value.trim(),
    phone: $("#customerPhone").value.trim(),
    address: $("#customerAddress").value.trim(),
    productId: product.id,
    productName: product.name,
    quantity,
    total: product.price * quantity,
    payment: $("#paymentMethod").value,
    status: "pending",
    date: new Date().toISOString()
  };

  orders.unshift(order);
  saveOrders();
  renderOrders();
  updateStats();
  closeOrder();
  showToast(t("orderSuccess"));
});

function openAdmin() {
  $("#adminModal").classList.remove("hidden");
  renderAdminProducts();
  renderOrders();
  updateStats();
}

function closeAdmin() {
  $("#adminModal").classList.add("hidden");
}

$("#adminOpen").addEventListener("click", openAdmin);
$("#closeAdmin").addEventListener("click", closeAdmin);

$("#adminModal").addEventListener("click", (event) => {
  if (event.target === $("#adminModal")) closeAdmin();
});

function renderAdminProducts() {
  const list = $("#adminProductList");

  if (products.length === 0) {
    list.innerHTML = `<p>${escapeHTML(t("noProducts"))}</p>`;
    return;
  }

  list.innerHTML = products.map((product) => `
    <div class="admin-item">
      <div>
        <p><strong>${escapeHTML(product.name)}</strong></p>
        <p>${money(product.price)} · ${escapeHTML(
          categoryNames[product.category]?.[language] || product.category
        )}</p>
      </div>
      <div class="item-actions">
        <button data-edit="${product.id}">${escapeHTML(t("editProduct"))}</button>
        <button class="delete-btn" data-delete="${product.id}">
          ${escapeHTML(t("deleteProduct"))}
        </button>
      </div>
    </div>
  `).join("");
}

$("#adminProductList").addEventListener("click", (event) => {
  const editButton = event.target.closest("[data-edit]");
  const deleteButton = event.target.closest("[data-delete]");

  if (editButton) {
    const product = products.find((item) => item.id === Number(editButton.dataset.edit));
    if (!product) return;

    $("#editProductId").value = product.id;
    $("#newProductName").value = product.name;
    $("#newProductPrice").value = product.price;
    $("#newProductCategory").value = product.category;
    $("#newProductImage").value = product.image || "";
    $("#saveProductBtn").textContent = t("editProduct");

    $("#newProductName").focus();
    return;
  }

  if (deleteButton) {
    const id = Number(deleteButton.dataset.delete);

    if (!confirm(t("confirmDelete"))) return;

    products = products.filter((item) => item.id !== id);
    saveProducts();
    renderProducts();
    renderAdminProducts();

    // Keep historical order records even when a product is deleted.
    showToast(t("productDeleted"));
  }
});

$("#productForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const idValue = $("#editProductId").value;
  const name = $("#newProductName").value.trim();
  const price = Number($("#newProductPrice").value);
  const category = $("#newProductCategory").value;
  const image = $("#newProductImage").value.trim();

  if (!name || !Number.isFinite(price) || price <= 0) {
    showToast(t("enterValidPrice"));
    return;
  }

  if (idValue) {
    products = products.map((product) => Number(product.id) === Number(idValue)
      ? { ...product, name, price, category, image }
      : product
    );
  } else {
    products.push({
      id: Date.now(),
      name,
      price,
      category,
      image: image || "https://placehold.co/600x400?text=SellYou"
    });
  }

  saveProducts();
  renderProducts();
  renderAdminProducts();

  $("#productForm").reset();
  $("#editProductId").value = "";
  $("#saveProductBtn").textContent = t("addProduct");

  showToast(t("productSaved"));
});

function renderOrders() {
  const list = $("#adminOrderList");

  if (orders.length === 0) {
    list.innerHTML = `<p>${escapeHTML(t("noOrders"))}</p>`;
    return;
  }

  list.innerHTML = orders.map((order) => {
    const date = new Date(order.date).toLocaleString(
      language === "km" ? "km-KH" : "en-US"
    );

    const payment = order.payment === "bank" ? t("bank") : t("cod");

    return `
      <div class="admin-item">
        <div>
          <p><strong>${escapeHTML(order.productName)}</strong> × ${order.quantity}</p>
          <p>${escapeHTML(t("customer"))}: ${escapeHTML(order.customer)}</p>
          <p>${escapeHTML(t("phone"))}: ${escapeHTML(order.phone)}</p>
          <p>${escapeHTML(t("address"))}: ${escapeHTML(order.address)}</p>
          <p>${escapeHTML(payment)} · ${escapeHTML(date)}</p>
          <p>${escapeHTML(t("total"))}: <strong>${money(order.total)}</strong></p>
          <p>${escapeHTML(t("status"))}: ${escapeHTML(
            order.status === "cancelled" ? t("cancel") : t("pending")
          )}</p>
        </div>
        ${
          order.status !== "cancelled"
            ? `<div class="item-actions">
                 <button class="delete-btn" data-cancel="${order.id}">
                   ${escapeHTML(t("cancel"))}
                 </button>
               </div>`
            : ""
        }
      </div>
    `;
  }).join("");
}

$("#adminOrderList").addEventListener("click", (event) => {
  const button = event.target.closest("[data-cancel]");
  if (!button) return;

  const id = Number(button.dataset.cancel);
  orders = orders.map((order) => Number(order.id) === id
    ? { ...order, status: "cancelled" }
    : order
  );

  saveOrders();
  renderOrders();
  updateStats();
  showToast(t("orderCancelled"));
});

function updateStats() {
  $("#orderCount").textContent = orders.length;

  const revenue = orders
    .filter((order) => order.status !== "cancelled")
    .reduce((sum, order) => sum + Number(order.total || 0), 0);

  $("#revenue").textContent = money(revenue);
}

$("#exportOrders").addEventListener("click", () => {
  const file = new Blob([JSON.stringify(orders, null, 2)], {
    type: "application/json"
  });

  const url = URL.createObjectURL(file);
  const link = document.createElement("a");

  link.href = url;
  link.download = "sellyou-orders.json";
  link.click();

  URL.revokeObjectURL(url);
  showToast(t("exported"));
});

$("#languageBtn").addEventListener("click", () => {
  language = language === "km" ? "en" : "km";
  localStorage.setItem("sellyou_language", language);
  applyLanguage();
});

applyLanguage();

