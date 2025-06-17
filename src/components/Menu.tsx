
import React, { useState } from 'react';
import { Star, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  rating: number;
  category: string;
  ingredients: string[];
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Signature Espresso",
    description: "Rich, aromatic espresso with a perfect crema",
    price: "$4.50",
    image: "https://images.unsplash.com/photo-1610632380989-680fe40816c6?w=400",
    rating: 4.9,
    category: "coffee",
    ingredients: ["Premium Arabica beans", "Perfect crema", "Rich aroma"]
  },
  {
    id: 2,
    name: "Cappuccino Deluxe",
    description: "Creamy cappuccino with artistic foam design",
    price: "$5.25",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400",
    rating: 4.8,
    category: "coffee",
    ingredients: ["Espresso", "Steamed milk", "Foam art", "Cinnamon dust"]
  },
  {
    id: 3,
    name: "Croissant Supreme",
    description: "Buttery, flaky croissant baked fresh daily",
    price: "$3.75",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400",
    rating: 4.7,
    category: "pastry",
    ingredients: ["French butter", "Fresh flour", "Sea salt", "Love"]
  },
  {
    id: 4,
    name: "Latte Art Special",
    description: "Smooth latte with beautiful artistic foam",
    price: "$5.50",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400",
    rating: 4.9,
    category: "coffee",
    ingredients: ["Double shot espresso", "Steamed milk", "Vanilla syrup", "Foam art"]
  },
  {
    id: 5,
    name: "Chocolate Muffin",
    description: "Rich chocolate muffin with chocolate chips",
    price: "$4.25",
    image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400",
    rating: 4.6,
    category: "pastry",
    ingredients: ["Dark chocolate", "Chocolate chips", "Vanilla extract", "Premium cocoa"]
  },
  {
    id: 6,
    name: "Iced Coffee Blend",
    description: "Refreshing iced coffee with premium blend",
    price: "$4.75",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400",
    rating: 4.8,
    category: "cold",
    ingredients: ["Cold brew coffee", "Ice cubes", "Milk", "Simple syrup"]
  }
];

const Menu: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'coffee', name: 'Coffee' },
    { id: 'pastry', name: 'Pastries' },
    { id: 'cold', name: 'Cold Drinks' }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const openItemDetails = (item: MenuItem) => {
    setSelectedItem(item);
    setIsDialogOpen(true);
  };

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-800 mb-4">
            Our Menu
          </h2>
          <p className="text-xl text-coffee-600 max-w-2xl mx-auto">
            Discover our carefully crafted selection of premium coffee and delicious treats
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up delay-200">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className={`px-6 py-2 transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-coffee-600 hover:bg-coffee-700 text-white'
                  : 'border-coffee-600 text-coffee-600 hover:bg-coffee-600 hover:text-white'
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => openItemDetails(item)}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-semibold text-coffee-800">{item.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-coffee-800 mb-2">{item.name}</h3>
                <p className="text-coffee-600 mb-4">{item.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-coffee-600">{item.price}</span>
                  <Button
                    size="sm"
                    className="bg-coffee-600 hover:bg-coffee-700 text-white transition-all duration-300"
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    Add
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Item Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-md">
          {selectedItem && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-coffee-800">
                  {selectedItem.name}
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-4">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="font-semibold">{selectedItem.rating}</span>
                  </div>
                  <span className="text-2xl font-bold text-coffee-600">{selectedItem.price}</span>
                </div>
                
                <p className="text-coffee-600">{selectedItem.description}</p>
                
                <div>
                  <h4 className="font-semibold text-coffee-800 mb-2">Ingredients:</h4>
                  <ul className="list-disc list-inside space-y-1 text-coffee-600">
                    {selectedItem.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
                
                <Button className="w-full bg-coffee-600 hover:bg-coffee-700 text-white">
                  <Plus className="h-4 w-4 mr-2" />
                  Add to Order - {selectedItem.price}
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Menu;
