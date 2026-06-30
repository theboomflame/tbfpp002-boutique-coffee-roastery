"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";

export interface CartItem {
  slug: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (item: Omit<CartItem, "quantity">) => void;
  removeItem: (slug: string) => void;
  increaseQuantity: (slug: string) => void;
  decreaseQuantity: (slug: string) => void;
  totalItems: number;
  subtotal: number;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
  // Always start empty (server and client match)
  const [items, setItems] = useState<CartItem[]>([]);

  const [isOpen, setIsOpen] = useState(false);

  // Load cart after hydration
  useEffect(() => {
    const savedCart = localStorage.getItem("veloura-cart");

    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch {
        console.error("Failed to load cart.");
      }
    }
  }, []);

  // Save whenever cart changes
  useEffect(() => {
    localStorage.setItem(
      "veloura-cart",
      JSON.stringify(items)
    );
  }, [items]);

  const openCart = () => setIsOpen(true);

  const closeCart = () => setIsOpen(false);

  const addItem = (item: Omit<CartItem, "quantity">) => {
    setItems((current) => {
      const existing = current.find(
        (i) => i.slug === item.slug
      );

      if (existing) {
        return current.map((i) =>
          i.slug === item.slug
            ? {
                ...i,
                quantity: i.quantity + 1,
              }
            : i
        );
      }

      return [
        ...current,
        {
          ...item,
          quantity: 1,
        },
      ];
    });

    openCart();
  };

  const removeItem = (slug: string) => {
    setItems((current) =>
      current.filter((item) => item.slug !== slug)
    );
  };

  const increaseQuantity = (slug: string) => {
    setItems((current) =>
      current.map((item) =>
        item.slug === slug
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (slug: string) => {
    setItems((current) =>
      current
        .map((item) =>
          item.slug === slug
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const totalItems = useMemo(
    () =>
      items.reduce(
        (sum, item) => sum + item.quantity,
        0
      ),
    [items]
  );

  const subtotal = useMemo(
    () =>
      items.reduce(
        (sum, item) =>
          sum + item.price * item.quantity,
        0
      ),
    [items]
  );

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        openCart,
        closeCart,
        addItem,
        removeItem,
        increaseQuantity,
        decreaseQuantity,
        totalItems,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider."
    );
  }

  return context;
}