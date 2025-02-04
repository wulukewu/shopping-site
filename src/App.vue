<template>
  <navbar-list :categories="categories"></navbar-list>
  <products-list :products="products"></products-list>
</template>

<script>
import NavbarList from "./components/navbar/NavbarList.vue";
import ProductsList from "./components/products/ProductsList.vue";

export default {
  components: {
    NavbarList,
    ProductsList,
  },
  methods: {
    generateId() {
      const characters = "abcdefghijklmnopqrstuvwxyz";
      let id = "";
      for (let i = 0; i < 8; i++) {
        id += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return id;
    },
  },
  data() {
    return {
      categories: [
        { id: "clothing", name: "Clothing" },
        { id: "electronics", name: "Electronics" },
        { id: "home-and-kitchen", name: "Home & Kitchen" },
        { id: "accessories", name: "Accessories" },
        { id: "shoes", name: "Shoes" },
        { id: "books", name: "Books" },
        { id: "furniture", name: "Furniture" },
        { id: "sports-and-outdoors", name: "Sports & Outdoors" },
      ],
      products: [
        {
          id: this.generateId(),
          category: ["clothing"],
          name: "T-Shirt",
          price: 399,
          description:
            "Comfortable and stylish cotton t-shirt. Available in various colors and sizes.",
        },
        {
          id: this.generateId(),
          category: ["clothing"],
          name: "Jeans",
          price: 999,
          description:
            "Classic denim jeans with a modern fit. Durable and versatile.",
        },
        {
          id: this.generateId(),
          category: ["clothing"],
          name: "Dress",
          price: 1299,
          description:
            "Elegant dress perfect for special occasions or a night out.",
        },
        {
          id: this.generateId(),
          category: ["clothing"],
          name: "Hoodie",
          price: 799,
          description: "Warm and cozy hoodie for everyday wear.",
        },
        {
          id: this.generateId(),
          category: ["clothing"],
          name: "Sweater",
          price: 899,
          description: "Knitted sweater made from soft materials.",
        },
        {
          id: this.generateId(),
          category: ["clothing"],
          name: "Jacket",
          price: 1599,
          description: "Stylish jacket for protection from the elements.",
        },
        {
          id: this.generateId(),
          category: ["clothing"],
          name: "Skirt",
          price: 699,
          description: "Versatile skirt that can be dressed up or down.",
        },
        {
          id: this.generateId(),
          category: ["clothing"],
          name: "Blouse",
          price: 599,
          description: "Elegant blouse suitable for work or casual wear.",
        },
        {
          id: this.generateId(),
          category: ["clothing"],
          name: "Pants",
          price: 899,
          description: "Comfortable and stylish pants.",
        },
        {
          id: this.generateId(),
          category: ["clothing"],
          name: "Shorts",
          price: 499,
          description: "Perfect for summer.",
        },
        {
          id: this.generateId(),
          category: ["electronics"],
          name: "Smartphone",
          price: 15999,
          description:
            "High-end smartphone with a powerful processor and stunning display.",
        },
        {
          id: this.generateId(),
          category: ["electronics"],
          name: "Laptop",
          price: 29999,
          description: "Powerful laptop for work and gaming.",
        },
        {
          id: this.generateId(),
          category: ["electronics"],
          name: "Headphones",
          price: 2999,
          description:
            "Noise-canceling headphones for immersive audio experience.",
        },
        {
          id: this.generateId(),
          category: ["electronics"],
          name: "Smartwatch",
          price: 7999,
          description:
            "Feature-rich smartwatch for tracking fitness and staying connected.",
        },
        {
          id: this.generateId(),
          category: ["electronics"],
          name: "Tablet",
          price: 9999,
          description: "Versatile tablet for entertainment and productivity.",
        },
        {
          id: this.generateId(),
          category: ["electronics"],
          name: "Camera",
          price: 12999,
          description:
            "High-resolution camera for capturing stunning photos and videos.",
        },
        {
          id: this.generateId(),
          category: ["electronics"],
          name: "Smart TV",
          price: 25999,
          description: "4K Smart TV with vibrant colors and smart features.",
        },
        {
          id: this.generateId(),
          category: ["electronics"],
          name: "Gaming Console",
          price: 14999,
          description:
            "Next-generation gaming console for immersive gaming experiences.",
        },
        {
          id: this.generateId(),
          category: ["electronics"],
          name: "Wireless Mouse",
          price: 799,
          description: "Ergonomic wireless mouse for comfortable use.",
        },
        {
          id: this.generateId(),
          category: ["electronics"],
          name: "Keyboard",
          price: 999,
          description: "Mechanical keyboard for fast and accurate typing.",
        },
        {
          id: this.generateId(),
          category: ["home-and-kitchen"],
          name: "Coffee Maker",
          price: 2499,
          description:
            "Automatic coffee maker for brewing delicious coffee at home.",
        },
        {
          id: this.generateId(),
          category: ["home-and-kitchen"],
          name: "Blender",
          price: 1999,
          description: "Powerful blender for smoothies, soups, and more.",
        },
        {
          id: this.generateId(),
          category: ["home-and-kitchen"],
          name: "Toaster Oven",
          price: 2999,
          description:
            "Versatile toaster oven for baking, toasting, and reheating.",
        },
        {
          id: this.generateId(),
          category: ["home-and-kitchen"],
          name: "Cookware Set",
          price: 4999,
          description: "Complete cookware set for all your cooking needs.",
        },
        {
          id: this.generateId(),
          category: ["home-and-kitchen"],
          name: "Knife Set",
          price: 2999,
          description:
            "High-quality knife set for precise cutting and slicing.",
        },
        {
          id: this.generateId(),
          category: ["home-and-kitchen"],
          name: "Dinnerware Set",
          price: 3999,
          description: "Elegant dinnerware set for formal and casual dining.",
        },
        {
          id: this.generateId(),
          category: ["home-and-kitchen"],
          name: "Vacuum Cleaner",
          price: 5999,
          description:
            "Powerful vacuum cleaner for keeping your home clean and tidy.",
        },
        {
          id: this.generateId(),
          category: ["home-and-kitchen"],
          name: "Air Purifier",
          price: 4999,
          description:
            "Air purifier for removing allergens and pollutants from your home.",
        },
        {
          id: this.generateId(),
          category: ["home-and-kitchen"],
          name: "Cutting Board",
          price: 499,
          description: "Durable cutting board.",
        },
        {
          id: this.generateId(),
          category: ["home-and-kitchen"],
          name: "Storage Container",
          price: 299,
          description: "Airtight food container.",
        },
        {
          id: this.generateId(),
          category: ["accessories"],
          name: "Watch",
          price: 3999,
          description: "Stylish watch for men and women.",
        },
        {
          id: this.generateId(),
          category: ["accessories"],
          name: "Sunglasses",
          price: 1999,
          description: "Protect your eyes with these stylish sunglasses.",
        },
        {
          id: this.generateId(),
          category: ["accessories"],
          name: "Wallet",
          price: 999,
          description: "Leather wallet for men and women.",
        },
        {
          id: this.generateId(),
          category: ["accessories"],
          name: "Belt",
          price: 799,
          description: "Leather belt for men and women.",
        },
        {
          id: this.generateId(),
          category: ["accessories"],
          name: "Scarf",
          price: 599,
          description: "Warm and stylish scarf for winter.",
        },
        {
          id: this.generateId(),
          category: ["accessories"],
          name: "Hat",
          price: 499,
          description: "Trendy hat for any occasion.",
        },
        {
          id: this.generateId(),
          category: ["accessories"],
          name: "Gloves",
          price: 699,
          description: "Warm gloves for winter.",
        },
        {
          id: this.generateId(),
          category: ["accessories"],
          name: "Jewelry Set",
          price: 2999,
          description: "Elegant jewelry set for special occasions.",
        },
        {
          id: this.generateId(),
          category: ["accessories"],
          name: "Backpack",
          price: 1299,
          description: "Durable and stylish backpack.",
        },
        {
          id: this.generateId(),
          category: ["accessories"],
          name: "Keychain",
          price: 199,
          description: "Cute and stylish keychain.",
        },
        {
          id: this.generateId(),
          category: ["shoes"],
          name: "Sneakers",
          price: 2999,
          description: "Comfortable sneakers for everyday wear.",
        },
        {
          id: this.generateId(),
          category: ["shoes"],
          name: "Boots",
          price: 3999,
          description: "Stylish boots for any occasion.",
        },
        {
          id: this.generateId(),
          category: ["shoes"],
          name: "Sandals",
          price: 1499,
          description: "Comfortable sandals for summer.",
        },
        {
          id: this.generateId(),
          category: ["shoes"],
          name: "Heels",
          price: 2499,
          description: "Elegant heels for special occasions.",
        },
        {
          id: this.generateId(),
          category: ["shoes"],
          name: "Flats",
          price: 1999,
          description: "Versatile flats for work or casual wear.",
        },
        {
          id: this.generateId(),
          category: ["shoes"],
          name: "Loafers",
          price: 2999,
          description: "Stylish loafers for men and women.",
        },
        {
          id: this.generateId(),
          category: ["shoes"],
          name: "Running Shoes",
          price: 3499,
          description: "Performance running shoes for athletes.",
        },
        {
          id: this.generateId(),
          category: ["shoes"],
          name: "Formal Shoes",
          price: 4499,
          description: "Elegant formal shoes for men and women.",
        },
        {
          id: this.generateId(),
          category: ["shoes"],
          name: "Slippers",
          price: 799,
          description: "Comfortable slippers for home.",
        },
        {
          id: this.generateId(),
          category: ["shoes"],
          name: "Socks",
          price: 199,
          description: "Warm and comfortable socks.",
        },
        {
          id: this.generateId(),
          category: ["books"],
          name: "Novel",
          price: 399,
          description: "Bestselling novel by a renowned author.",
        },
        {
          id: this.generateId(),
          category: ["books"],
          name: "Cookbook",
          price: 499,
          description: "Cookbook with delicious recipes.",
        },
        {
          id: this.generateId(),
          category: ["books"],
          name: "Biography",
          price: 599,
          description: "Inspiring biography of a famous person.",
        },
        {
          id: this.generateId(),
          category: ["books"],
          name: "Self-Help Book",
          price: 449,
          description: "Self-help book to improve your life.",
        },
        {
          id: this.generateId(),
          category: ["books"],
          name: "Children's Book",
          price: 299,
          description: "Fun and educational children's book.",
        },
        {
          id: this.generateId(),
          category: ["books"],
          name: "Textbook",
          price: 799,
          description: "Comprehensive textbook for students.",
        },
        {
          id: this.generateId(),
          category: ["books"],
          name: "Art Book",
          price: 999,
          description: "Beautiful art book with stunning images.",
        },
        {
          id: this.generateId(),
          category: ["books"],
          name: "Travel Guide",
          price: 499,
          description: "Detailed travel guide to your dream destination.",
        },
        {
          id: this.generateId(),
          category: ["books"],
          name: "Comic Book",
          price: 199,
          description: "Entertaining comic book.",
        },
        {
          id: this.generateId(),
          category: ["books"],
          name: "Magazine",
          price: 99,
          description: "Up-to-date magazine.",
        },
        {
          id: this.generateId(),
          category: ["furniture"],
          name: "Sofa",
          price: 12999,
          description: "Comfortable sofa for your living room.",
        },
        {
          id: this.generateId(),
          category: ["furniture"],
          name: "Bed",
          price: 14999,
          description: "Stylish bed for your bedroom.",
        },
        {
          id: this.generateId(),
          category: ["furniture"],
          name: "Dining Table",
          price: 7999,
          description: "Elegant dining table for your dining room.",
        },
        {
          id: this.generateId(),
          category: ["furniture"],
          name: "Chair",
          price: 2999,
          description: "Comfortable chair for any room.",
        },
        {
          id: this.generateId(),
          category: ["furniture"],
          name: "Desk",
          price: 5999,
          description: "Functional desk for your home office.",
        },
        {
          id: this.generateId(),
          category: ["furniture"],
          name: "Bookshelf",
          price: 4999,
          description: "Stylish bookshelf for your books and decorations.",
        },
        {
          id: this.generateId(),
          category: ["furniture"],
          name: "Coffee Table",
          price: 3999,
          description: "Modern coffee table for your living room.",
        },
        {
          id: this.generateId(),
          category: ["furniture"],
          name: "Nightstand",
          price: 2499,
          description: "Convenient nightstand for your bedroom.",
        },
        {
          id: this.generateId(),
          category: ["furniture"],
          name: "Dresser",
          price: 6999,
          description: "Spacious dresser for your clothes.",
        },
        {
          id: this.generateId(),
          category: ["furniture"],
          name: "Mirror",
          price: 1999,
          description: "Stylish mirror for any room.",
        },
        {
          id: this.generateId(),
          category: ["sports-and-outdoors"],
          name: "Tent",
          price: 3999,
          description: "Durable tent for camping trips.",
        },
        {
          id: this.generateId(),
          category: ["sports-and-outdoors"],
          name: "Camping Stove",
          price: 1999,
          description: "Portable camping stove for cooking outdoors.",
        },
        {
          id: this.generateId(),
          category: ["sports-and-outdoors"],
          name: "Backpack",
          price: 2499,
          description: "Large backpack for hiking and camping.",
        },
        {
          id: this.generateId(),
          category: ["sports-and-outdoors"],
          name: "Hiking Boots",
          price: 3499,
          description: "Comfortable hiking boots for trekking.",
        },
        {
          id: this.generateId(),
          category: ["sports-and-outdoors"],
          name: "Sleeping Bag",
          price: 2999,
          description: "Warm sleeping bag for camping.",
        },
        {
          id: this.generateId(),
          category: ["sports-and-outdoors"],
          name: "Bicycle",
          price: 7999,
          description: "Mountain bike for off-road adventures.",
        },
        {
          id: this.generateId(),
          category: ["sports-and-outdoors"],
          name: "Yoga Mat",
          price: 799,
          description: "Comfortable yoga mat for your workout.",
        },
        {
          id: this.generateId(),
          category: ["sports-and-outdoors"],
          name: "Dumbbells",
          price: 1499,
          description: "Set of dumbbells for strength training.",
        },
        {
          id: this.generateId(),
          category: ["sports-and-outdoors"],
          name: "Basketball",
          price: 599,
          description: "Official size basketball for games and practice.",
        },
        {
          id: this.generateId(),
          category: ["sports-and-outdoors"],
          name: "Baseball Bat",
          price: 999,
          description: "Durable baseball bat for training.",
        },
        {
          id: this.generateId(),
          category: ["home-and-kitchen", "furniture"],
          name: "Lamp",
          price: 999,
          description: "Stylish lamp for your living room.",
        },
        {
          id: this.generateId(),
          category: ["home-and-kitchen"],
          name: "Oven Mitts",
          price: 399,
          description: "Heat-resistant oven mitts for baking.",
        },
        {
          id: this.generateId(),
          category: ["home-and-kitchen"],
          name: "Dish Rack",
          price: 499,
          description: "Practical dish rack for drying dishes.",
        },
        {
          id: this.generateId(),
          category: ["furniture"],
          name: "Ottoman",
          price: 2499,
          description: "Comfortable ottoman for your living room.",
        },
        {
          id: this.generateId(),
          category: ["furniture"],
          name: "TV Stand",
          price: 6999,
          description: "Modern TV stand for your living room.",
        },
        {
          id: this.generateId(),
          category: ["furniture"],
          name: "Rocking Chair",
          price: 4999,
          description: "Relaxing rocking chair for your porch.",
        },
        {
          id: this.generateId(),
          category: ["sports-and-outdoors"],
          name: "Fishing Rod",
          price: 1299,
          description: "Durable fishing rod for all your fishing adventures.",
        },
        {
          id: this.generateId(),
          category: ["sports-and-outdoors"],
          name: "Soccer Ball",
          price: 599,
          description: "Regulation size soccer ball for practice and games.",
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
</style>
